const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(message.channel.id != "523586087696990208") return message.channel.send(" ");
  let promotor = bot.roles.get("522912997983911936");
    if(!message.roles.has(promotor)) return message.reply("``❌`` Você não possui permissão para executar esse comando.");
    if(!args[0]) return message.channel.send("``❗`` Use: ``!evento [evento] [horário] [IP] [Premiação]``\nExemplo: ``!evento Mini-Fade 20:00 a1.hg.fademc.com.br VIP - 2 DIAS``")
    let evento = args[0];
    let horario = args[1];
    let ip = args[2];
    let premiacao = args.slice(3).join(" ");
    let canal = message.guild.channels.find(`name`,'🎮eventos');
    canal.send("<@&524015252015153152>")
    canal.send({
        "embed": {
            "description": `**Para participar basta se conectar ao IP informado abaixo**.\n\n**Evento:** ${evento}\n**Horário:** ${horario}\n**IP:** ${ip}\n**Premiação:** ${premiacao}`,
            "url": "https://i.imgur.com/Stenp0u.png",
            "color": 9380674,
            "timestamp": new Date(),
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