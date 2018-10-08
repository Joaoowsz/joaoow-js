const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("``❗`` Use: !ban <@username> <motivo!>.");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("``❌`` Você não possui permissão para executar esse comando.");
    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("``❌`` Este usuário não pode ser banido.");

    let banEmbed = new ({
      "embed": {
        "description": "**Usuário punido:** " + bUser + " \n**Staffer:** <@" + message.author.id + "> \n**Motivo:** " + bReason,
        "url": null,
        "color": 15158332,
        "timestamp": new Date(),
        "footer": {
          "icon_url": "https://images-ext-1.discordapp.net/external/0vwGKF6HeV7-sSeRwOQjfWzCslPkN8FS9rf-0AJMFT8/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/496949356151439360/2e435a7132130a0cdca32cd29932ed10.png?width=473&height=473",
          "text": "Equipe de moderação"
        },
        "author": {
          "name": "⛔ Punições - AtlanticMC",
          "url": "https://discordapp.com"
        }
      }
    })

    let punicoeschannel = message.guild.channels.find(`name`, "⛔punições");
    if(!punicoeschannel) return message.channel.send("``❌`` Canal de punições não encontrado.");

    message.guild.member(bUser).ban(bReason);
    punicoeschannel.send(banEmbed);
}

module.exports.help = {
  name:"ban"
}