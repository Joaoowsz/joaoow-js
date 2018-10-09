const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[4]));
    if(!rUser) return message.channel.send("Use: !appeal <seu nick> <nick do staffer que lhe baniu> <print do banimento>.\nEx: ``!appeal Joaoowsz MisteriumZ https://printdobanimento``");
    let rreason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("**Appeal - Atlantic**")
    .setColor("#36d2f9")
    .addField("Nick:", message.member.get(args[1]))
    .addField("Staffer:", message.member.get(args[2]))
    .addField("Print do banimento:", message.member.get(args[3])) 

    let reportschannel = message.guild.channels.find(`name`, "❗appeal");
    if(!reportschannel) return message.channel.send("Report channel not found.");


    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);

}
 
module.exports.help = {
  name: "appeal"
}