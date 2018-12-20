const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("``❌`` Você não possui permissão para executar esse comando.");
    let imageurl = args[0]
    let botmessage1 = args.slice(0).join(" ");
    let botmessage2 = args.slice(1).join(" ");
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


    let embed2 = ({
      "embed": {
        "description": "Digite a imagem que deseja colocar no anúncio.",
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

    let embed3 = ({
      "embed": {
        "description": "Digite a mensagem que deseja colocar no anúncio.",
        "url": "https://i.imgur.com/Stenp0u.png",
        "color": 7671154,
        "timestamp": null,
        "text": "null",
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

    message.react('📸')
      bot.on('messageReactionAdd', (reaction, user) => {
          if(reaction.emoji.name === "📸" && user.id !== bot.user.id) {
               reaction.remove(user)
                message.channel.send(embed3)
          let msg2 = message.member.send(canal)

          let embed4 = ({
            "embed": {
              "description": msg2,
              "url": "https://discordapp.com",
              "color": 15434940,
              "timestamp": null,
              "footer": {
                "icon_url": "https://images-ext-2.discordapp.net/external/ssmOB8hpExAshVnbDJxBJSsVaC9M6mGA0ec7a-YLH2I/https/images-ext-1.discordapp.net/external/YFjo9kmtQ0r3WM1KGn-ga2k9g5i6obaYK-f9KK9z5SU/%253Fv%253D1/https/cdn.discordapp.com/emojis/480512404229193736.gif",
                "text": "Anúncio realizado por: " + message.author.username
              },
              "image": {
                "url": "https://i.imgur.com/Stenp0u.png"
              },
              "author": {
                "name": "#Fade:",
                "url": "https://discordapp.com",
                "icon_url": "https://i.imgur.com/Stenp0u.png"
              }
            }
          })

          canal.send(embed3)
          }
        })

        message.react('📝')
      bot.on('messageReactionAdd', (reaction, user) => {
          if(reaction.emoji.name === "📝" && user.id !== bot.user.id) {
               reaction.remove(user)
                message.channel.send(embed3)
               msg3 = message.member.send(canal)
               message.channel.send(embed2)
               msg4 = message.member.send(canal)

                let embed5 = ({
                  "embed": {
                    "description": msg3,
                    "url": "https://discordapp.com",
                    "color": 15434940,
                    "timestamp": null,
                    "footer": {
                      "icon_url": "https://images-ext-2.discordapp.net/external/ssmOB8hpExAshVnbDJxBJSsVaC9M6mGA0ec7a-YLH2I/https/images-ext-1.discordapp.net/external/YFjo9kmtQ0r3WM1KGn-ga2k9g5i6obaYK-f9KK9z5SU/%253Fv%253D1/https/cdn.discordapp.com/emojis/480512404229193736.gif",
                      "text": "Anúncio realizado por: " + message.author.username
                    },
                    "image": {
                      "url": msg4
                    },
                    "author": {
                      "name": "#Fade:",
                      "url": "https://discordapp.com",
                      "icon_url": "https://i.imgur.com/Stenp0u.png"
                    }
                  }
                })
          }
        })       
}

module.exports.help = {
    name: "anunciar"
}


