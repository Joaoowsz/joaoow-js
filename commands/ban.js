const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("**[US]** User not found.\n**[PT]**Usuário não encontrado.");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("**[US]** You do not have permission.\n**[PT]** VOcê não possui permissão.");
    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("**[US]** This user can not be banned!\n**[PT]** Este usuário não pode ser punido.");

    let banEmbed = new message.channel.send({
      "embed": {
        "title": "[PT] Punições - Intel Corporation",
        "description": `\n**Punição:** Banimento\n**Usuário punido:** ${bUser}\n**Punido por:** ${message.author.name}\n**Motivo:** ${bReason}`,
        "url": "https://images-ext-1.discordapp.net/external/MZf3GbJLoJUf9uQXPdsG681FX7_TWe-6UBnJPsuKW4s/https/cdn.discordapp.com/attachments/490177937094737941/491616735279972352/latest.png",
        "color": 1597539,
        "footer": {
          "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png",
          "text": "Equipe de moderação - Intel Corporation"
        }
      }
    })

    let punicoeschannel = message.guild.channels.find(`name`, "⛔punicoes");
    if(!punicoeschannel) return message.channel.send("**[US]** Channel of punishments not found.\n**[PT]** Canal de punições não encontrado.");

    message.guild.member(bUser).ban(bReason);
    punicoeschannel.send(banEmbed);
}

module.exports.help = {
  name:"ban"
}