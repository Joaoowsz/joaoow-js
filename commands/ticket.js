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
        return message.channel.send("❗ | Utilize: ``!ticket <dúvida>``");
    }

    cooldown.add(message.author.id && message.guild.id);
    setTimeout(() => {
        cooldown.delete(message.author.id && message.guild.id);
    }, 300000);
    let guild = message.guild;
    let cnl = message.guild.channels.find(`name`,"tickets");
    message.reply(`✔ | Seu ticket foi enviado, em breve iremos será respondido.`);
    const embed2 = new Discord.RichEmbed()
  .setAuthor(`Ticket de ${message.author.name}`, message.author.displayAvatarURL)
  .addField('Ticket:', `**Autor:** ${message.author.name}\n**Dúvida:** ${args}`)
  .setThumbnail("https://i.imgur.com/Stenp0u.png")
  .setFooter(`${moment().format('MMMM Do YYYY, h:mm:ss a')}`)
  .setColor(16711728);
  cnl.send({embed2})
    const embed = new Discord.RichEmbed()
  .setAuthor(`Informações sobre o seu ticket:`, message.author.displayAvatarURL)
  .addField('Ticket:', `**Autor:** ${message.author.name}\n**Dúvida:** ${args}\n**Status:** Aberto`)
  .setThumbnail("https://i.imgur.com/Stenp0u.png")
  .setColor("#ffd700");
  message.author.send({embed})
    
  .catch(e => logger.error(e))
};

module.exports.help = {
    name: 'ticket'
};