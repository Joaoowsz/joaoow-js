const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  

let embed = ({
  "embed": {
    "description": args[0] + "promovido para" + args[1],
    "url": "https://discordapp.com",
    "color": 1698620,
    "timestamp": new Date(),
    "footer": {
      "icon_url": "https://cdn.discordapp.com/attachments/521150947519496208/536773272285610020/jerrmuCB_400x400.jpg",
      "text": null
    },
    "author": {
      "name": "🎉 Parabéns!",
      "url": "https://discordapp.com",
      "icon_url": null
    }
  }
})

message.channel.send(embed)
    
}

module.exports.help = {
  name:"promover"
}