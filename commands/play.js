const Discord = require('discord.js');
const ytdl = require('ytdl-core');

module.exports.run = async (bot, message, args) => {

    if(!message.member.voiceChannel) return message.channel.send("❗ | Você precisa estar conectado a um canal de voz.");
    if(message.guild.me.voiceChannel) return message.channel.send("❌ | O BOT já está conectado a outro canal de voz.");
    if(!args[0]) return message.channel.send("❗ | Insira a URL do vídeo que deseja tocar.");
    let validate = await ytdl.validateURL(args[0]);
    if(!validate) return message.channel.send("❌ | O URL inserido não é válido.");
    let info = await ytdl.getInfo(args[0]);
    let connection = await message.member.voiceChannel.join();
    let dispatcher = await connection.play(ytdl(args[0], { filter: 'audioonly' }));
    message.channel.send(`Tocando agora: ${info.title}`)
}

module.exports.help = {
    name: "play"
}