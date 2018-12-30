const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(message.channel.id != "528256316922134528") return message.channel.send("Desculpe, meus comandos só funcionam no <#528256316922134528>!");
    if(!args[1]) return message.reply("Use: !perguntar <pergunta>");
    let replies = ["Sim", "Não", "Sei não em..."];

    let result = Math.floor((Math.random() * replies.length));
    let question = args.join(" ");

    let ballembed = ({

        "embed": {
            "description": "**Pergunta:** " + question + "\n**Resposta:** " + replies[result],
            "url": "https://cdn.discordapp.com/attachments/521150947519496208/528806154680139787/logo_suck.jpg",
            "color": 1146986,
            "timestamp": null,
            "footer": {
              "icon_url": message.author.displayAvatarURL,
              "text": "Autor da pergunta: " + message.author.username
            },
            "thumbnail": {
              "url": "https://cdn.discordapp.com/attachments/521150947519496208/528806154680139787/logo_suck.jpg"
            },
            "author": {
              "name": "Perguntas e Respostas",
              "url": "https://discordapp.com",
              "icon_url": "https://cdn.discordapp.com/attachments/521150947519496208/528806154680139787/logo_suck.jpg"
            }
          }

    })

    message.channel.send(ballembed);
}


module.exports.help = {
    name: "perguntar"
}