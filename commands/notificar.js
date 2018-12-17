const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let role = guild.roles.find(`name`,'@🔔 Notificar ');
    let fMember = message.author;
    if(!member.hasRole(role)) return fMmember.removeRole(role) + "Retirei sua tag ``🔔 Notificar``!\nCaso queira novamente basta utilizar ``!notificar``.";

    fMember.addRole(role)
    message.channel.send("Agora você tem a tag ``🔔 Notificar``\nCaso queira remover, basta utilizar ``!notificar`` novamente!")



    module.exports.help = {
        name:"notificar"
      }
    }