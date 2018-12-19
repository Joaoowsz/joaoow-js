const Discord = require('discord.js');
const moment = require('moment');

const cooldown = new Set();
module.exports.run = async (bot, message) => {
    let args = message.content.split(' ').slice(1).join(' ');
    message.delete();
    if (cooldown.has(message.author.id && message.guild.id)) {
        return message.channel.send('❌ | Você precisa esperar 5 minutos para enviar um novo ticket!');
    }
    if (args.length < 1) {
        return message.channel.send(`❗ | Utilize: ``!ticket <dúvida>```);
    }

    cooldown.add(message.author.id && message.guild.id);
    setTimeout(() => {
        cooldown.delete(message.author.id && message.guild.id);
    }, 300000);
    let guild = message.guild;
    const cnl = message.channel.channels.find(`name`, 'tickets');
    message.reply(`✔ | Seu ticket foi enviado, em breve iremos será respondido.`);
    const embed2 = new Discord.RichEmbed()
  .setAuthor(`Ticket de ${message.author.tag}`, message.author.displayAvatarURL)
  .addField('Ticket:', `**Autor:** ${message.author.tag}\n**Dúvida:** ${args}`)
  .setThumbnail(message.author.displayAvatarURL)
  .setFooter(`${moment().format('MMMM Do YYYY, h:mm:ss a')}`)
  .setColor(16711728);
    message.channel.send({embed: embed2});
    const embed = new Discord.RichEmbed()
  .setAuthor(`Ticket de ${message.author.tag}`, message.author.displayAvatarURL)
  .addField('Ticket:', `**Autor:** ${message.author.tag}\n**Dúvida:** ${args}`)
  .setThumbnail(message.author.displayAvatarURL)
  .setColor("#ffd700");
    cnl.send({embed})
  .catch(e => logger.error(e))
};

module.exports.help = {
    name: 'ticket'
};