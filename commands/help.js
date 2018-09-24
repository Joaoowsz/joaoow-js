const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  message.channel.send("I sent the list of commands in your private, " + message.author.username +"!"); 

message.author.send({
"content": "Help - Intel Corporation",
  "embed": {
    "description": "**Prefix = ``!``**",
    "url": "https://cdn.discordapp.com/attachments/466385018227261440/470524156925181973/4GIlTLzP_400x400.jpg",
    "color": 7419530,
    "timestamp": new Date(),
    "footer": {
      "icon_url": message.author.displayAvatarURL,
      "text": "List of commands - Intel Corporation"
    },
    "author": {
      "name": "Comandos - Nodus Bot",
      "url": "https://cdn.discordapp.com/attachments/466385018227261440/470524156925181973/4GIlTLzP_400x400.jpg",
      "icon_url": "https://cdn.discordapp.com/attachments/466385018227261440/470524156925181973/4GIlTLzP_400x400.jpg"
    },
    "fields": [
      {
        "name": "announcements",
        "value": "Format: *!anunciar <message>*\nChannel: *<#493582154874224650>* \nFunction: *Use to send an ad.*\n "
      },
      {
        "name": "Clear",
        "value": "Format: *!clear <quantidade>*\nChannel: *<#493582154874224650>*  \nFunction: *Use to clear chat.*\n "
      },
      {
        "name": "Banishment",
        "value": "Format: *!ban <@username> <motivo>*\nChannel: *<#493582154874224650>*  \nFunction: *Use to ban a discord member.*\n "
      },
      {
        "name": "Expulsion",
        "value": "Format: *!kick <@username> <motivo>*\nChannel: *<#493582154874224650>*  \nFunction: *Use to kick a discord member.*\n "
      },
      {
        "name": "Silencing",
        "value": "Format: *!tempmute <@username> <seconds>*\nChannel: *<#493582154874224650>*  \nFunction: *Use to temporarily mute a member.*\n "
      },
      {
        "name": "Bot Info",
        "value": "Format: *!botinfo*\nChannel: *<#493582154874224650>*  \nFunction: *Use to view bot information.*\n "
      },
      {
        "name": "Questions",
        "value": "Format: *!perguntar @Joaoow <pergunta>*\nChannel: *<#493582154874224650>*  \nFunction: *Use to ask the bot.*\n "
      },
      {
        "name": "Avatar",
        "value": "Format: *!avatar <@username>*\nChannel: *<#493582154874224650>*  \nFunction: *Use to view a member's avatar.*\n "
      },
      {
        "name": "Dog",
        "value": "Format: *!dog*\nChannel: *<#493582154874224650>*  \nFunction: *Use for fun with dog pictures.*\n "
      },
      {
        "name": "RemoveGroup",
        "value": "Format: *!removegroup <@username> <role>*\nChannel: *<#493582154874224650>*  \nFunction: *Use to remove a member role.*\n "
      },
      {
        "name": "SetGroup",
        "value": "Format: *!setgroup <@username>* <role>\nChannel: *<#493582154874224650>*  \nFunction: *Use to add a member role.*\n "
      },
      {
        "name": "ServerInfo",
        "value": "Format: *!serverinfo*\nChannel: *<#493582154874224650>*  \nFunction: *Use to view server information.*\n "
      }
        ]
  }
}).catch(err => {
  message.channel.send("Could not send list of commands on your private, because your DM is private.")
})
}

module.exports.help = {
    name: "help"
}