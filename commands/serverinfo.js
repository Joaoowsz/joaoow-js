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
                "url": "https://i.imgur.com/Stenp0u.png"
            },
            "image": {
                "url": null
            },
            "author": {
                "name": message.guild.name,
                "url": "",
                "icon_url": "https://i.imgur.com/Stenp0u.png"
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