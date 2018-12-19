const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("❌ | Você não possui permissão para executar esse comando.");
    let tUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!tUser) return message.channel.send("❗ | Utilize: ``!responder <@username> <resposta>``");
    let tMessage = args.slice(1).join(" ");
    message.delete().catch();
    message.channel.send("✔ | O Ticket de " + tUser.user.username + " foi respondido com sucesso! ")
    tUser.send({
  "embed": {
    "description": "**Autor:** " + tUser.user.username + "\n**Resposta:** " + tMessage + "\n**Staffer:** " + message.author.username + "\n**Status:** Fechado",
    "url": null,
    "color": 1752220,
    "timestamp": new Date(),
    "footer": {
      "icon_url": message.author.displayAvatarURL,
      "text": "Atenciosamente, " + message.author.username
    },
    "thumbnail": {
      "url": tUser.displayAvatarURL
    }, 
    "author": {
      "name": "Seu ticket foi respondido!",
      "url": null,
      "icon_url": "https://i.imgur.com/Stenp0u.png"
    }
  }
    })

}
    module.exports.help = {
        name: 'responder'
    };