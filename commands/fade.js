const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(message.channel.id != "523838496691978240") return message.channel.send(" ");
    if(message.channel.id != "523586087696990208") return message.channel.send(" ");
    message.channel.send({
        "embed": {
            "title": ``,
            "description": "Veja algumas informações sobre o servidor!\n\n**🎮 IP:** fademc.com.br\n🛒 **Loja:** https://loja.fademc.com.br\n🌐 **Site:** https://fademc.com.br\n💠 **Twitter Principal:** https://twitter.com/_FadeMC\n👮 **Twitter da equipe:** https://twitter.com/FadeMCStaff\n🔨 **Twitter de bans:** https://twitter.com/FadeMCBans\n\n Qualquer dúvida relacionada a rede, entre em contato com a nossa equipe.",
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