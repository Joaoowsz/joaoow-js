const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

message.channel.send({
"content": "Ajuda - Nodus Bot",
  "embed": {
    "description": "**Prefix = ``!``**",
    "url": "https://cdn.discordapp.com/attachments/466385018227261440/470524156925181973/4GIlTLzP_400x400.jpg",
    "color": 7419530,
    "timestamp": new Date(),
    "footer": {
      "icon_url": message.author.displayAvatarURL,
      "text": "Enviado por: " + message.author.username
    },
    "author": {
      "name": "Comandos - Nodus Bot",
      "url": "https://cdn.discordapp.com/attachments/466385018227261440/470524156925181973/4GIlTLzP_400x400.jpg",
      "icon_url": "https://cdn.discordapp.com/attachments/466385018227261440/470524156925181973/4GIlTLzP_400x400.jpg"
    },
    "fields": [
      {
        "name": "Anúncio",
        "value": "Formato: *!anunciar <mensagem>*\nCanal: *<#470473648445325313>* \nFunção: *Use para enviar um anúncio.*\n "
      },
      {
        "name": "Clear",
        "value": "Formato: *!clear <quantidade>*\nCanal: *<#470513964300632074>*  \nFunção: *Use para limpar o chat.*\n "
      },
      {
        "name": "Banimento",
        "value": "Formato: *!ban <@username> <motivo>*\nCanal: *<#470513964300632074>*  \nFunção: *Use para banir um membro do Discord.*\n "
      }
        ]
  }
})
}

module.exports.help = {
    name: "help"
}