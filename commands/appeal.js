const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let rUser = message.guild.member(message.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Use: !report <username> <motivo>.");
    let rreason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("**Denúncias - Atlantic**")
    .setColor("#36d2f9")
    .addField("Nick:", `${rUser} - **ID:** ${rUser.id}`)
    .addField("Enviado por:", `${message.author} - **ID:** ${message.author.id}`)
    .addField("Motivo:", rreason);

    let reportschannel = message.guild.channels.find(`name`, "❗reports");
    if(!reportschannel) return message.channel.send("Canal de denúncias não encontrado.");


    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);

}
 
module.exports.help = {
  name: "appeal"
}