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



let msg1 = message.channel.send(embed).then(msg1=> msg1.react('✅'))
  bot.on('messageReactionAdd', (reaction, user) => {
      if(reaction.emoji.name === "✅" && user.id !== bot.user.id) {
           reaction.remove(user)
            bot.guilds.get("518863317327020042").members.get(user.id).removeRole('525707936459390976')
            bot.guilds.get("518863317327020042").members.get(user.id).addRole('518868737617559552')
        }
    })
      
}
module.exports.help = {
  name:"captcha"
}
