const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("**Informações do Bot**")
    .setColor("#f98d36")
    .setThumbnail(bicon)
    .addField("Nome do Bot:", bot.user.username)
    .addField("Data de Criação:", bot.user.createdAt)
    .addField("Comandos:", "Use /comandos");

    message.channel.send(botembed);
}

module.exports.help = {
  name:"botinfo"
}