const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Você não possui permissão.");
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!rMember) return message.reply("Use: !addrole [@username] [Cargo].");
    let role = args.join(" ").slice(22);
    if(!role) return message.reply("Especifique o cargo!");
    let gRole = message.guild.roles.find(`name`, role);
    if(!gRole) return message.reply("Cargo não encontrado.");

    if(!rMember.roles.has(gRole.id)) return message.reply("Este usuário não tem esse cargo.");
    await(rMember.removeRole(gRole.id));

    try{
        await rMember.send(`Olá <@${rMember.id}>, seu cargo "${gRole.name}" foi removido.`)
      }catch(e){
        message.channel.send(`O usuário <@${rMember.id}> teve seu cargo "${gRole.name}" removido.`)
      }

}

module.exports.help = {
    name: "removerole"
}