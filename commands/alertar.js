const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("``❌`` Você não possui permissão para executar esse comando.");
    let imageurl = args[0]
    let botmessage = args.slice(1).join(" ");
    let canal = message.guild.channels.find(`name`,'anuncios');
    message.channel.send({
      "embed": {
        "description": "**Qual tipo de anúncio deseja enviar?**\n\n**Sem imagem:** !anunciar <mensagem>\n **Com imagem:** !alertar <link-da-imagem> <mensagem>",
        "url": "https://i.imgur.com/Stenp0u.png",
        "color": 7671154,
        "timestamp": null,
        "text": null,
        "footer": {
          "icon_url": "https://i.imgur.com/Stenp0u.png"
        },
        "author": {
          "name": "Anúncios",
          "url": "https://discordapp.com",
          "icon_url": "https://i.imgur.com/Stenp0u.png"
        }
      }
    })

canal.send({
  "embed": {
    "description": botmessage,
    "url": "https://i.imgur.com/Stenp0u.png",
    "color": 7671154,
    "timestamp": null,
    "text": "Anúncio enviado por:" + message.author.username,
    "footer": {
      "icon_url": "https://cdn.discordapp.com/emojis/506833797367595037.gif?v=1"
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


