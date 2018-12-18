const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {
    if(message.channel.id != "523838496691978240" && message.channel.id != "523586087696990208") return message.channel.send(" ");
        let member = message.mentions.users.size > 0 ? message.mentions.users.first() : message.author;
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
                "url": ""
            },
            "image": {
                "url": member.displayAvatarURL
            },
            "author": {
                "name": "📸 Avatar de " + member.username,
                "url": "",
                "icon_url": ""
            }
            }})
        }
    

    module.exports.help = {
      name:"avatar"
    }
