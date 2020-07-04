const Discord = require ('discord.js')

exports.run = (client, message, args) => {
      const embed = new Discord.RichEmbed()
      .setColor(Math.floor(Math.random()*16777215))
      .addField("Я создан Миленькой","И был создан для сервера Emerald RP")
      .addField("Данные моего создателя:","Дискорд все знают")
      .addField("Ютуб:",`[**Тык**](https://www.youtube.com/channel/UC6vwkyu7Y6mC9wuu-wdlceQ?view_as=subscriber)`)
      .addField("Ютуб сервера:",`[**Тык**](https://www.youtube.com/channel/UCbMQzsapqIPoOFqU5nbe9Ag)`)
      .addField("На этом пока что все","Пока!")
      message.channel.send({embed});
}
module.exports.help = {
  name:"credits",
  aliases: ["credits"]
}