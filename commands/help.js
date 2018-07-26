const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  message.channel.send("Enviei a lista de ajuda no seu privado, " + message.author.username +"!"); 

message.author.send({
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
      },
      {
        "name": "Expulsão",
        "value": "Formato: *!kick <@username> <motivo>*\nCanal: *<#470513964300632074>*  \nFunção: *Use para kickar um membro do Discord.*\n "
      },
      {
        "name": "Silenciamento",
        "value": "Formato: *!tempmute <@username> <segundos>*\nCanal: *<#470513964300632074>*  \nFunção: *Use para mutar um membro temporariamente.*\n "
      },
      {
        "name": "Informações",
        "value": "Formato: *!info <@username>*\nCanal: *<#470513964300632074>*  \nFunção: *Use para ver as informações de um membro.*\n "
      },
      {
        "name": "Bot",
        "value": "Formato: *!botinfo*\nCanal: *<#470513964300632074>*  \nFunção: *Use para ver as informações do bot.*\n "
      },
      {
        "name": "Perguntas",
        "value": "Formato: *!perguntar @Joaoow <pergunta>*\nCanal: *<#470513964300632074>*  \nFunção: *Use para fazer uma pergunta ao bot.*\n "
      },
      {
        "name": "Avatar",
        "value": "Formato: *!avatar <@username>*\nCanal: *<#470513964300632074>*  \nFunção: *Use para ver o avatar de um membro.*\n "
      },
      {
        "name": "Dog",
        "value": "Formato: *!dog*\nCanal: *<#470513964300632074>*  \nFunção: *Use para se divertir com imagens de cachorro.*\n "
      },
      {
        "name": "RemoveGroup",
        "value": "Formato: *!removegroup <@username> <cargo>*\nCanal: *<#470513964300632074>*  \nFunção: *Use para remover o cargo de um membro.*\n "
      },
      {
        "name": "SetGroup",
        "value": "Formato: *!setgroup <@username>* <cargo>\nCanal: *<#470513964300632074>*  \nFunção: *Use para setar o cargo de um membro.*\n "
      },
      {
        "name": "Report",
        "value": "Formato: *!report <@username> <motivo>*\nCanal: *<#470513964300632074>*  \nFunção: *Use para reportar um membro.*\n "
      },
      {
        "name": "ServerInfo",
        "value": "Formato: *!serverinfo*\nCanal: *<#470513964300632074>*  \nFunção: *Use para ver as informações do servidor.*\n "
      },
      {
        "name": "Avisos",
        "value": "Formato: *!warn <@username> <motivo>*\nCanal: *<#470513964300632074>*  \nFunção: *Use para dar um aviso a um membro.*\n "
      }
        ]
  }
}).catch(err => {
  message.channel.send("Não foi possível enviar a lista de comandos no seu privado, pois sua DM está privada.")
})
}

module.exports.help = {
    name: "help"
}