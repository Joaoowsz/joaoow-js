const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {
    if(message.channel.id != "528256316922134528") return message.channel.send("Desculpe, meus comandos só funcionam no <#528256316922134528>!");
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
