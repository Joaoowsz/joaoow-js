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
                "text": "Comando por:" + message.author.username,
            }
        }
    })




}

module.exports.help = {
    name: "info"
}