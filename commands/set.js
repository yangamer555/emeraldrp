const Discord = require('discord.js');
const db = require('quick.db');
const ms = require("parse-ms");
const randomstring = require("randomstring");

module.exports.run = async (bot, message, args) => {

    let permcheck = new Discord.RichEmbed()
    .setColor('#e64b0e')
    .setDescription(`У вас недостаточно прав`)

    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(permcheck)

    let argcheck = new Discord.RichEmbed()
    .setColor('#e64b0e')
    .setDescription(`Выберите номер 1-5, и причину тикета`)

    if(!args[0]) return message.channel.send(argcheck)

  let permembed = new Discord.RichEmbed()
  .setColor('#e64b0e')
  .setDescription(`Error. Give Me The Permission: Manage Channels`)

  if(!message.guild.me.hasPermission('MANAGE_CHANNELS')) return message.channel.send(permembed);

  if (args[0].toLowerCase() == '1') {

    let filterembed = new Discord.RichEmbed()
    .setColor('#e64b0e')
    .setDescription('Введите причину')

        if(!args[1]) return message.channel.send(filterembed)

        db.set(`${message.guild.id}-topic1`, args.join(" ").slice(2))
        
        let completeembed = new Discord.RichEmbed()
        .setColor('#e64b0e')
        .setDescription(`\`${args.join(" ").slice(2)}\` Теперь причина 1 тикета`)


        message.channel.send(completeembed)
    

} else if(args[0].toLowerCase() == '2') {

    let filterembed = new Discord.RichEmbed()
    .setColor('#e64b0e')
    .setDescription('Введите причину')

        if(!args[1]) return message.channel.send(filterembed)

        db.set(`${message.guild.id}-topic2`, args.join(" ").slice(2))
        
        let completeembed = new Discord.RichEmbed()
        .setColor('#e64b0e')
        .setDescription(`\`${args.join(" ").slice(2)}\` Теперь причина 2 тикета`)


        message.channel.send(completeembed)

    } else if(args[0].toLowerCase() == '3') {

        let filterembed = new Discord.RichEmbed()
        .setColor('#e64b0e')
        .setDescription('Введите причину')
    
            if(!args[1]) return message.channel.send(filterembed)
    
            db.set(`${message.guild.id}-topic3`, args.join(" ").slice(2))
            
            let completeembed = new Discord.RichEmbed()
            .setColor('#e64b0e')
            .setDescription(`\`${args.join(" ").slice(2)}\` Теперь причина 3 тике`)
    
    
            message.channel.send(completeembed)

    } else if(args[0].toLowerCase() == '4') {

        let filterembed = new Discord.RichEmbed()
        .setColor('#e64b0e')
        .setDescription('Введите причину')
    
            if(!args[1]) return message.channel.send(filterembed)
    
            db.set(`${message.guild.id}-topic4`, args.join(" ").slice(2))
            
            let completeembed = new Discord.RichEmbed()
            .setColor('#e64b0e')
            .setDescription(`\`${args.join(" ").slice(2)}\` Теперь причина 4 тикета`)
    
    
            message.channel.send(completeembed)
    
        } else if(args[0].toLowerCase() == '5') {

            let filterembed = new Discord.RichEmbed()
            .setColor('#e64b0e')
            .setDescription('Введите причину')
        
                if(!args[1]) return message.channel.send(filterembed)
        
                db.set(`${message.guild.id}-topic5`, args.join(" ").slice(2))
                
                let completeembed = new Discord.RichEmbed()
                .setColor('#e64b0e')
                .setDescription(`\`${args.join(" ").slice(2)}\`Теперь причина 5 тикета`)
        
        
                message.channel.send(completeembed)
        
        }
}

module.exports.help = {
    name:"set",
    aliases: ["s"]
  }