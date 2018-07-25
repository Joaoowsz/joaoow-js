const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Usuário não encontrado.");
    let rreason = args.join(" ").slice(22);
    let reportschannel = message.guild.channels.find(`name`, "❗denuncias");
    if(!reportschannel) return message.channel.send("Canal de denúncias não encontrado.");


    message.delete().catch(O_o=>{});
    reportschannel.send(message.channel.send({
      "embed": {
        "description": `**Usuário Reportado:** ${rUser}\n**Reportado Por:** ${message.author}\n**Motivo da Denúncia:** ${rreason}`,
        "url": message.author.displayAvatarURL,
        "color": 5500275,
        "timestamp": new Date(),
        "footer": {
          "icon_url": message.author.displayAvatarURL,
          "text": "Enviado por: " + message.author.username
        },
        "author": {
          "name": "Nodus - Denúncias",
          "url": "https://discordapp.com",
          "icon_url": "https://cdn.discordapp.com/attachments/470513964300632074/471702548932329482/ulqHkNL.jpg"
        },
      }
    }));

}
 
module.exports.help = {
  name: "report"
}