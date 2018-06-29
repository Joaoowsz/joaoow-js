const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const superagent = require("superagent");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();
let xp = require("./xp.json");
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
  bot.user.setActivity("futebol", {type: "PLAYING"});

});

bot.on("guildMemberAdd", async member => {
  console.log(`${member.id} entrou no servidor!`);

  let welcomechannel = member.guild.channels.find(`name`, "bem-vindo");
  welcomechannel.send({
    "embed": {
      "description": `Olá ${member}, seja bem-vindo a Comunidade Designer!\nMeu desenvolvedor: https://twitter.com/Joaoowsz`,
      "url": "",
      "color": "3066993",
    },
    "Thumbnail": {
      "url": "https://cdn.discordapp.com/attachments/457975654781026304/461696322089779210/ee15ee2204940b811508b13eac92068d.jpg"
    }
  });
})

bot.on("channelCreate", async channel => {

  let sChannel = channel.guild.channels.find(`name`, "event-log");
  sChannel.send({
    "embed": {
      "color": 3066993,
      "footer": {
        "icon_url": null,
        "text": null
      },
      "author": {
        "name": "Logs - Comunidade Designer™",
        "url": null,
        "icon_url": "https://cdn.discordapp.com/attachments/457975654781026304/461696322089779210/ee15ee2204940b811508b13eac92068d.jpg"
      },
      "fields": [
        {
          "name": "Um canal foi criado.",
          "value": "Canal criado: " + channel
        }
      ]
    }
  })

})

bot.on("channelDelete", async channel => {

  let sChannel = channel.guild.channels.find(`name`, "event-log");
  sChannel.send({
    "embed": {
      "color": 15158332,
      "footer": {
        "icon_url": null,
        "text": null
      },
      "author": {
        "name": "Logs - Comunidade Designer™",
        "url": null,
        "icon_url": "https://cdn.discordapp.com/attachments/457975654781026304/461696322089779210/ee15ee2204940b811508b13eac92068d.jpg"
      },
      "fields": [
        {
          "name": "Um canal foi deletado.",
          "value": "Canal deletado: " + channel.name
        }
      ]
    }
  })

})

bot.on("messageDelete", async message => {

  let msg = message.guild.channels.find(`name`, "event-log");
  msg.send({

    "embed": {
      "color": 9452521,
      "footer": {
        "icon_url": message.author.displayAvatarURL,
        "text": "Author da mensagem: " + message.author.tag
      },
      "author": {
        "name": "Logs - Comunidade Designer™",
        "url": message.author.displayAvatarURL,
        "icon_url": "https://cdn.discordapp.com/attachments/457975654781026304/461696322089779210/ee15ee2204940b811508b13eac92068d.jpg"
      },
      "fields": [
        {
          "name": "Mensagem apagada",
          "value": message.content
        }
      ]
    }
  })

})


bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let xpAdd = Math.floor(Math.random() * 7) + 8;
  console.log(xpAdd);

  if(!xp[message.author.id]){
    xp[message.author.id] = {
      xp: 0,
      level: 1
    };
  }


  let curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;
  let nxtLvl = xp[message.author.id].level * 300;
  xp[message.author.id].xp =  curxp + xpAdd;
  if(nxtLvl <= xp[message.author.id].xp){
    xp[message.author.id].level = curlvl + 1;
    let lvlup = new Discord.RichEmbed()
    .setTitle("Level Up!")
    .setColor(purple)
    .addField("Novo level:", curlvl + 1);

    message.channel.send(lvlup).then(msg => {msg.delete(5000)});
  }
  fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
    if(err) console.log(err)
  });


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