const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith('m!'))return;  
  const ayy = bot.emojis.find(emoji => emoji.name === "Emerald");

    let embed = new Discord.RichEmbed()
    .setDescription(`**Квартиры**\n\n Квартира 1, 50000${ayy}[m!buy Квартира1]`)
    .setColor(Math.floor(Math.random()*16777215))
    message.channel.send(embed)




}


module.exports.help = {
  name:"store",
  aliases: ["st"]
}