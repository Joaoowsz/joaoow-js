const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    if(!args[1]) return message.reply("Use: !perguntar @FadeMC <pergunta>");
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