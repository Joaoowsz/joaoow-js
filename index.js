const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const superagent = require("superagent");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();
let purple = botconfig.purple;

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Comando não encontrado.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} carregado.`);
    bot.commands.set(props.help.name, props);
  });
});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
  bot.user.setActivity("Desenvolvido por Joaoowsz#0001", {type: "PLAYING"});

});

bot.on('guildMemberAdd', member => {
  console.log('User ' + member.user.username + ' entrou no servidor!')

  let embedbv = ({
    "embed": {
      "description": "Seja bem-vindo(a) ao discord oficial do Suuck!\nAqui você poderá criar novas amizades, participar de eventos e até mesmo bater um papo comigo!\n\nEntre no meu canal [clicando aqui](https://www.youtube.com/channel/UCveCy4D7N_9wv49nDqhFvAw), aproveite para se inscrever e ativar o sininho de notificação para receber todos os meus vídeos!",
      "url": "https://discordapp.com",
      "color": 14427808,
      "timestamp": "2018-12-30T05:39:43.479Z",
      "footer": {
        "icon_url": "https://cdn.discordapp.com/attachments/521157541905039360/521167240247246848/Discord.png",
        "text": null
      },
      "thumbnail": {
        "url": "https://cdn.discordapp.com/attachments/521157541905039360/521167240247246848/Discord.png"
      },
      "author": {
        "name": "Suuck › Discord",
        "url": "https://discordapp.com",
        "icon_url": "https://cdn.discordapp.com/attachments/521157541905039360/521167240247246848/Discord.png"
      }
    }

  })
  
  var role = member.guild.roles.find(`name`, '👤Membro')
  member.addRole(role)
  bot.channels.get("528251265382088704").send(`${member}`)
  bot.channels.get("528251265382088704").send(embedbv)

});

bot.on('guildMemberRemove', member => {
  console.log('user ' + member.user.username + ' saiu do servidor!')

  var mutado = member.guild.roles.find(`name`, 'Mutado')

  if(!member.roles.get(mutado.id)) return;
  bot.channels.get("528808778926391316").send(`Um usuário **mutado** saiu do servidor.\n**Usuário:** ${member}\n**ID:** ${member.id}`)
});


bot.on('message', async message => {
  let member = message.member;
  let blacklisted = [''];
  if(member.hasPermission('MANAGE_MESSAGES')) return 
  let foundInText = false;
  for (var i in blacklisted) {
    if (message.content.toLowerCase().includes(blacklisted[i].toLowerCase())) foundInText = true;
  }
  if (foundInText) {
    message.delete();
    message.channel.send(' ');
  }
})

bot.on("channelCreate", async channel => {

  let sChannel = channel.guild.channels.find(`name`, "📋logs");
  sChannel.send({
    "embed": {
      "color": 3066993,
      "timestamp": new Date(),
      "footer": {
        "icon_url": null,
        "text": null
      },
      "author": {
        "name": "📋 Logs - Suuck > Discord",
        "url": null,
        "icon_url": "https://cdn.discordapp.com/attachments/521157541905039360/521167240247246848/Discord.png"
      },
      "fields": [
        {
          "name": "Um canal foi criado.",
          "value": "Canal: " + channel
        }
      ]
    }
  })

})

bot.on("channelDelete", async channel => {

  let sChannel = channel.guild.channels.find(`name`, "📋logs");
  sChannel.send({
    "embed": {
      "color": 15158332,
      "timestamp": new Date(),
      "footer": {
        "icon_url": null,
        "text": null
      },
      "author": {
        "name": "📋 Logs - Suuck > Discord",
        "url": null,
        "icon_url": "https://cdn.discordapp.com/attachments/521157541905039360/521167240247246848/Discord.png"
      },
      "fields": [
        {
          "name": "Um canal foi deletado.",
          "value": "Canal: " + channel.name
        }
      ]
    }
  })

})
  


bot.on("messageDelete", async message => {

  let msg = message.guild.channels.find(`name`, "📋logs");
  msg.send({

    "embed": {
      "color": 9452521,
      "timestamp": new Date(),
      "footer": {
        "icon_url": message.author.displayAvatarURL,
        "text": "Autor: " + message.author.tag
      },
      "author": {
        "name": "📋 Logs - Suuck > Discord",
        "url": message.author.displayAvatarURL,
        "icon_url": "https://cdn.discordapp.com/attachments/521157541905039360/521167240247246848/Discord.png"
      },
      "fields": [
        {
          "name": "Uma mensagem foi deletada.",
          "value": "**Conteúdo:** " + message.content + "\n**Canal:** " + message.channel.name
        }
      ]
    }
  })
  })


bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = (botconfig.prefix);
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);

});

bot.login(process.env.BOT_TOKEN);
//*Discord.Colors = {
//    DEFAULT: 0,
//    AQUA: 1752220,
//    GREEN: 3066993,
//    BLUE: 3447003,
//    PURPLE: 10181046,
//    GOLD: 15844367,
//    ORANGE: 15105570,
//    RED: 15158332,
//    GREY: 9807270,
//    DARKER_GREY: 8359053,
//    NAVY: 3426654,
//    DARK_AQUA: 1146986,    
//    DARK_GREEN: 2067276,
//    DARK_BLUE: 2123412,
//    DARK_PURPLE: 7419530,
//    DARK_GOLD: 12745742,
//    DARK_ORANGE: 11027200,
//    DARK_RED: 10038562,
//    DARK_GREY: 9936031,
//    LIGHT_GREY: 12370112,
