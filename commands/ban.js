const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("❌ Você não possui permissão para executar esse comando.");  
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("``❗`` Use: !ban <@username> <motivo>");
    let bReason = args.join(" ").slice(22);
    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("❌ Esse usuário não pode ser punido.");

    let banEmbed = new Discord.RichEmbed()
    .setDescription("**Fade Punições - Discord**")
    .setColor("#f95336")
    .addField("Punição:", `Banimento`)
    .addField("Usuário punido:", `${bUser}`)
    .addField("Staffer:", `<@${message.author.id}>`)
    .addField("Motivo:", bReason);
    
    let punicoeschannel = message.guild.channels.find(`name`, "🚷punições-discord");
    if(!punicoeschannel) return message.channel.send("❌ Canal de punições não encontrado.");

    message.guild.member(bUser).ban(bReason);
    punicoeschannel.send(banEmbed);
    message.channel.send("✔ | Usuário punido com sucesso.")
}

module.exports.help = {
  name:"ban"
}