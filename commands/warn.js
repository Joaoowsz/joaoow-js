const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {

  //!warn @daeshan <reason>
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Você não possui permissão!");
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!wUser) return message.reply("Usuário não encontrado!");
  if(wUser.hasPermission("MANAGE_MESSAGES")) return message.reply("Este usuário não pode ser alertado!");
  let reason = args.join(" ").slice(22);

  if(!warns[wUser.id]) warns[wUser.id] = {
    warns: 0
  };

  warns[wUser.id].warns++;

  fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
    if (err) console.log(err)
  });

  let warnEmbed = new Discord.RichEmbed()
  .setDescription("Alertas")
  .setAuthor(message.author.username)
  .setColor("#fc6400")
  .addField("Usuário alertado:", `<@${wUser.id}>`)
  .addField("Alertado por:", message.author)
  .addField("Canal do alerta:", message.channel)
  .addField("Numero de alertas:", warns[wUser.id].warns)
  .addField("Motivo do alerta:", reason);

  let punicoeschannel = message.guild.channels.find(`name`, "punicoes");
  if(!punicoeschannel) return message.reply("Canal de punições não encontrado.");

  punicoeschannel.send(warnEmbed);

  if(warns[wUser.id].warns == 2){
    let muterole = message.guild.roles.find(`name`, "🔈 Mutado");
    if(!muterole) return message.reply("Você precisa criar esse cargo.");

    let mutetime = "10s";
    await(wUser.addRole(muterole.id));
    message.channel.send(`<@${wUser.id}> foi mutado temporariamente.`);

    setTimeout(function(){
      wUser.removeRole(muterole.id)
      message.reply(`<@${wUser.id}> foi desmutado.`)
    }, ms(mutetime))
  }
  if(warns[wUser.id].warns == 3){
    message.guild.member(wUser).ban(reason);
    message.reply(`<@${wUser.id}> foi banido permanentemente.`)
  }

}

module.exports.help = {
  name: "warn"
}