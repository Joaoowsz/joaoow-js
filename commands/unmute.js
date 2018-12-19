const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("❌ | Você não possui permissão para executar esse comando.");
    let mUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!mUser) return message.channel.send("❗ | Use: !unmute <@username>");
    let role = message.guild.roles.find(`name`, 'Mutado');
    if(mUser.roles.has(role)) return ("❌ | Esse usuário não está mutado.")
    if(!mUser.roles.has(role)) return mUser.removeRole(role) && message.channel.send(`✔ | O usuário ${mUser} foi desmutado por ${message.author.username}.`);


};
    module.exports.help = {
        name: "unmute"
    }