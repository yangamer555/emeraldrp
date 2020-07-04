const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith('m!'))return;  


    let embed = new Discord.RichEmbed()
    .setTitle("Emerald Bot [Prefix m!] BETA!!")
    .addField("Экономические команды:", "`work`, `beg`, `rob [@user]`, `pay [@user] count`, `balance`, `withdraw [count]`, `deposit [count]`, `daily`, `weekly`, (еще будут дорабатыватся)")
    .addField("Игры для экономики:", "`roulette [color] [count]`, `slots [count]`")
    .addField("Инфо команды:", "`profile [@user]`, `serverinfo`, `botstats`")
    .addField("Игры:","`rps`")
    .addField("Реакции:","`feed`, `spank`, `slap`, `poke`, `pat`, `kiss`")
    .addField("Остальное:","`say`, `credits`, `vote`, `8ball`")
    .addField("Модерация:","`warn @user [reason]`, `mute [@user] [Время. 1000 мс - 1с]`")
    .addField("Тикеты:","`create - создать тикет`")
    .setFooter("Хотите такого же бота? Пишите в лс моему создателю! Milenkoya")
    .setColor(Math.floor(Math.random()*16777215))
    message.channel.send(embed)




}

module.exports.help = {
  name:"help",
  aliases: [""]
}