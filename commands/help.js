const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  message.channel.send({
    "embed": {
      "description": "Enviei a lista de comandos no seu privado, " + message.author.username + ".",
      "url": "https://cdn.discordapp.com/attachments/498307385966985257/501131620749672458/dc.png",
      "color": 7990292,
      "timestamp": new Date(),
      "footer": {
        "icon_url": "https://cdn.discordapp.com/attachments/498307385966985257/501131620749672458/dc.png",
        "text": "Joaoow.js"
      }
  }
  }); 

message.author.send({
"content": "Lista de comandos - Joaoow.js",
  "embed": {
    "description": "**Prefix = ``!``**",
    "url": "https://i.imgur.com/Stenp0u.png",
    "color": 7419530,
    "timestamp": new Date(),
    "footer": {
      "icon_url": message.author.displayAvatarURL,
      "text": "Bot desenvolvido por @Joaoowsz#1568"
    },
    "author": {
      "name": "Lista de comandos - FadeMC",
      "url": "https://i.imgur.com/Stenp0u.png",
      "icon_url": "https://i.imgur.com/Stenp0u.png"
    },
    "fields": [
      {
        "name": "Anúncios",
        "value": "Formato: *!anunciar <mensagem>*\nChannel: *<#521161401700450313>* \nFunção: *Use para enviar um anúncio.*\n "
      },
      {
        "name": "Clear",
        "value": "Formato: *!clear <quantidade>*\nChannel: *<#521150947519496208>*  \nFunção: *Use para apagar algumas mensagens.*\n "
      },
      {
        "name": "Banimento",
        "value": "Formato: *!ban <@username> <motivo>*\nChannel: *<#521150947519496208>*  \nFunção: *Use para banir um membro do servidor.*\n "
      },
      {
        "name": "Expulsão",
        "value": "Formato: *!kick <@username> <motivo>*\nChannel: *<#521150947519496208*  \nFunção: *Use para expulsar um membro do servidor.*\n "
      },
      {
        "name": "Silenciamento",
        "value": "Formato: *!tempmute <@username> <segundos>*\nChannel: *<#521150947519496208>*  \nFunção: *Use para mutar um membro temporáriamente.*\n "
      },
      {
        "name": "Perguntar",
        "value": "Formato: *!perguntar @FadeMC <pergunta>*\nChannel: *<#521150947519496208>*  \nFunção: *Use para se divertir perguntando algo ao bot.*\n "
      },
      {
        "name": "Avatar",
        "value": "Formato: *!avatar <@username>*\nChannel: *<#521150947519496208>*  \nFunção: *Use para ver o avatar de alguém.*\n "
      },
      {
        "name": "Dog",
        "value": "Formato: *!dog*\nChannel: *<#521150947519496208>*  \nFunção: *Use para se divertir com um cachorro.*\n "
      },
      {
        "name": "RemoveGroup",
        "value": "Formato: *!removegroup <@username> <role>*\nChannel: *<#521150947519496208>*  \nFunção: *Use para remover o cargo de alguém.*\n "
      },
      {
        "name": "SetGroup",
        "value": "Formato: *!setgroup <@username>* <cargo>\nChannel: *<#521150947519496208>*  \nFunção: *Use para setar um cargo em alguém.*\n "
      },
      {
        "name": "ServerInfo",
        "value": "Formato: *!serverinfo*\nChannel: *<#521150947519496208>*  \nFunção: *Use para ver algumas informações do servidor.*\n "
      }
        ]
  }
}).catch(err => {
  message.channel.send({
    
  "embed": {
    "description": message.author.username + ", não foi possível enviar a lista de comandos no seu privado pois a sua DM está fechada.",
    "url": "https://i.imgur.com/Stenp0u.png",
    "color": 7990292,
    "timestamp": new Date(),
    "footer": {
      "icon_url": "https://i.imgur.com/Stenp0u.png",
      "text": "Equipe de desenvolvimento - FadeMC"
    }
}

  })
})
}

module.exports.help = {
    name: "help"
}