const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


    let mUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!mUser) return message.channel.send("``❗`` Use: ``!mute <@username> <motivo>``");
    let mReason = args.join(" ").slice(22);
    var staffrole = message.guild.roles.find(`name`, '☀️ Staff')
    if(!message.roles.has(staffrole)) return message.channel.send("``❌`` Você não possui permissão para executar esse comando.");
    if(mUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("``❌`` Esse usuário não pode ser mutado!");

    message.channel.send({
     "embed": {
      "description": `**${mUser}** foi mutado por **<@${message.author.id}>**\n**Motivo:** ${mReason}`,
      "url": `https://discordapp.com`,
      "color": 15105570,
      "footer": {
        "icon_url": "https://cdn.discordapp.com/attachments/521157541905039360/521167240247246848/Discord.png",
        "text": "Equipe de moderação - FadeMC"
      }
    }
  })
  
   
    var role = message.guild.roles.find(`name`, 'Mutado')

    if(mUser.roles.has(role)) return message.channel.send("``❗`` Este usuário já está mutado.");
  await(mUser.addRole(role));

}

module.exports.help = {
  name:"mute"
}