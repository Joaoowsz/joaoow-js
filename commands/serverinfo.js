const Discord = require("discord.js");

let user = message.mentions.members.first() || message.author;
let membrog = message.guild.member(user)
var horario = moment(membrog.joinedAt).format('LL')

module.exports.run = async (bot, message, args) => {
    message.channel.send({
        "embed": {
            "title": ``,
            "description": "",
            "url": "",
            "color": 3553598,  
            "timestamp": new Date(),
            "footer": {
                "icon_url": message.author.displayAvatarURL,
                "text": message.author.username
            },
            "thumbnail": {
                "url": "https://cdn.discordapp.com/attachments/458045910383853569/460254575564161024/ee15ee2204940b811508b13eac92068d.jpg"
            },
            "image": {
                "url": null
            },
            "author": {
                "name": message.guild.name,
                "url": "",
                "icon_url": "https://cdn.discordapp.com/emojis/314003252830011395.png?v=1"
            },
            "fields": [
                {
                    "name": ":crown: Dono",
                    "value": message.guild.owner.displayName,
                    "inline": true
                  },
                {
                  "name": ":computer: ID",
                  "value": message.guild.id,
                  "inline": true
                },
                {
                    "name": ":raising_hand: Usuários",
                    "value": message.guild.memberCount,
                    "inline": true
                  },
                {
                "name": ":star2: Entrei aqui em",
                "value": message.guild.horario,
                "inline": true
              },
              {
              "name": ":earth_americas: Região",
              "value": "Brasil :flag_br:",
              "inline": true
            },
            {
            "name": ":no_entry_sign: Nível de Verificação",
            "value": "Nenhum",
            "inline": true
          }
              ]
            }})
        }

module.exports.help = {
  name:"serverinfo"
}