const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("``❌`` Você não possui permissão para executar esse comando.");
    let imageurl = args[0]
    let botmessage = args.slice(1).join(" ");
    message.delete().catch();
    let canal = message.guild.channels.find(`name`,'anuncios');
    let embed1 = ({
      "embed": {
        "description": "Qual tipo de anúncio deseja enviar?\n\n📸 **Com imagem**\n📝 **Sem imagem**",
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
    let msg1 = await message.channel.send(embed1);
    await msg1.react('📸');
    await msg1.react('📝');


    canal.send("@everyone")
    canal.send({
  "embed": {
    "description": botmessage,
    "url": null,
    "color": 1752220,
    "timestamp": new Date(),
    "footer": {
      "icon_url": message.author.displayAvatarURL,
      "text": "Atenciosamente, " + message.author.username
    },
    "image": {
      "url": imageurl
    }, 
    "author": {
      "name": " Rede Fade informa:",
      "url": null,
      "icon_url": "https://images-ext-1.discordapp.net/external/YFjo9kmtQ0r3WM1KGn-ga2k9g5i6obaYK-f9KK9z5SU/%3Fv%3D1/https/cdn.discordapp.com/emojis/480512404229193736.gif"
    }
  }
    })
  }

module.exports.help = {
    name: "anunciar"
}