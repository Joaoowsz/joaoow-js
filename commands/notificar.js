const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let role = message.guild.roles.find(`name`,'@🔔 Notificar');
    let member = message.guild.member;
    if(!member.addRole(role)) return member.removeRole(role) + "Agora você não tem a tag ``🔔 Notificar``."
    await(member.addRole(role));
    message.channel.send("Agora você tem a tag ``🔔 Notificar``!\nCaso queira retirar, basta utilizar ``!notificar`` novamente.");

    module.exports.help = {
        name:"notificar"
      }
    }