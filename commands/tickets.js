const Discord = require('discord.js');
const moment = require('moment');

const cooldown = new Set();
module.exports.run = async (bot, msg) => {
    let args = msg.content.split(' ').slice(1).join(' ');
    msg.delete();
    if (cooldown.has(msg.author.id && msg.guild.id)) {
        return msg.reply('Você precisa esperar 5 minutos para abrir um novo ticket!');
    }
    if (args.length < 1) {
        return msg.reply(`Argumento inválido.\nUtilize !ticket <mensagem> ${msg.author}`);
    }

    cooldown.add(msg.author.id && msg.guild.id);
    setTimeout(() => {
        cooldown.delete(msg.author.id && msg.guild.id);
    }, 300000);
    let guild = msg.guild;
    const cnl = bot.channels.get('421569960029192202');
    msg.reply(`${msg.author}, seu ticket foi enviado para nossa equipe, assim que possível enviaremos a resposta!`);
    const embed2 = new Discord.RichEmbed()
  .setAuthor(`Criador: ${msg.author.tag}`, msg.author.displayAvatarURL)
  .addField('Ticket:', `**Tickets's Author:** ${msg.author.tag}\n**Server:** ${guild.name}\n**Dúvida:** ${args}`)
  .setThumbnail(msg.author.displayAvatarURL)
  .setFooter(`${moment().format('MMMM Do YYYY, h:mm:ss a')}`)
  .setColor(16711728);
    msg.channel.send({embed: embed2});
    const embed = new Discord.RichEmbed()
  .setAuthor(`Ticket from ${msg.author.tag}`, msg.author.displayAvatarURL)
  .addField('Ticket:', `**Report's Author:** ${msg.author.tag}\n**Server:** ${guild.name}\n**Full report:** ${args}`)
  .setThumbnail(msg.author.displayAvatarURL)
  .setColor("#ffd700");
    cnl.send({embed})
  .catch(e => logger.error(e))
};

module.exports.help = {
    name: 'Ticket'
};