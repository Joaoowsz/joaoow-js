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
    console.log(`${f} carregado!`);
    bot.commands.set(props.help.name, props);
  });
});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
  bot.user.setActivity("loja.fademc.com.br", {type: "PLAYING"});
  if(message.channel.id != "521150947519496208") return message.channel.send(", use o #bots!")

});

bot.on('guildMemberAdd', member => {
  console.log('User ' + member.user.username + ' entrou no servidor!')

  var role = member.guild.roles.find(`name`, 'Membro')

  member.addRole(role)
});


bot.on("channelCreate", async channel => {

  let sChannel = channel.guild.channels.find(`name`, "📋logs");
  sChannel.send({
    "embed": {
      "color": 3066993,
      "footer": {
        "icon_url": null,
        "text": null
      },
      "author": {
        "name": "📋 Logs - FadeMC",
        "url": null,
        "icon_url": "https://i.imgur.com/Stenp0u.png"
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
      "footer": {
        "icon_url": null,
        "text": null
      },
      "author": {
        "name": "📋 Logs - FadeMC",
        "url": null,
        "icon_url": "https://i.imgur.com/Stenp0u.png"
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
      "footer": {
        "icon_url": message.author.displayAvatarURL,
        "text": "Autor: " + message.author.tag
      },
      "author": {
        "name": "📋 Logs - FadeMC",
        "url": message.author.displayAvatarURL,
        "icon_url": "https://i.imgur.com/Stenp0u.png"
      },
      "fields": [
        {
          "name": "Uma mensagem foi deletada.",
          "value": "**Conteúdo:** " + message.content
        }
      ]
    }
  })

})


bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);

});

bot.login(process.env.BOT_TOKEN);
//Discord.Colors = {
//    DEFAULT: 0,
//    AQUA: 1752220,
//    GREEN: 3066993,
//    BLUE: 3447003,
//    PURPLE: 10181046,s
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
//    DARK_NAVY: 2899536