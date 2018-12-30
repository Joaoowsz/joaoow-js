const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("``❌`` Você não possui permissão para executar esse comando.");
    let imageurl = args[0]
    let botmessage = args.slice(1).join(" ");
    if(!args[0]) return message.channel.send({
      "embed": {
        "description": "**Qual tipo de anúncio deseja enviar?**\n\n**Sem imagem:** !anunciar <mensagem>\n **Com imagem:** !alertar <link-da-imagem> <mensagem>",
        "url": "https://cdn.discordapp.com/attachments/521150947519496208/528806154680139787/logo_suck.jpg",
        "color": 7671154,
        "timestamp": null,
        "text": null,
        "footer": {
          "icon_url": "https://cdn.discordapp.com/attachments/521150947519496208/528806154680139787/logo_suck.jpg"
        },
        "author": {
          "name": "Anúncios",
          "url": "https://discordapp.com",
          "icon_url": "https://cdn.discordapp.com/attachments/521150947519496208/528806154680139787/logo_suck.jpg"
        }
      }
    })
    if(!args[0]) return;
    message.channel.send("✔ | Seu anúncio foi enviado com sucesso!")
    bot.channels.get("528254095614541854").send("@everyone")
    bot.channels.get("528254095614541854").send({
        "embed": {
          "description": botmessage,
          "url": "https://discordapp.com",
          "color": 9710166,
          "timestamp": null,
          "footer": {
            "icon_url": "https://cdn.discordapp.com/emojis/506833797367595037.gif?v=1",
            "text": "Anúncio enviado por: " + message.author.username,
          },
          "image": {
            "url": imageurl
          },
          "author": {
            "name": "#Fade:",
            "url": "https://discordapp.com",
            "icon_url": "https://i.imgur.com/Stenp0u.png"
          }
        }
      })

}

module.exports.help = {
    name: "alertar"
}


