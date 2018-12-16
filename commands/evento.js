const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


    if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply("``❌`` Você não possui permissão para executar esse comando.");
    if(!message.member.send) return message.reply ("``❗`` Use: ``!evento [Evento] [Horário] [IP] [Premiação]``\n**Exemplo:** !evento Mini-Fade 20:00 a1.hg.fademc.com.br VIP - 1 Dia")
    let evento = args.slice(1).join(" ");
    let horario = args.slice(2).join(" ");
    let ip = args.slice(3).join(" ");
    let premiacao = args.slice(4).join(" ");
    let canal = message.guild.channels.find(`name`,'🎮eventos');
    message.canal.send({
        "embed": {
            "description": `**Para participar basta se conectar ao IP informado abaixo**.\n\n**Evento:** ${evento}\n**Horário:** ${horario}\n**IP:** ${ip}\n**Premiação:** ${premiacao}`,
            "url": "https://i.imgur.com/Stenp0u.png",
            "color": 9380674,
            "timestamp": "2018-12-16T22:03:48.994Z",
            "footer": {
              "icon_url": message.author.displayAvatarURL,
              "text": "Responsável: " + message.author.username
            },
            "thumbnail": {
              "url": "https://cdn.discordapp.com/attachments/521150947519496208/523987305204154391/120.png"
            },
            "author": {
              "name": "Eventos - FadeMC",
              "url": "https://i.imgur.com/Stenp0u.png",
              "icon_url": "https://i.imgur.com/Stenp0u.png"
            }
          }
    })
  }

module.exports.help = {
    name: "evento"
}