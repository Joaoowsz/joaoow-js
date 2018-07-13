const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let msg = message.content.toLowerCase();
    let rMention = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!rMention) return message.reply("digite alguma mensagem.");

    if (message.author.bot) return;
    mention = message.mentions.users.first();

    if (mention == null) { return; }
    message.delete();
    mentionMessage = message.content.slice(5);
    mention.sendMessage(mentionMessage);
    message.reply("Mensagem enviada!")
}

module.exports.help = {
    name: "send"
}