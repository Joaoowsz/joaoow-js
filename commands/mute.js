const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


    let mUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!mUser) return message.channel.send("``❗`` Use: ``!mute <@username> <motivo>``");
    let mReason = args.join(" ").slice(22);
    let punicoes = message.guild.channels.find(`name`, '🚷punições');
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("``❌`` Você não possui permissão para executar esse comando.");
    message.delete().catch();
    punicoes.send({
     "embed": {
      "description": `**${mUser}** foi mutado por **<@${message.author.id}>**\n**Motivo:** ${mReason}`,
      "url": `https://discordapp.com`,
      "color": 15105570,
      "footer": {
        "icon_url": "https://cdn.discordapp.com/attachments/521157541905039360/521167240247246848/Discord.png",
        "text": "Moderação - Suuck > Discord"
      }
    }
  })
  
   
    var role = message.guild.roles.find(`name`, 'Mutado')

    if(mUser.roles.has(role)) return message.channel.send("❗ | Esse usuário já está mutado.");
  await(mUser.addRole(role));
  message.channel.send("✔ | Usuário mutado com sucesso.")

}

module.exports.help = {
  name:"mute"
}