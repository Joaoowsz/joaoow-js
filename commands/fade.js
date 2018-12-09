const Discord = require("discord.js");

if(message.channel.id != "521150947519496208") return message.channel.send(", use o #bots!")
module.exports.run = async (bot, message, args) => {
    message.channel.send({
        "embed": {
            "title": ``,
            "description": "Veja algumas informações sobre o servidor!\n\n**IP:** fademc.com.br\n**Loja:** https://loja.fademc.com.br\n\nO **FadeMC** é um servidor de Minecraft.",
            "url": "",
            "color": 3553598,  
            "timestamp": new Date(),
            "footer": {
                "icon_url": message.author.displayAvatarURL,
                "text": message.author.username
            },
            "thumbnail": {
                "url": "https://i.imgur.com/Stenp0u.png"
            },
            "image": {
                "url": null
            },
            "author": {
                "name": message.guild.name,
                "url": "",
                "icon_url": "https://i.imgur.com/Stenp0u.png"
            }
            }})
        }

module.exports.help = {
  name:"fade"
}