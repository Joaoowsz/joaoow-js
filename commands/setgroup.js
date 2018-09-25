const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  //!addrole @andrew Dog Person
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You do not have permission.");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("Use: +addrole <@username> <role>.");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Specify the role!");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Role not found.");

  if(rMember.roles.has(gRole.id)) return message.reply("This user already has this role.");
  await(rMember.addRole(gRole.id));

  try{
    await rMember.send(`Hello <@${rMember.id}>, your received the role "${gRole.name}".`)
  }catch(e){
    message.channel.send(`The user <@${rMember.id}> received the role "${gRole.name}"`)
  }
}

module.exports.help = {
  name: "setgroup"
}