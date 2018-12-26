const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

   
    if(message.channel.id != "525708464740106261" && message.channel.id != "523586087696990208") return message.channel.send(" ");
    let role = message.guild.roles.find(`name`, 'Registrando');
    let cargo = message.guild.roles.find(`name`, 'Membro');
    let member = message.member;
    message.delete().catch();
    member.removeRole(role) && member.addRole(cargo)
}

module.exports.help = {
    name: "registrar"
}