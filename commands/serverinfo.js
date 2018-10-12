const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
    message.channel.send({
        "embed": {
            "title": ``,
            "description": "",
            "url": "",
            "color": 3553598,  
            "timestamp": new Date(),
            "footer": {
                "icon_url": message.author.displayAvatarURL,
                "text": message.author.username
            },
            "thumbnail": {
                "url": "https://images-ext-1.discordapp.net/external/0vwGKF6HeV7-sSeRwOQjfWzCslPkN8FS9rf-0AJMFT8/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/496949356151439360/2e435a7132130a0cdca32cd29932ed10.png?width=473&height=473"
            },
            "image": {
                "url": null
            },
            "author": {
                "name": message.guild.name,
                "url": "",
                "icon_url": "https://cdn.discordapp.com/attachments/459725360490348554/500127117464567848/Ability.png"
            },
            "fields": [
                {
                    "name": ":crown: Dono",
                    "value": message.guild.owner.displayName,
                    "inline": true
                  },
                {
                  "name": ":computer: ID",
                  "value": message.guild.id,
                  "inline": true
                },
                {
                    "name": ":raising_hand: Usuários",
                    "value": message.guild.memberCount,
                    "inline": true
                  },
              {
              "name": ":earth_americas: Região",
              "value": "Brasil :flag_br:",
              "inline": true
            }
              ]
            }})
        }

module.exports.help = {
  name:"serverinfo"
}