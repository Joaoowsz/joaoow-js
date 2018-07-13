const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let msg = message.content.toLowerCase();

    if (message.author.bot) return;
    mention = message.mentions.users.first();

    if (mention == null) { return; }
    message.delete();
    mentionMessage = message.content.slice(8);
    mention.sendMessage(mentionMessage);
    message.channel.send("Mensagem enviada!")
}

module.exports.help = {
    name: "comandos"
}