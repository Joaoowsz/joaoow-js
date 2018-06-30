const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let iMember = message.member.id;
    let cMember = message.author.createdAt;
    let apMember = message.mentions.users.size > 0 ? message.mentions.users.first() : message.author;
    const member = message.guild.member(apMember);
    let cMember = message.member.highRole.name;

    message.channel.send({
        "embed": {
            "description":`**ID:** ${iMember}\n**Criado em:** ${cMember}\n\n**Apelido:** ${apMember}\n**Cargo mais alto:** ${cMember}`,
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