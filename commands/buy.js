const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith('m!'))return;  

    let user = message.author;
  const ayy = bot.emojis.find(emoji => emoji.name === "Emerald");

    let author = db.fetch(`money_${message.guild.id}_${user.id}`)

    let Embed = new Discord.RichEmbed()
    .setColor("#FFFFFF")
    .setDescription(`Вам нужно **50000**${ayy} чтобы купить эту квартиру!`);

    if (args[0] == 'Квартира1') {
        if (author < 50000) return message.channel.send(Embed)
        
        db.fetch(`bronze_${message.guild.id}_${user.id}`);
        db.set(`bronze_${message.guild.id}_${user.id}`, true)

        let Embed2 = new Discord.RichEmbed()
        .setColor("#FFFFFF")
        .setDescription(`${message.author.username} Купил(а) квартиру за **50000**${ayy}`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 3500)
        
        message.channel.send(Embed2)
        bot.channels.get('724261666585575446').send(Embed2);
    }
}
  module.exports.help = {
    name:"buy",
    aliases: [""]
  }
    
