const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("User not found.");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You do not have permission.");
    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("This user can not be banned.");

    let banEmbed = new Discord.RichEmbed()
    .setDescription("**Punishments - Intel Corporation**")
    .setColor("#f95336")
    .addField("Punishment:", `Banishment`)
    .addField("Punished user:", `${bUser} - **ID:** ${bUser.id}`)
    .addField("Punished for:", `<@${message.author.id}> - **ID:** ${message.author.id}`)
    .addField("Reason for punishment:", bReason);

    let punicoeschannel = message.guild.channels.find(`name`, "⛔punicoes");
    if(!punicoeschannel) return message.channel.send("Channel of punishments not found.");

    message.guild.member(bUser).ban(bReason);
    punicoeschannel.send(banEmbed);
}

module.exports.help = {
  name:"ban"
}