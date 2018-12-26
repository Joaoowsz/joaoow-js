const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let member = message.author;
    let role = member.guild.roles.find(`name`, 'Registrando')
    let cargo = member.guild.roles.find(`name`, 'Membro')
    if(member.roles.has(role)) return message.channel.send(" ")
    member.removeRole(role)
    member.add(cargo) && message.channel.send("Cargo atribuído com sucesso!")

}

module.exports.help = {
    name: "registrar"
}