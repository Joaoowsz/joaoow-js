const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var role = member.guild.roles.find(`name`, '🔔 Notificar');

    member.addRole(role);
    member.send("Agora você possui a tag ``🔔 Notificar``, caso queira retirar, use ``!notificar`` novamente!");
}

    module.exports.help = {
        name:"notificar"
      }