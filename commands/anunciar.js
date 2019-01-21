const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("❌ | Você não possui permissão para executar esse comando.");
    let botmessage = args.slice(0).join(" ");
    if(!args[0]) return message.channel.send({
      "embed": {
        "description": "**Use:** !anunciar <mensagem>",
        "url": "https://cdn.discordapp.com/attachments/521150947519496208/536773272285610020/jerrmuCB_400x400.jpg",
        "color": 7671154,
        "timestamp": null,
        "text": null,
        "footer": {
          "icon_url": "https://cdn.discordapp.com/attachments/521150947519496208/536773272285610020/jerrmuCB_400x400.jpg"
        },
        "author": {
          "name": "Anúncios",
          "url": "https://discordapp.com",
          "icon_url": "https://cdn.discordapp.com/attachments/521150947519496208/536773272285610020/jerrmuCB_400x400.jpg"
        }
      }
    })

    
if(!args[0]) return;
message.channel.send("✔ | Seu anúncio foi enviado com sucesso!")
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
    "thumbnail": {
      "url": "https://cdn.discordapp.com/attachments/521150947519496208/536773272285610020/jerrmuCB_400x400.jpg"
    },
    "author": {
      "name": "Atenção:",
      "url": "https://discordapp.com",
      "icon_url": "https://cdn.discordapp.com/attachments/521150947519496208/536773272285610020/jerrmuCB_400x400.jpg"
    }
  }
})
}

module.exports.help = {
    name: "anunciar"
}


