const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let role = message.guild.roles.find(`name`, '🔔 Notificar');
    let member = message.member;
    if(!member.roles.has(role)) return member.removeRole(role) + message.channel.send("Agora você não irá mais receber notificações de eventos.");
    if(!member.addRole(role)) + message.channel.send("Agora você irá receber notificações de eventos.");
       
}
    module.exports.help = {
        name: "notificar"
    }