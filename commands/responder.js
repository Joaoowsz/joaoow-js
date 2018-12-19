const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let member = message.member;
    let tUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!tUser) return message.channel.send("❗ | Utilize: ``!responder <@username> <resposta>``");
    let tResposta = args.slice(2).join(" ");
    if(!tResposta) return message.channel.send(`O usuário ${tUser} foi respondido com sucesso.`);
    
    const embed = new Discord.RichEmbed()
  .setAuthor(`Seu ticket foi respondido!`, message.author.displayAvatarURL)
  .addField('Ticket:', `**Autor:** ${tUser.username}\n**Dúvida:** ${args}\n**Resposta: ${tResposta}\n**Staffer: ${message.author.username}\n**Status:** Fechado`)
  .setThumbnail("https://i.imgur.com/Stenp0u.png")
  .setColor("#ffd700");

    tUser.send(embed);
    message.channel.send(`O usuário ${tUser} foi respondido com sucesso.`);


}
    module.exports.help = {
        name: 'responder'
    };