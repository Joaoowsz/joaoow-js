const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("❌ | Você não possui permissão para executar esse comando.");
    if(!args[0]) return message.channel.send("❗ | Defina a quantidade de mensagens que deseja apagar.");
    message.channel.bulkDelete(args[0]).then(() => {
    });
    message.channel.send(`${args[0]} mensagens foram deletadas com **sucesso**.`).then(msg => msg.delete(100));
    message.channel.send(`${args[0]} mensagens foram deletadas com **sucesso**.`)
}

module.exports.help = {
    name: "clear"
}