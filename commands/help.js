const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(message.channel.id != "528256316922134528") return message.channel.send("Desculpe, meus comandos só funcionam no <#528256316922134528>!");
  message.channel.send({
    "embed": {
      "description": "Enviei a lista de comandos no seu privado, " + message.author.username + ".",
      "url": "https://cdn.discordapp.com/attachments/521150947519496208/528806154680139787/logo_suck.jpg",
      "color": 7990292,
      "timestamp": new Date(),
      "footer": {
        "icon_url": "https://cdn.discordapp.com/attachments/521150947519496208/528806154680139787/logo_suck.jpg",
        "text": null
      }
  }
  }); 

message.author.send({
"content": "Lista de comandos",
  "embed": {
    "description": "**Prefix = ``!``**",
    "url": "https://cdn.discordapp.com/attachments/521150947519496208/528806154680139787/logo_suck.jpg",
    "color": 7419530,
    "timestamp": new Date(),
    "footer": {
      "icon_url": "https://cdn.discordapp.com/attachments/521157541905039360/521167240247246848/Discord.png",
      "text": "Desenvolvido por Joaoowsz#0001"
    },
    "author": {
      "name": "Veja aqui a lista de todos os meus comandos!",
      "url": "https://cdn.discordapp.com/attachments/521150947519496208/528806154680139787/logo_suck.jpg",
      "icon_url": "https://cdn.discordapp.com/attachments/521150947519496208/528806154680139787/logo_suck.jpg"
    },
    "fields": [
      {
        "name": "Anúncios",
        "value": "Formato: *!anunciar*\nCanal: *<#528256316922134528>* \nFunção: *Use para enviar um anúncio.*\n "
      },
      {
        "name": "Clear",
        "value": "Formato: *!clear <quantidade>*\nCanal: *<#528256316922134528>*  \nFunção: *Use para apagar algumas mensagens.*\n "
      },
      {
        "name": "Banimento",
        "value": "Formato: *!ban <@username> <motivo>*\nCanal: *<#528256316922134528>*  \nFunção: *Use para banir um membro do servidor.*\n "
      },
      {
        "name": "Expulsão",
        "value": "Formato: *!kick <@username> <motivo>*\nCanal: *<#528256316922134528>*  \nFunção: *Use para expulsar um membro do servidor.*\n "
      },
      {
        "name": "Perguntar",
        "value": "Formato: *!perguntar <pergunta>*\nCanal: *<#528256316922134528>*  \nFunção: *Use para se divertir perguntando algo ao bot.*\n "
      },
      {
        "name": "Avatar",
        "value": "Formato: *!avatar <@username>*\nCanal: *<#528256316922134528>*  \nFunção: *Use para ver o avatar de alguém.*\n "
      },
      {
        "name": "Dog",
        "value": "Formato: *!dog*\nCanal: *<#528256316922134528>*  \nFunção: *Use para se divertir com um cachorro.*\n "
      },
      {
        "name": "RemoveGroup",
        "value": "Formato: *!removegroup <@username> <cargo>*\nCanal: *<#528256316922134528>*  \nFunção: *Use para remover o cargo de alguém.*\n "
      },
      {
        "name": "SetGroup",
        "value": "Formato: *!setgroup <@username>* <cargo>\nCanal: *<#528256316922134528>*  \nFunção: *Use para setar um cargo em alguém.*\n "
      },
      {
        "name": "Suuck",
        "value": "Formato: *!suuck* <cargo>\nCanal: *<#528256316922134528>*  \nFunção: *Use para ver algumas informações sobre mim.*\n "
      }
        ]
  }
}).catch(err => {
  message.channel.send({
    
  "embed": {
    "description": message.author.username + ", não foi possível enviar a lista de comandos no seu privado pois a sua DM está fechada.",
    "url": "https://cdn.discordapp.com/attachments/521150947519496208/528806154680139787/logo_suck.jpg",
    "color": 7990292,
    "timestamp": new Date(),
    "footer": {
      "icon_url": "https://cdn.discordapp.com/attachments/521157541905039360/521165311618187266/kisspng-discord-logo-computer-icons-reddit-zongzi-14-0-1-5ae3de249d00b2.2332496115248829806431.jpg",
      "text": null,
    }
}

  })
})
}

module.exports.help = {
    name: "help"
}