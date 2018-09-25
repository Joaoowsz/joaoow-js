const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You do not have permission.");
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!rMember) return message.reply("Use: +removegroup <@username> <role>.");
    let role = args.join(" ").slice(22);
    if(!role) return message.reply("Specify the role.");
    let gRole = message.guild.roles.find(`name`, role);
    if(!gRole) return message.reply("Role not found.");

    if(!rMember.roles.has(gRole.id)) return message.reply("This user does not have this role.");
    await(rMember.removeRole(gRole.id));

    try{
        await rMember.send(`Hello <@${rMember.id}>, your role "${gRole.name}" was removed.`)
      }catch(e){
        message.channel.send(`User <@${rMember.id}> has had his role "${gRole.name}" removed.`)
      }

}

module.exports.help = {
    name: "removegroup"
}