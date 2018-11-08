const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("❌ Você não possui permissão para executar esse comando.");
    let botmessage = args.join(" ");
    message.delete().catch();
    message.channel.send({
  "embed": {
    "url": null,
    "color": 1752220,
    "timestamp": new Date(),
    "footer": {
      "icon_url": message.author.displayAvatarURL,
      "text": "Atenciosamente, " + message.author.username
    },
    "thumbnail": {
      "url": "https://cdn.discordapp.com/attachments/506884169960390657/509887928835506176/Logo_-_PNG.png"
    },
    "fields": [
      {
        "name": "📢 Atenção:",
        "value": botmessage
      }
    ]
  }
    })
    message.channel.send("@everyone")
  }

module.exports.help = {
    name: "anunciar"
}