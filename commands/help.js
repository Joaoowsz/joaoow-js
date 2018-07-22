const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

message.channel.send({
"content": "Ajuda - Nodus Bot",
  "embed": {
    "description": "**Lista de comandos do bot:**",
    "url": "https://discordapp.com",
    "color": 10375995,
    "timestamp": "2018-07-22T09:26:51.895Z",
    "footer": {
      "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png",
      "text": "ASD"
    },
    "author": {
      "name": "Comandos - Nodus Bot",
      "url": "https://cdn.discordapp.com/attachments/466385018227261440/470524156925181973/4GIlTLzP_400x400.jpg",
      "icon_url": "https://cdn.discordapp.com/attachments/466385018227261440/470524156925181973/4GIlTLzP_400x400.jpg"
    },
    "fields": [
      {
        "name": "Anúncio",
        "value": "**Formato:** !anunciar <mensagem>\n**Canal:** #📢anúncios \n**Função:** Use para enviar um anúncio.\n "
      },
      {
        "name": "Clear",
        "value": "**Formato:** !clear <quantidade>\n**Canal:** #🤖bot  \n**Função:** Use para limpar o chat.\n "
      },
      {
        "name": "Banimento",
        "value": "**Formato:** !ban <@username> <motivo>\n**Canal:** #🤖bot  \n**Função:** Use para banir um membro do Discord.\n "
      }
        ]
  }
})
}

module.exports.help = {
    name: "anunciar"
}