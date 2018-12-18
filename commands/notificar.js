const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let role = message.guild.roles.find(`name`, '🔔 Notificar');
    let member = message.author;
    if(!role) return message.channel.send('Você não será mais notificado dos eventos.')
    if(!member.roles.has(role)) return member.removeRole(role) && message.channel.send("Agora você será notificado de todos os eventos.");
       
}
    module.exports.help = {
        name: "notificar"
    }