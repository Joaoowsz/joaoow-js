const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let mentionMEssage = message.content.slice(10);
    let mention = message.mentions.users.first();
    mention.sendMessage(mentionMEssage);
    message.reply({
    "embed": {
        "description": `Lista de comandos: \n!addrole <@username> <cargo> - Setar o cargo de um membro.\n!removerole <@username> <cargo> - Remover o cargo de um membro\n!anunciar <msg> - Enviar um anúncio.\n!avatar <@username> - Ver o avatar de um membro.\n!clear <quantidade> - Limpar certa quantidade de mensagens.\n!botinfo - Veja as informações do bot.\n!dog - Ver um cachorro fofo ;3\n!info - Veja suas informações.\n!kick <@username> <motivo> - Kickar um membro do discord.\n!ban <@username> <motivo> - Banir um membro do discord.\n!report - Reportar um membro do discord.\n!serverinfo - Veja as informações do servidor.\n!warn <@username> <motivo> - Dar um aviso a um membro.\n!warnlevel <@username> - Veja a quantidade de warns de um membro`,
        "url": "",
        "color": "3066993",
      }
    })
}

module.exports.help = {
    name: "comandos"
}