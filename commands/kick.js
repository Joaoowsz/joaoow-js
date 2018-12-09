const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("``❗`` Use: !kick <@username> <motivo>");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("❌ Você não possui permissão para executar esse comando.");
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("❌ Esse usuário não pode ser punido!");

    let kickEmbed = new Discord.RichEmbed()
    .setDescription("**Fade Punições - Discord**")
    .setColor("#e56b00")
    .addField("Punição:", `Expulsão`)
    .addField("Usuário punido:", `${kUser}`)
    .addField("Staffer:", `<@${message.author.id}>`)
    .addField("Motivo:", kReason);

    let punicoesChannel = message.guild.channels.find(`name`, "⛔punições");
    if(!punicoesChannel) return message.channel.send("❌ Canal de punições não encontrado.");

    message.guild.member(kUser).kick(kReason);
    punicoesChannel.send(kickEmbed);
}

module.exports.help = {
  name:"kick"
}