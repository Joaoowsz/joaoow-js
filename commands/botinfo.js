const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("**Bot Info**")
    .setColor("#f98d36")
    .setThumbnail(bicon)
    .addField("Bot name:", bot.user.username)
    .addField("Criation date:", bot.user.createdAt)
    .addField("Commands:", "Use !help")
    .addField("Bot Developer:", "https://twitter.com/Joaoowsz");

    message.channel.send(botembed);
}

module.exports.help = {
  name:"botinfo"
}