const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Use: +report <@username> <reason>.");
    let rreason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("**Reports - Intel Corporation**")
    .setColor("#36d2f9")
    .addField("reported user:", `${rUser} - **ID:** ${rUser.id}`)
    .addField("reported by:", `${message.author} - **ID:** ${message.author.id}`)
    .addField("Reason for report:", rreason);

    let reportschannel = message.guild.channels.find(`name`, "❗reports");
    if(!reportschannel) return message.channel.send("Report channel not found.");


    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);

}
 
module.exports.help = {
  name: "report"
}