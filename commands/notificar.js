const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var role = member.guild.roles.find(`name`, '🔔 Notificar');
    var member = message.guilds.member;

    member.addRole(role)
    message.channel.send("Agora você possui a tag ``🔔 Notificar``, caso queira retirar, use ``!notificar`` novamente!");

    if(!member.roles.has(role)) return

    member.removeRole(role)
    message.channel.send("Sua tag ``🔔 Notificar`` foi retirada!");
}


    module.exports.help = {
        name:"notificar"
      }