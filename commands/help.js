const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(message.channel.id != "523838496691978240","523586087696990208") return message.channel.send(" ");
  message.channel.send({
    "embed": {
      "description": "Enviei a lista de comandos no seu privado, " + message.author.username + ".",
      "url": "https://i.imgur.com/Stenp0u.png",
      "color": 7990292,
      "timestamp": new Date(),
      "footer": {
        "icon_url": "https://i.imgur.com/Stenp0u.png",
        "text": "Equipe de desenvolvimento do discord"
      }
  }
  }); 

message.author.send({
"content": "Lista de comandos - FadeMC",
  "embed": {
    "description": "**Prefix = ``!``**",
    "url": "https://i.imgur.com/Stenp0u.png",
    "color": 7419530,
    "timestamp": new Date(),
    "footer": {
      "icon_url": "https://cdn.discordapp.com/attachments/521157541905039360/521167240247246848/Discord.png",
      "text": "Equipe de desenvolvimento do discord"
    },
    "author": {
      "name": "Lista de comandos - FadeMC",
      "url": "https://i.imgur.com/Stenp0u.png",
      "icon_url": "https://i.imgur.com/Stenp0u.png"
    },
    "fields": [
      {
        "name": "Anúncios",
        "value": "Formato: *!anunciar @everyone <mensagem>*\nChannel: *<#518869387399266327>* \nFunção: *Use para enviar um anúncio.*\n "
      },
      {
        "name": "Clear",
        "value": "Formato: *!clear <quantidade>*\nChannel: *<#523838496691978240>*  \nFunção: *Use para apagar algumas mensagens.*\n "
      },
      {
        "name": "Banimento",
        "value": "Formato: *!ban <@username> <motivo>*\nChannel: *<#523838496691978240>*  \nFunção: *Use para banir um membro do servidor.*\n "
      },
      {
        "name": "Expulsão",
        "value": "Formato: *!kick <@username> <motivo>*\nChannel: *<#523838496691978240>*  \nFunção: *Use para expulsar um membro do servidor.*\n "
      },
      {
        "name": "Perguntar",
        "value": "Formato: *!perguntar <pergunta>*\nChannel: *<#523838496691978240>*  \nFunção: *Use para se divertir perguntando algo ao bot.*\n "
      },
      {
        "name": "Avatar",
        "value": "Formato: *!avatar <@username>*\nChannel: *<#523838496691978240>*  \nFunção: *Use para ver o avatar de alguém.*\n "
      },
      {
        "name": "Dog",
        "value": "Formato: *!dog*\nChannel: *<#523838496691978240>*  \nFunção: *Use para se divertir com um cachorro.*\n "
      },
      {
        "name": "RemoveGroup",
        "value": "Formato: *!removegroup <@username> <role>*\nChannel: *<#523838496691978240>*  \nFunção: *Use para remover o cargo de alguém.*\n "
      },
      {
        "name": "SetGroup",
        "value": "Formato: *!setgroup <@username>* <cargo>\nChannel: *<#523838496691978240>*  \nFunção: *Use para setar um cargo em alguém.*\n "
      },
      {
        "name": "ServerInfo",
        "value": "Formato: *!fade*\nChannel: *<#523838496691978240>*  \nFunção: *Use para ver algumas informações do servidor.*\n "
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
      "icon_url": "https://cdn.discordapp.com/attachments/521157541905039360/521165311618187266/kisspng-discord-logo-computer-icons-reddit-zongzi-14-0-1-5ae3de249d00b2.2332496115248829806431.jpg",
      "text": "Equipe de desenvolvimento do discord"
    }
}

  })
})
}

module.exports.help = {
    name: "help"
}