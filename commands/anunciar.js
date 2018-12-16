const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("❌ Você não possui permissão para executar esse comando.");
    let botmessage = args.slice(1).join(" ");
    message.delete().catch();
    message.channel.send({
  "embed": {
    "description": botmessage,
    "url": null,
    "color": 1752220,
    "timestamp": new Date(),
    "footer": {
      "icon_url": message.author.displayAvatarURL,
      "text": "Atenciosamente, " + message.author.username
    },
    "thumbnail": {
      "url": "https://i.imgur.com/Stenp0u.png"
    }, 
    "author": {
      "name": " Rede Fade informa:",
      "url": null,
      "icon_url": "https://images-ext-1.discordapp.net/external/YFjo9kmtQ0r3WM1KGn-ga2k9g5i6obaYK-f9KK9z5SU/%3Fv%3D1/https/cdn.discordapp.com/emojis/480512404229193736.gif"
    }
  }
    })
  }

module.exports.help = {
    name: "anunciar"
}