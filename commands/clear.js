const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Você não possui permissão!");
    if(!args[0]) return message.channel.send("Defina a quantidade de mensagens que deseja apagar.");
    message.channel.bulkDelete(args[0]).then(() => {
    });
    message.channel.send(`Foram excluídas ${args[0]} mensagens!`).then(msg => msg.delete(100));
}

module.exports.help = {
    name: "clear"
}