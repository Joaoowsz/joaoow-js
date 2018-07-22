const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Usuário não encontrado!");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Você não possui permissão!");
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Este usuário não pode ser kickado!");

    let kickEmbed = new Discord.RichEmbed()
    .setDescription("**Punição - Expulsão**")
    .setColor("#e56b00")
    .addField("Usuário punido:", `${kUser} - **ID:** ${kUser.id}`)
    .addField("Punido por:", `<@${message.author.id}> - **ID:** ${message.author.id}`)
    .addField("Canal da punição:", message.channel)
    .addField("Motivo da punição:", kReason);

    let punicoesChannel = message.guild.channels.find(`name`, "⛔punicoes");
    if(!punicoesChannel) return message.channel.send("Canal de punições não encontrado.");

    message.guild.member(kUser).kick(kReason);
    punicoesChannel.send(kickEmbed);
}

module.exports.help = {
  name:"kick"
}