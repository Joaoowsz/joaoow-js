const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var role = member.guild.roles.find(a => a.name === "🔔 Notificar")

  message.member.addRole(role)
  message.channel.send("Agora você possui o cargo ``🔔 Notificar``!")
}
    module.exports.help = {
        name:"notificar"
      }