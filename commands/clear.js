const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You do not have permission.");
    if(!args[0]) return message.channel.send("Set the amount of messages you want to delete.");
    message.channel.bulkDelete(args[0]).then(() => {
    });
    message.channel.send(`${args[0]} messages were deleted.`).then(msg => msg.delete(100));
}

module.exports.help = {
    name: "clear"
}