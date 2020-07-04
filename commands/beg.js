const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith('m!'))return;  

  let user = message.author;
  const ayy = bot.emojis.find(emoji => emoji.name === "Emerald");

  let timeout = 180000;
  let amount = 5;

  let beg = await db.fetch(`beg_${message.guild.id}_${user.id}`);

  if (beg !== null && timeout - (Date.now() - beg) > 0) {
    let time = ms(timeout - (Date.now() - beg));
  
    let timeEmbed = new Discord.RichEmbed()
    .setColor(Math.floor(Math.random()*16777215))
    .setDescription(`Вы уже просили недавно\n\nПопросите еще раз через ${time.minutes} минут(ы) ${time.seconds}секунд(ы) `);
    message.channel.send(timeEmbed)
  } else {
    let moneyEmbed = new Discord.RichEmbed()
  .setColor(Math.floor(Math.random()*16777215))
  .setDescription(`Вы просили и получили ${amount}${ayy}`);
  message.channel.send(moneyEmbed)
  db.add(`money_${message.guild.id}_${user.id}`, amount)
  db.set(`beg_${message.guild.id}_${user.id}`, Date.now())


  }
};


module.exports.help = {
  name:"beg",
  aliases: [""]
}