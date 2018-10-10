const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  message.channel.send({
    "embed": {
      "description": "Enviei a lista de comandos no seu privado, " + message.author.username + ".",
      "url": "https://images-ext-1.discordapp.net/external/0vwGKF6HeV7-sSeRwOQjfWzCslPkN8FS9rf-0AJMFT8/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/496949356151439360/2e435a7132130a0cdca32cd29932ed10.png?width=473&height=473",
      "color": 7990292,
      "timestamp": new Date(),
      "footer": {
        "icon_url": "https://images-ext-1.discordapp.net/external/0vwGKF6HeV7-sSeRwOQjfWzCslPkN8FS9rf-0AJMFT8/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/496949356151439360/2e435a7132130a0cdca32cd29932ed10.png?width=473&height=473",
        "text": "Atlantic"
      }
  }
  }); 

message.author.send({
"content": "Lista de comandos - Atlantic",
  "embed": {
    "description": "**Prefix = ``!``**",
    "url": "https://images-ext-1.discordapp.net/external/0vwGKF6HeV7-sSeRwOQjfWzCslPkN8FS9rf-0AJMFT8/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/496949356151439360/2e435a7132130a0cdca32cd29932ed10.png?width=473&height=473",
    "color": 7419530,
    "timestamp": new Date(),
    "footer": {
      "icon_url": message.author.displayAvatarURL,
      "text": "Bot desenvolvido por @Joaoowsz#1568"
    },
    "author": {
      "name": "Lista de comandos - Atlantic",
      "url": "https://images-ext-1.discordapp.net/external/0vwGKF6HeV7-sSeRwOQjfWzCslPkN8FS9rf-0AJMFT8/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/496949356151439360/2e435a7132130a0cdca32cd29932ed10.png?width=473&height=473",
      "icon_url": "https://images-ext-1.discordapp.net/external/0vwGKF6HeV7-sSeRwOQjfWzCslPkN8FS9rf-0AJMFT8/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/496949356151439360/2e435a7132130a0cdca32cd29932ed10.png?width=473&height=473"
    },
    "fields": [
      {
        "name": "announcements",
        "value": "Formato: *!anunciar <mensagem>*\nChannel: *<#494264769835040778>* \nFunção: *Use para enviar um anúncio.*\n "
      },
      {
        "name": "Clear",
        "value": "Formato: *!clear <quantidade>*\nChannel: *<#494267583801982976>*  \nFunção: *Use para apagar algumas mensagens.*\n "
      },
      {
        "name": "Banishment",
        "value": "Formato: *!ban <@username> <motivo>*\nChannel: *<#494267583801982976>*  \nFunção: *Use para banir um membro do servidor.*\n "
      },
      {
        "name": "Expulsion",
        "value": "Formato: *!kick <@username> <motivo>*\nChannel: *<#494267583801982976>*  \nFunção: *Use para expulsar um membro do servidor.*\n "
      },
      {
        "name": "Silencing",
        "value": "Formato: *!tempmute <@username> <segundos>*\nChannel: *<#494267583801982976>*  \nFunção: *Use para mutar um membro temporáriamente.*\n "
      },
      {
        "name": "Questions",
        "value": "Formato: *!perguntar @Atlantic <pergunta>*\nChannel: *<#494267583801982976>*  \nFunção: *Use para se divertir perguntando algo ao bot.*\n "
      },
      {
        "name": "Avatar",
        "value": "Formato: *!avatar <@username>*\nChannel: *<#494267583801982976>*  \nFunção: *Use para ver o avatar de alguém.*\n "
      },
      {
        "name": "Dog",
        "value": "Formato: *!dog*\nChannel: *<#494267583801982976>*  \nFunção: *Use para se divertir com um cachorro.*\n "
      },
      {
        "name": "RemoveGroup",
        "value": "Formato: *!removegroup <@username> <role>*\nChannel: *<#494267583801982976>*  \nFunção: *Use para remover o cargo de alguém.*\n "
      },
      {
        "name": "SetGroup",
        "value": "Formato: *!setgroup <@username>* <cargo>\nChannel: *<#494267583801982976>*  \nFunção: *Use para setar um cargo em alguém.*\n "
      },
      {
        "name": "ServerInfo",
        "value": "Formato: *!serverinfo*\nChannel: *<#494267583801982976>*  \nFunção: *Use para ver algumas informações do servidor.*\n "
      }
        ]
  }
}).catch(err => {
  message.channel.send({
    
  "embed": {
    "description": message.author.username + ", não foi possível enviar a lista de comandos no seu privado pois a sua DM está fechada.",
    "url": "https://images-ext-1.discordapp.net/external/0vwGKF6HeV7-sSeRwOQjfWzCslPkN8FS9rf-0AJMFT8/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/496949356151439360/2e435a7132130a0cdca32cd29932ed10.png?width=473&height=473",
    "color": 7990292,
    "timestamp": new Date(),
    "footer": {
      "icon_url": "https://images-ext-1.discordapp.net/external/0vwGKF6HeV7-sSeRwOQjfWzCslPkN8FS9rf-0AJMFT8/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/496949356151439360/2e435a7132130a0cdca32cd29932ed10.png?width=473&height=473",
      "text": "Atlantic"
    }
}

  })
})
}

module.exports.help = {
    name: "help"
}