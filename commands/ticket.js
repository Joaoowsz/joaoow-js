const Discord = require('discord.js');
const moment = require('moment');

const cooldown = new Set();
module.exports.run = async (bot, message) => {
    if(message.channel.id != "523838496691978240" && message.channel.id != "523586087696990208") return message.channel.send(" ");
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
    const cnl = bot.channels.get('524805327166636048');
    message.channel.send(`✔ | Seu ticket foi enviado, em breve será respondido.`);
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