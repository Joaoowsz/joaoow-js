const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(message.channel.id != "524805327166636048") return message.channel.send(" ");
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("❌ | Você não possui permissão para executar esse comando.");
    let tUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!tUser) return message.channel.send("❗ | Utilize: ``!responder <@username> <resposta>``");
    let tMessage = args.slice(1).join(" ");
    message.delete().catch();
    const logticket = bot.channels.get('525983734013362187');

    let ticketembed = ({
      "embed": {
        "description": "O ticket de " + tUser + " foi respondido com sucesso!",
        "color": 187749,
        "timestamp": null,
        "footer": {
          "icon_url": "https://i.imgur.com/Stenp0u.png",
          "text": "Staffer: " + message.author.username
        }
      }
    })
    message.channel.send(ticketembed)

    let embed = ({
  "embed": {
    "description": "**Autor:** " + tUser.user.username + "\n**Resposta:** " + tMessage + "\n**Staffer:** " + message.author.username + "\n**Status:** Fechado",
    "url": null,
    "color": 1752220,
    "timestamp": new Date(),
    "footer": {
      "icon_url": message.author.displayAvatarURL,
      "text": null
    },
    "thumbnail": {
      "url": tUser.displayAvatarURL
    }, 
    "author": {
      "name": "Seu ticket foi respondido!",
      "url": null,
      "icon_url": "https://i.imgur.com/Stenp0u.png"
    }
  }
    })

    let embed2 = ({
      "embed": {
        "description": "**Autor:** " + tUser.user.username + "\n**Resposta:** " + tMessage + "\n**Staffer:** " + message.author.username + "\n**Status:** Fechado",
        "url": null,
        "color": 1752220,
        "timestamp": new Date(),
        "footer": {
          "icon_url": message.author.displayAvatarURL,
          "text": null
        },
        "thumbnail": {
          "url": tUser.displayAvatarURL
        }, 
        "author": {
          "name": "Um ticket foi respondido!",
          "url": null,
          "icon_url": "https://i.imgur.com/Stenp0u.png"
        }
      }
        })

    logticket.send(embed)
    tUser.send(embed)

}
    module.exports.help = {
        name: 'responder'
    };