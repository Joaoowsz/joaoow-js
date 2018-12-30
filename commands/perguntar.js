const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(message.channel.id != "528256316922134528") return message.channel.send("Desculpe, meus comandos só funcionam no <#528256316922134528>!");
    if(!args[1]) return message.reply("Use: !perguntar <pergunta>");
    let replies = ["Sim", "Não", "Sei não em..."];

    let result = Math.floor((Math.random() * replies.length));
    let question = args.join(" ");

    let ballembed = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setColor("#8de878")
    .addField("Pergunta:", question)
    .addField("Resposta:", replies[result])

    message.channel.send(ballembed);
}


module.exports.help = {
    name: "perguntar"
}