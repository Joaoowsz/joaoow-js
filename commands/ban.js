const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("❌ Você não possui permissão para executar esse comando.");  
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("``❗`` Use: !ban <@username> <motivo>");
    let bReason = args.join(" ").slice(22);
    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("❌ Esse usuário não pode ser punido.");

    let embedpunicoes = ({
    "embed": {
      "description": "Membro punido com **sucesso**\n\n**Usuário punido:** " + bUser + "\n**Punido por:** <@" + message.author.id + "> \n**Motivo:** " + bReason,
      "url": "https://discordapp.com",
      "color": 1698620,
      "timestamp": new Date(),
      "footer": {
        "icon_url": "https://cdn.discordapp.com/attachments/521150947519496208/536773272285610020/jerrmuCB_400x400.jpg",
        "text": "Registro de punição do discord"
      },
      "author": {
        "name": "Punição - Discord",
        "url": "https://discordapp.com",
        "icon_url": message.author.username
      }
    }
  })
    
    let punicoeschannel = message.guild.channels.find(`name`, "⛔punições");
    if(!punicoeschannel) return message.channel.send("❌ Canal de punições não encontrado.");

    message.guild.member(bUser).ban(bReason);
    message.channel.send(embedpunicoes)
}

module.exports.help = {
  name:"ban"
}