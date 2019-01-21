const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("❌ | Você não possui permissão para executar esse comando.");  

let embed = ({
  "embed": {
    "description": args[0] + " retirado da clan.",
    "url": "https://discordapp.com",
    "color": 1698620,
    "timestamp": new Date(),
    "footer": {
      "icon_url": "https://cdn.discordapp.com/attachments/521150947519496208/536773272285610020/jerrmuCB_400x400.jpg",
      "text": null
    },
    "author": {
      "name": "📢 Atenção:",
      "url": "https://discordapp.com",
      "icon_url": null
    }
  }
})
message.delete()
message.channel.send(embed)
    
}

module.exports.help = {
  name:"retirar"
}