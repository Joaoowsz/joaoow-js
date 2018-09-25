const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Use: +kick <@username> <reason>");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You do not have permission!");
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("This user can not be banned!");

    let kickEmbed = new Discord.RichEmbed()
    .setDescription("**Punishments - Intel Corporation**")
    .setColor("#e56b00")
    .addField("Punishment: Expulsion")
    .addField("Punished user:", `${kUser} - **ID:** ${kUser.id}`)
    .addField("Punished for:", `<@${message.author.id}> - **ID:** ${message.author.id}`)
    .addField("Reason for punishment:", kReason);

    let punicoesChannel = message.guild.channels.find(`name`, "⛔punicoes");
    if(!punicoesChannel) return message.channel.send("Channel of punishments not found.");

    message.guild.member(kUser).kick(kReason);
    punicoesChannel.send(kickEmbed);
}

module.exports.help = {
  name:"kick"
}