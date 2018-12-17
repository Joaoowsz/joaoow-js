const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var role = member.guild.roles.find(`name`, '🔔 Notificar');
    member.addRole(role);
    message.channel.send("Você recebeu a tag ``🔔 Notificar``")
}


    module.exports.help = {
        name: "notificar"
      }