const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (bot, message, args) => {
  if(!message.content.startsWith('m!'))return;  
  let ownerID = '427876788438433792'
  if(message.author.id !== ownerID) return;
  const ayy = bot.emojis.find(emoji => emoji.name === "Emerald");

  let user = message.mentions.members.first() || message.author;

    if (isNaN(args[1])) return;
    db.add(`money_${message.guild.id}_${user.id}`, args[1])
    let bal = await db.fetch(`money_${message.guild.id}_${user.id}`)

    let moneyEmbed = new Discord.RichEmbed()
    .setColor(Math.floor(Math.random()*16777215))
    .setDescription(`Добавлено ${args[1]}${ayy}\n\nНовый баланс: ${bal}${ayy}`);
    message.channel.send(moneyEmbed)

};

module.exports.help = {
  name:"addmoney",
  aliases: ["am"]
}
