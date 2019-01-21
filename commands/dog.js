const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

    if(message.channel.id != "530508247426269195") return message.channel.send("Desculpe, meus comandos só funcionam no <#530508247426269195>!");
    let {body} = await superagent
    .get(`https://random.dog/woof.json`);

    let dogembed = new Discord.RichEmbed()
    .setColor("#f4a142")
    .setTitle("🐶")
    .setImage(body.url);

    message.channel.send(dogembed);

}

module.exports.help = {
    name: "dog"
}