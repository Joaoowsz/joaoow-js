const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("``❌`` Você não possui permissão para executar esse comando.");
    let imageurl = args[0]
    let botmessage = args.slice(1).join(" ");
    message.delete().catch();
    let canal = message.guild.channels.find(`name`,'anuncios');
    let embed1 = ({
      "embed": {
        "description": "Qual tipo de anúncio deseja enviar?\n\n📸 **Com imagem**\n📝 **Sem imagem**",
        "url": "https://i.imgur.com/Stenp0u.png",
        "color": 7671154,
        "timestamp": null,
        "text": null,
        "footer": {
          "icon_url": "https://i.imgur.com/Stenp0u.png"
        },
        "author": {
          "name": "Anúncios",
          "url": "https://discordapp.com",
          "icon_url": "https://i.imgur.com/Stenp0u.png"
        }
      }
    })
    let msg1 = await message.channel.send(embed1);
    await msg1.react('📸');
    await msg1.react('📝');

    
    exports.run = (bot,message,args) => {

      message.channel.send('a').then( => {
      message.react('o emoji')
      })
      bot.on('messageReactionAdd', (reaction, user) => {
          if(reaction.emoji.name === "o emoji" && user.id !== bot.user.id) {
               reaction.remove(user)
                message.channel.send("bla boa bla ")
          }
        })
}



module.exports.help = {
    name: "anunciar"
}