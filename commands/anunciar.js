const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("❌ Você não possui permissão para executar esse comando.");
    let botmessage = args.join(" ");
    message.delete().catch();
    message.channel.send({
      "content": "@everyone",
  "embed": {
    "url": null,
    "color": 1752220,
    "timestamp": new Date(),
    "footer": {
      "icon_url": message.author.displayAvatarURL,
      "text": "Atenciosamente, " + message.author.username
    },
    "thumbnail": {
      "url": "https://images-ext-1.discordapp.net/external/0vwGKF6HeV7-sSeRwOQjfWzCslPkN8FS9rf-0AJMFT8/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/496949356151439360/2e435a7132130a0cdca32cd29932ed10.png?width=473&height=473"
    },
    "fields": [
      {
        "name": "📢 Atenção:",
        "value": botmessage
      }
    ]
  }
    })
  }

module.exports.help = {
    name: "anunciar"
}