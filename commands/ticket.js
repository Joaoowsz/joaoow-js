const Discord = require('discord.js');
const moment = require('moment');

if(message.channel.id != "523838496691978240" && message.channel.id != "523586087696990208") return message.channel.send(" "); 
let tMessage = args.slice(0).join(" ");
if (!tMessage) return message.channel.send("❗ | Utilize: ``!ticket <sua dúvida>``");
message.delete().catch();
const logticket = bot.channels.get('525983734013362187');
const ticketchat = bot.channels.get('524805327166636048');
message.channel.send("✔ | Seu ticket foi enviado com sucesso! ")

let embed = ({
"embed": {
"description": "**Autor:** " + message.author.username + "\n**Dúvida:** " + tMessage + "\n**Status:** Aberto",
"url": null,
"color": 1752220,
"timestamp": new Date(),
"footer": {
  "icon_url": message.author.displayAvatarURL,
  "text": null
},
"thumbnail": {
  "url": message.author.displayAvatarURL
}, 
"author": {
  "name": "Informações sobre o seu ticket:",
  "url": null,
  "icon_url": "https://i.imgur.com/Stenp0u.png"
}
}
})

let embed2 = ({
  "embed": {
    "description": "**Autor:** " + message.author.username + "\n**Dúvida:** " + tMessage + "\n**Status:** Aberto",
    "url": null,
    "color": 1752220,
    "timestamp": new Date(),
    "footer": {
      "icon_url": message.author.displayAvatarURL,
      "text": null
    },
    "thumbnail": {
      "url": message.author.displayAvatarURL
    }, 
    "author": {
      "name": "Um novo ticket foi aberto!",
      "url": null,
      "icon_url": "https://i.imgur.com/Stenp0u.png"
    }
  }
    })

logticket.send(embed2)
ticketchat.send(embed2)
message.author.send(embed)


module.exports.help = {
    name: 'ticket'
};