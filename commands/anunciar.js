const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("**[US]** You do not have permission.\n**[PT]** Você não possui permissão.");
    let botmessage = args.join(" ");
    message.delete().catch();
    message.channel.send({
        "embed": {
            "color": 1752220,
            "timestamp": new Date(),
            "footer": {
              "icon_url": message.author.displayAvatarURL,
              "text": "Atenciosamente, " + message.author.username
            },
            "fields": [
              {
                "name": "📢 Important:",
                "value": botmessage
              }
            ]
          }
    })

}

module.exports.help = {
    name: "anunciar"
}