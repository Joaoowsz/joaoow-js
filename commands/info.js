const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let iMember = message.member.id;
    let cMember = message.author.createdAt;
    message.channel.send({
        "embed": {
            "description":`**ID:** ${iMember}\n**Criado em:** ${cMember}`,
            "color": 1146986,
            "timestamp": new Date(),
            "footer": {
                "icon_url": message.author.displayAvatarURL,
                "text": "Comando por: " + message.author.username
            },
                "thumbnail": {
                    "url": "https://cdn.discordapp.com/attachments/458045910383853569/460254575564161024/ee15ee2204940b811508b13eac92068d.jpg"
                },
                "author": {
                    "name": message.author.username,
                    "icon_url": message.author.displayAvatarURL,
                }
            }
        })




}

module.exports.help = {
    name: "info"
}