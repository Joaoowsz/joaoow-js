const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let iMember = message.member.id;
    let cMember = message.author.createdAt;
    let sMember = message.author.status;
    let aMember = message.author.activity;

    message.channel.send({
        "embed": {
            "description":`**ID:** ${iMember}\n**Criado em:** ${cMember}\n\n**Status:** ${sMember}\n**Atividade:** ${aMember}`,
            "color": 1146986,
            "timestamp": new Date(),
            "footer": {
                "icon_url": null,
                "text": "Comando por: " + message.author.username
            },
                "thumbnail": {
                    "url": message.author.displayAvatarURL,
                },
                "author": {
                    "name": message.author.username,
                    "icon_url": null,
                }
            }
        })




}

module.exports.help = {
    name: "info"
}