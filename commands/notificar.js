const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(message.channel.id != "523838496691978240" && message.channel.id != "523586087696990208") return message.channel.send(" ");
    let role = message.guild.roles.find(`name`, '🔔 Notificar');
    let member = message.member;
    if(!member.addRole(role));
    if(!member.roles.has(role)) return member.removeRole(role) && message.channel.send("✔ | Seu cargo foi atualizado com sucesso!");
       
}
    module.exports.help = {
        name: "notificar"
    }