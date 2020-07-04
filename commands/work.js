const db = require('quick.db')
const Discord = require('discord.js')
const ms = require("parse-ms");

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith('m!'))return;  

    let user = message.author;
    let author = await db.fetch(`work_${message.guild.id}_${user.id}`)

    let timeout = 600000;
      const ayy = bot.emojis.find(emoji => emoji.name === "Emerald");
    if (author !== null && timeout - (Date.now() - author) > 0) {
        let time = ms(timeout - (Date.now() - author));
    
        let timeEmbed = new Discord.RichEmbed()
        .setColor(Math.floor(Math.random()*16777215))
        .setDescription(`<:Cross:618736602901905418> Вы уже работали\n\nПопробуйте еще раз через ${time.minutes}минут(ы) ${time.seconds}секунд(ы) `);
        message.channel.send(timeEmbed)
      } else {

        let replies = ['Программистом','Строителем','Уборщиком','в Убере','Шефом','Механиком']

        let result = Math.floor((Math.random() * replies.length));
        let amount = Math.floor(Math.random() * 80) + 1;
        let embed1 = new Discord.RichEmbed()
        .setColor(Math.floor(Math.random()*16777215))
        .setDescription(`Вы работали ${replies[result]} и заработали ${amount}${ayy}`);
        message.channel.send(embed1)
        
        db.add(`money_${message.guild.id}_${user.id}`, amount)
        db.set(`work_${message.guild.id}_${user.id}`, Date.now())
    };
}



module.exports.help = {
  name:"work",
  aliases: ["wr"]
}
