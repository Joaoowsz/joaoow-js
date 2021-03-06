const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  //!addrole @andrew Dog Person
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("Você não possui permissão.");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.channel.send("``❗`` Use: ``!addgroup <@username> <Cargo>``.");
  let role = args.join(" ").slice(22);
  if(!role) return message.channel.send("``❗`` Especifique o cargo!");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.channel.send("``❌`` Cargo não encontrado.");

  if(rMember.roles.has(gRole.id)) return message.channel.send("``❗`` Este usuário já possui esse cargo.");
  await(rMember.addRole(gRole.id));

  try{
    await rMember.send(`Olá <@${rMember.id}>, você recebeu o cargo "${gRole.name}".`)
  }catch(e){
    message.channel.send(`O usuário <@${rMember.id}> recebeu o cargo "${gRole.name}"`)
  }
}

module.exports.help = {
  name: "addgroup"
}