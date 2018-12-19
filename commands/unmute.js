const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let mUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let role = message.guild.roles.find(`name`, 'Mutado');
    if(!mUser.roles.has(role)) return mUser.removeRole(role) && message.channel.send(`✔ | O usuário ${mUser} foi desmutado por ${message.author.username}.`);


       
};
    module.exports.help = {
        name: "unmute"
    }