const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

if(message.member.roles.find("name", ":bell: Notificar")){

    message.member.removeRole(message.guild.roles.find("name", ":bell: Notificar"));
    message.reply("agora você não irá mais receber notificações de eventos.");

  } else {
    message.member.addRole(message.guild.roles.find("name", ":bell: Notificar"));
    message.reply("agora você irá receber todas notificações dos eventos.");

  }
}
  module.exports.help = {
    name: "addgroup"
  }