const Discord = require("discord.js");
const config = require("../botconfig.json")
const apikey = require("../keys.json")
const Fortnite = require("fortnite");
const ft = new Fortnite(apikey.fortnite);

module.exports.run = async (bot, message, args) => {
    message.delete();

    let username = args[0];
    let platform = args[1] || "pc";

    let data = ft.getInfo(username, platform).then(data => {

        let status = data.lifetimeStats;
        let kills = stats.find(s => s.stat == 'kills');
        let wins = stats.find(s => s.stat == 'wins');
        let kd = stats.find(s => s.stat == 'kd');
        let mPlayed = stats.find(s => s.stat == 'Partidas jogadas');
        let tPlayed = stats.find(s => s.stat == 'Tempo jogado');
        let asTime = stats.find(s => s.stat == 'avgSurvivalTime');

        let embed = new Discord.RichEmbed()
        .setTitle("Fornite - Status")
        .setAuthor(data.username)
        .setColor(config.orange)
        .addField("Kills", kills.value, true)
        .addField("Wins", wins.value, true)
        .addField("kd", kd.value, true)
        .addField("Partidas jogadas", mPlayed.value, true)
        .addField("Tempo jogado", tPlayed.value, true)
        .addField("Média de tempo vivo", asTime.value, true)

    }).catch(e => {
        console.log(e);
        message.channel.send("Nome de usuário não encontrado!");
    })

}

module.exports.help = {
    name: "fortnite"
}