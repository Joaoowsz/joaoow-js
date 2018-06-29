const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    if(!args[1]) return message.reply("Faça uma pergunta completa!");
    let replies = ["Sim", "Não", "Talvez"];

    let result = Math.floor((Math.random() * replies.length));
    let question = args.slice(1).join(" ");

    let ballembed = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setColor("#8de878")
    .addField("Pergunta", question)
    .addField("Resposta", replies[result])

    message.channel.send(ballembed);
}


module.exports.help = {
    name: "perguntar"
}