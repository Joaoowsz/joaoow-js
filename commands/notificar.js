const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var role = member.guild.roles.find(`name`, '🔔 Notificar');

if(member.roles.has(role)) return message.channel.send("``❗`` Você já tem o cargo ``🔔 Notificar``.");
await(member.addRole(role)); 

message.channel.send("Você recebeu a tag ``🔔 Notificar``");
}


    module.exports.help = {
        name:"notificar"
      }