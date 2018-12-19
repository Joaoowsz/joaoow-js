const Discord = require('discord.js');
const moment = require('moment');

const cooldown = new Set();
module.exports.run = async (bot, message) => {
    let args = message.content.split(' ').slice(1).join(' ');
    message.delete();
    if (cooldown.has(message.author.id && message.guild.id)) {
        return message.channel.send('❌ | Você precisa esperar 5 minutos para abrir um novo ticket.');
    }
    if (args.length < 1) {
        return message.reply(`You must give me something to report first ${message.author}`);
    }

    cooldown.add(message.author.id && message.guild.id);
    setTimeout(() => {
        cooldown.delete(message.author.id && message.guild.id);
    }, 300000);
    let guild = message.guild;
    const cnl = bot.channels.get('524820515148398602');
    message.channel.send(`:heavy_check_mark: | Seu ticket foi enviado, em breve iremos será respondido.`);
    const embed2 = new Discord.RichEmbed()
  .setAuthor(`Informações sobre o seu ticket:`, message.author.displayAvatarURL)
  .addField('Ticket:', `**Autor:** ${message.author.tag}\n**Dúuvida:** ${args}\n**Status:** Aberto`)
  .setThumbnail(message.author.displayAvatarURL)
  .setFooter(`${moment().format('MMMM Do YYYY, h:mm:ss a')}`)
  .setColor("#8bf970");
    message.author.send({embed: embed2});
    const embed = new Discord.RichEmbed()
  .setAuthor(`Ticket de ${message.author.tag}`, message.author.displayAvatarURL)
  .addField('Ticket:',`**Autor:** ${message.author.tag}\n**ID:** ${message.author.id} \n**Dúvida:** ${args} \n\n**Para responder use: !responder <@username> <mensagem>**`)
  .setThumbnail(message.author.displayAvatarURL)
  .setColor("#ffd700");
    cnl.send(embed)
  .catch(e => logger.error(e))
};

module.exports.help = {
    name: 'ticket'
};