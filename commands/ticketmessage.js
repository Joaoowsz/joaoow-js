const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let ticket = message.guild.channel.find(`name`, '🎐ticket');
    let embed = {
        "embed": {
            "description": "**\nComo funciona?**\nBasta digitar !ticket <sua dúvida> no <#523838496691978240>.",
            "color": 3131281,
            "timestamp": null,
            "footer": {
              "icon_url": null,
              "text": null
            },
            "thumbnail": {
              "url": "https://cdn.discordapp.com/attachments/377876908622217226/525009063595999262/129.png"
            },
            "author": {
              "name": "Sistema de tickets - FadeMC",
              "url": "https://discordapp.com",
              "icon_url": "https://i.imgur.com/Stenp0u.png"
            }      
              
            
          }
    }
}
module.exports.help = {
    name: "unmute"
}