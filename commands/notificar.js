const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let role = message.guild.roles.find(`name`, '🔔 Notificar');
    let member = message.member;
    if(!member.has.roles(role)) return member.removeRole(role)
    message.reply(" agora você será notificado de todos os eventos.");
    member.addRole(role)
    message.reply(" agora você não irá mais receber notificações dos eventos.");

}
    module.exports.help = {
        name: "notificar"
    }