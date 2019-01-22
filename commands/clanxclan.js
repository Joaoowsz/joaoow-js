const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(message.channel.id != "530508247426269195") return message.channel.send("Desculpe, meus comandos só funcionam no <#530508247426269195>!");

    message.channel.send({
        "embed": {
            "description": "Nossos CXC são feitos normalmente no FadeMC ou no AtlanticMC, para que aconteça um clan x clan é necessário que um dono ou administrador esteja presente no evento, caso contrário, todos os envolvidos serão retirados da clan.",
            "url": "https://discordapp.com",
            "color": 15203648,
            "timestamp": new Date(),
            "footer": {
              "icon_url": message.author.displayAvatarURL,
              "text": message.author.username
            },
            "thumbnail": {
              "url": "https://cdn.discordapp.com/attachments/521150947519496208/536773272285610020/jerrmuCB_400x400.jpg"
            },
            "image": {
              "url": "https://cdn.discordapp.com/attachments/529816267943837727/536666065082646558/jauma.png"
            },
            "author": {
              "name": "Clan x Clan - InsanityClan",
              "url": "https://discordapp.com",
              "icon_url": "https://cdn.discordapp.com/attachments/521150947519496208/536773272285610020/jerrmuCB_400x400.jpg"
            }
          }
    })

}

module.exports.help = {
  name:"clanxclan"
}