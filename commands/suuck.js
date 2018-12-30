const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


if(message.channel.id != "528256316922134528") return message.channel.send("Desculpe, meus comandos só funcionam no <#528256316922134528>!");

let embed = ({

    "embed": {
        "description": "**Meu canal:** [youtube.com/suuck](https://www.youtube.com/channel/UCveCy4D7N_9wv49nDqhFvAw)\n**Meu Twitter:** [twitter.com/suucklegit](https://twitter.com/suucklegit)\n**Meu desenvolvedor:** [twitter.com/Joaoowsz](https://twitter.com/Joaoowsz)\n\nTem alguma sugestão para o bot? Entre em contato com Joaoowsz#0001",
        "url": "https://cdn.discordapp.com/attachments/521150947519496208/528806154680139787/logo_suck.jpg",
        "color": 1146986,
        "timestamp": "2018-12-30T06:18:41.017Z",
        "footer": {
          "icon_url": "https://cdn.discordapp.com/attachments/521150947519496208/528806154680139787/logo_suck.jpg",
          "text": null
        },
        "thumbnail": {
          "url": "https://cdn.discordapp.com/attachments/521150947519496208/528806154680139787/logo_suck.jpg"
        },
        "author": {
          "name": "Informações sobre mim:",
          "url": "https://discordapp.com",
          "icon_url": "https://cdn.discordapp.com/attachments/521150947519496208/528806154680139787/logo_suck.jpg"
        }
      }
})

message.channel.send(embed)


}


module.exports.help = {
    name: "suuck"
}