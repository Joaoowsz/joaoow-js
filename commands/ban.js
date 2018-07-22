const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("Usuário não encontrado!");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Você não possui permissão!");
    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Este usuário não pode ser banido!");

    let banEmbed = new Discord.RichEmbed()
    .setDescription("**Punição - Banimento**")
    .setColor("#f95336")
    .addField("Usuário punido:", `${bUser} - **ID:** ${bUser.id}`)
    .addField("Punido por:", `<@${message.author.id}> - **ID:** ${message.author.id}`)
    .addField("Canal da punição:", message.channel)
    .addField("Motivo da punição:", bReason);

    let punicoeschannel = message.guild.channels.find(`name`, "⛔punicoes");
    if(!punicoeschannel) return message.channel.send("Canal de punições não encontrado.");

    message.guild.member(bUser).ban(bReason);
    punicoeschannel.send(banEmbed);
}

module.exports.help = {
  name:"ban"
}