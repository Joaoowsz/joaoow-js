const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Usuário não encontrado.");
    let rreason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("**Denúncias**")
    .setColor("#36d2f9")
    .addField("Usuário Reportado:", `${rUser} - **ID:** ${rUser.id}`)
    .addField("Reportado Por:", `${message.author} - **ID:** ${message.author.id}`)
    .addField("Canal da Denúncia:", message.channel)
    .addField("Motivo da Denúncia:", rreason);

    message.channel.send({
      "embed": {
        "description": `**Usuário Reportado:** ${rUser}\n**Reportado Por:** ${message.author}\n**Motivo da Denúncia:** ${rreason}`,
      }
    })

    let reportschannel = message.guild.channels.find(`name`, "❗denuncias");
    if(!reportschannel) return message.channel.send("Canal de denúncias não encontrado.");


    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);

}
 
module.exports.help = {
  name: "report"
}