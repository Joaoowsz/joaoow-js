const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {

let membro = message.guild.roles.find(`name`, 'Membro')
let registrando = message.guild.roles.find(`name`, 'Registrando')

let embed = ({
    "embed": {
        "description": "Para se registrar basta clicar na reação abaixo.",
        "url": "https://discordapp.com",
        "color": 7313212,
        "timestamp": null,
        "footer": {
          "icon_url": "https://i.imgur.com/Stenp0u.png",
          "text": "Equipe de desenvolvimento do discord"
        },
        "thumbnail": {
          "url": "https://i.imgur.com/Stenp0u.png"
        },
        "author": {
          "name": "Captcha - FadeMC",
          "url": "https://discordapp.com",
          "icon_url": "https://i.imgur.com/Stenp0u.png"
          }
        
      }
})

let msg1 = message.channel.send(embed);
   msg1.react('✅');

    message.react('✅')
    bot.on('messageReactionAdd', (reaction, user) => {
        if(reaction.emoji.name === "✅" && user.id !== bot.user.id) {
             reaction.remove(user)
             user.removeRole(registrando)
              user.addRole(membro)
        }
      })
}
module.exports.help = {
  name:"captcha"
}
