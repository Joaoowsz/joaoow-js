const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  message.channel.send({
    "embed": {
      "description": "I sent the list of commands in your private, " + message.author.username + ".",
      "url": "https://images-ext-1.discordapp.net/external/MZf3GbJLoJUf9uQXPdsG681FX7_TWe-6UBnJPsuKW4s/https/cdn.discordapp.com/attachments/490177937094737941/491616735279972352/latest.png",
      "color": 7990292,
      "timestamp": "2018-09-25T15:34:52.326Z",
      "footer": {
        "icon_url": "https://images-ext-1.discordapp.net/external/MZf3GbJLoJUf9uQXPdsG681FX7_TWe-6UBnJPsuKW4s/https/cdn.discordapp.com/attachments/490177937094737941/491616735279972352/latest.png",
        "text": "Intel Corporation"
      }
  }
  }); 

message.author.send({
"content": "Help - Intel Corporation",
  "embed": {
    "description": "**Prefix = ``+``**",
    "url": "https://images-ext-1.discordapp.net/external/MZf3GbJLoJUf9uQXPdsG681FX7_TWe-6UBnJPsuKW4s/https/cdn.discordapp.com/attachments/490177937094737941/491616735279972352/latest.png",
    "color": 7419530,
    "timestamp": new Date(),
    "footer": {
      "icon_url": message.author.displayAvatarURL,
      "text": "Bot developed by @Joaoowsz#1568"
    },
    "author": {
      "name": "Commands - Intel Corporation",
      "url": "https://images-ext-1.discordapp.net/external/MZf3GbJLoJUf9uQXPdsG681FX7_TWe-6UBnJPsuKW4s/https/cdn.discordapp.com/attachments/490177937094737941/491616735279972352/latest.png",
      "icon_url": "https://images-ext-1.discordapp.net/external/MZf3GbJLoJUf9uQXPdsG681FX7_TWe-6UBnJPsuKW4s/https/cdn.discordapp.com/attachments/490177937094737941/491616735279972352/latest.png"
    },
    "fields": [
      {
        "name": "announcements",
        "value": "Format: *+say <message>*\nChannel: *<#493604052429438980>* \nFunction: *Use to send an ad.*\n "
      },
      {
        "name": "Clear",
        "value": "Format: *+clear <quantidade>*\nChannel: *<#494168168969797632>*  \nFunction: *Use to clear chat.*\n "
      },
      {
        "name": "Banishment",
        "value": "Format: *+ban <@username> <motivo>*\nChannel: *<#494168168969797632>*  \nFunction: *Use to ban a discord member.*\n "
      },
      {
        "name": "Expulsion",
        "value": "Format: *+kick <@username> <motivo>*\nChannel: *<#494168168969797632>*  \nFunction: *Use to kick a discord member.*\n "
      },
      {
        "name": "Silencing",
        "value": "Format: *+tempmute <@username> <seconds>*\nChannel: *<#494168168969797632>*  \nFunction: *Use to temporarily mute a member.*\n "
      },
      {
        "name": "Bot Info",
        "value": "Format: *+botinfo*\nChannel: *<#494168168969797632>*  \nFunction: *Use to view bot information.*\n "
      },
      {
        "name": "Questions",
        "value": "Format: *+perguntar @Joaoow <pergunta>*\nChannel: *<#494168168969797632>*  \nFunction: *Use to ask the bot.*\n "
      },
      {
        "name": "Avatar",
        "value": "Format: *+avatar <@username>*\nChannel: *<#494168168969797632>*  \nFunction: *Use to view a member's avatar.*\n "
      },
      {
        "name": "Dog",
        "value": "Format: *+dog*\nChannel: *<#494168168969797632>*  \nFunction: *Use for fun with dog pictures.*\n "
      },
      {
        "name": "RemoveGroup",
        "value": "Format: *+removegroup <@username> <role>*\nChannel: *<#494168168969797632>*  \nFunction: *Use to remove a member role.*\n "
      },
      {
        "name": "SetGroup",
        "value": "Format: *+setgroup <@username>* <role>\nChannel: *<#494168168969797632>*  \nFunction: *Use to add a member role.*\n "
      },
      {
        "name": "ServerInfo",
        "value": "Format: *+serverinfo*\nChannel: *<#494168168969797632>*  \nFunction: *Use to view server information.*\n "
      }
        ]
  }
}).catch(err => {
  message.channel.send({
    
  "embed": {
    "description": "Could not send list of commands on your private, because your DM is private.",
    "url": "https://images-ext-1.discordapp.net/external/MZf3GbJLoJUf9uQXPdsG681FX7_TWe-6UBnJPsuKW4s/https/cdn.discordapp.com/attachments/490177937094737941/491616735279972352/latest.png",
    "color": 7990292,
    "timestamp": "2018-09-25T15:34:52.326Z",
    "footer": {
      "icon_url": "https://images-ext-1.discordapp.net/external/MZf3GbJLoJUf9uQXPdsG681FX7_TWe-6UBnJPsuKW4s/https/cdn.discordapp.com/attachments/490177937094737941/491616735279972352/latest.png",
      "text": "Intel Corporation"
    }
}

  })
})
}

module.exports.help = {
    name: "help"
}