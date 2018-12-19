const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let member = message.member;
    let tUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!tUser) return message.channel.send("❗ | Utilize: ``!responder <resposta>``");
    let tResposta = args.slice(1).join(" ");
    if(!tResposta) return message.channel.send(`O usuário ${tUser} foi respondido com sucesso.`);
    
    const embed = new Discord.RichEmbed()
  .setAuthor(`Seu ticket foi respondido!`, message.author.displayAvatarURL)
  .addField('Ticket:', `**Autor:** ${message.tUser.tag}\n**Dúvida:** ${args}\n**Resposta: ${tResposta}\n**Staffer: ${message.author.usernampe}\n**Status:** Fechado`)
  .setThumbnail(message.tUser.displayAvatarURL)
  .setColor("#ffd700");

    tUser.send(embed);


}
    module.exports.help = {
        name: 'responder'
    };