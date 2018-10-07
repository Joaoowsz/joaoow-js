const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("``❌`` Você não possui permissão para executar esse comando.");
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!rMember) return message.channel.send("``❗`` Use: ``!removerole <@username> <cargo>``.");
    let role = args.join(" ").slice(22);
    if(!role) return message.channel.send("`❗`` Especifique o cargo.");
    let gRole = message.guild.roles.find(`name`, role);
    if(!gRole) return message.channel.send("``❌`` Cargo não encontrado.");

    if(!rMember.roles.has(gRole.id)) return message.channel.send("``❌`` Este usuário não possui esse cargo.");
    await(rMember.removeRole(gRole.id));

    try{
        await rMember.send(`Olá <@${rMember.id}>, foi removido o seu cargo ``${gRole.name}`` no servidor ``AtlanticMC - Official``.`)
      }catch(e){
        message.channel.send(`O membro ``<@${rMember.id}>`` teve o cargo ``${gRole.name}`` retirado pelo staffer ``${message.author.name}``.`)
      }
}

module.exports.help = {
    name: "removegroup"
}