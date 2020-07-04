const Discord = require('discord.js');
const db = require('quick.db');
const ms = require("parse-ms");
const randomstring = require("randomstring");

module.exports.run = async (bot, message, args) => {

  let permembed = new Discord.RichEmbed()
  .setColor('#e64b0e')
  .setDescription(`Error. Give Me The Permission: Manage Channels`)

  if(!message.guild.me.hasPermission('MANAGE_CHANNELS')) return message.channel.send(permembed);

  let user2 = message.author;

  let timeout = 300000;

  let daily = await db.fetch(`ticketcooldown_${message.guild.id}_${message.author.id}`);

  if (daily !== null && timeout - (Date.now() - daily) > 0) {
    let time = ms(timeout - (Date.now() - daily));
  
    let timeEmbed = new Discord.RichEmbed()
    .setColor("#e64b0e")
    .setDescription(`У вас есть время перезарядки ${time.minutes}m ${time.seconds} до тех пор, пока вы не сможете открыть другой билет`);
    message.channel.send(timeEmbed)
  } else {
  let numbers = randomstring.generate({
    length: 5,
    charset: 'numeric'
  });

  let authorsend2 = new Discord.RichEmbed()
  .setColor('#e64b0e')
  .setDescription(`Вы уже открыли тикет`)

  let topic1 = db.fetch(`${message.guild.id}-topic1`)
  let topic2 = db.fetch(`${message.guild.id}-topic2`)
  let topic3 = db.fetch(`${message.guild.id}-topic3`)
  let topic4 = db.fetch(`${message.guild.id}-topic4`)
  let topic5 = db.fetch(`${message.guild.id}-topic5`)

  if(topic1 == null) topic1 = 'Свободный'
  if(topic2 == null) topic2 = 'Свободный'
  if(topic3 == null) topic3 = 'Свободный'
  if(topic4 == null) topic4 = 'Свободный'
  if(topic5 == null) topic5 = 'Свободный'

  db.set(`${message.guild.id}_${message.author.id}-ticketnumber`, numbers)
  db.add(`${message.guild.id}-ticketcount`, 1)
  db.set(`${message.guild.id}_${message.author.id}-ticketopener`, message.author.username)
  db.set(`${message.guild.id}_${message.author.id}-ticketopener2`, message.author.username)
  db.set(`${message.guild.id}_${message.channel.id}-ticketopener3`, message.author.id)

  let user2 = db.fetch(`${message.guild.id}_${message.author.id}-ticketopener2`)
  console.log(user2)

  let ticketcount = db.fetch(`${message.guild.id}-ticketcount`)

  let channelsend1 = new Discord.RichEmbed()
  .setColor('#e64b0e')
  .setTitle(`Support Ticket: ${ticketcount}`)
  .setDescription(`\n\nПривет ${message.author},\n\nСпасибо, что создали тикет. Команда поддержки поможет вам, как только сможет.\n\n**Категория тикета:** ${topic1}`)

  let channelsend2 = new Discord.RichEmbed()
  .setColor('#e64b0e')
  .setTitle(`Support Ticket: ${ticketcount}`)
  .setDescription(`\n\nПривет ${message.author},\n\Спасибо, что создали тикет. Команда поддержки поможет вам, как только сможет.\n\n**Категория тикета:** ${topic2}`)

  let channelsend3 = new Discord.RichEmbed()
  .setColor('#e64b0e')
  .setTitle(`Support Ticket: ${ticketcount}`)
  .setDescription(`\n\nПривет ${message.author},\n\nСпасибо, что создали тикет. Команда поддержки поможет вам, как только сможет.\n\n**Категория тикета:** ${topic3}`)

  let channelsend4 = new Discord.RichEmbed()
  .setColor('#e64b0e')
  .setTitle(`Support Ticket: ${ticketcount}`)
  .setDescription(`\n\nПривет ${message.author},\n\nСпасибо, что создали тикет. Команда поддержки поможет вам, как только сможет.\n\n**Категория тикета:** ${topic4}`)

  let channelsend5 = new Discord.RichEmbed()
  .setColor('#e64b0e')
  .setTitle(`Support Ticket: ${ticketcount}`)
  .setDescription(`\n\nПривет ${message.author},\n\nСпасибо, что создали тикет. Команда поддержки поможет вам, как только сможет.\n\n**Категория тикета:** ${topic5}`)

  let categorysend = new Discord.RichEmbed()
  .setColor('#e64b0e')
  .setDescription(`Этот сервер не установил систему тикетов | Напишите владельцу сервера`)

  let cancelembed = new Discord.RichEmbed()
  .setColor('#e64b0e')
  .setDescription(`Тикет отклонен`)

  let timeoutembed = new Discord.RichEmbed()
  .setColor('#e64b0e')
  .setDescription(`Время вышло`)

  let input = new Discord.RichEmbed()
  .setColor('#e64b0e')
  .setDescription(`Пожалуйста, выберите одну из причин, для создания тикета: \n\n1: ${topic1}\n2: ${topic2}\n3: ${topic3}\n4: ${topic4}\n5: ${topic5}`)
  .setFooter(`Это истечет через 10 секунд, а затем вы будете помещены на 5-минутную перезарядку`)

  let logchannelembed1 = new Discord.RichEmbed()
  .setColor('#52d411')
  .setTitle(`Ticket Created`)
  .setDescription(`Открыто пользователем: ${message.author}\nНомер тикета: \`${ticketcount}\`\nПричина тикета: \`${topic1}\``)

  let logchannelembed2 = new Discord.RichEmbed()
  .setColor('#52d411')
  .setTitle(`Ticket Created`)
  .setDescription(`Открыто пользователем: ${message.author}\nНомер тикета: \`${ticketcount}\`\nПричина тикета: \`${topic2}\``)

  let logchannelembed3 = new Discord.RichEmbed()
  .setColor('#52d411')
  .setTitle(`Ticket Created`)
  .setDescription(`Открыто пользователем: ${message.author}\nНомер тикета: \`${ticketcount}\`\nПричина тикета:\`${topic3}\``)

  let logchannelembed4 = new Discord.RichEmbed()
  .setColor('#52d411')
  .setTitle(`Ticket Created`)
  .setDescription(`Открыто пользователем: ${message.author}\nНомер тикета:\`${ticketcount}\`\nПричина тикета: \`${topic4}\``)

  let logchannelembed5 = new Discord.RichEmbed()
  .setColor('#52d411')
  .setTitle(`Ticket Created`)
  .setDescription(`Открыто пользователем: ${message.author}\nНомер тикета: \`${ticketcount}\`\nПричина тикета: \`${topic5}\``)

  let msg = await message.channel.send(input)
  await msg.react("1⃣")
  await msg.react("2⃣")
  await msg.react("3⃣")
  await msg.react("4⃣")
  await msg.react("5⃣")
  await msg.react("❌")

  const filter = (reaction, user) => ['1⃣', '2⃣', '3⃣', '4⃣', '5⃣', '❌'].includes(reaction.emoji.name) && user.id === message.author.id;
  msg.awaitReactions(filter, {
    max: 1,
    time: 10000
  }).then(collected => {
    const reaction = collected.first();
    switch (reaction.emoji.name) {
      case '1⃣':
      db.set(`${message.guild.id}_${message.author.id}-ticketreason`, topic1)
      
      var name = `ticket-${numbers}`;
    message.guild.createChannel(name, { type: "text" }).then(
      (chan) => {
      chan.overwritePermissions(message.guild.roles.find('name', '@everyone'), {
         'VIEW_CHANNEL': false
      })
      chan.overwritePermissions(message.guild.roles.find('name', 'Тех.Поддержка'), {
          'VIEW_CHANNEL': true
      })
      chan.overwritePermissions(message.author.id, {'VIEW_CHANNEL': true, 'SEND_MESSAGES': true, 'MENTION_EVERYONE': false})
        let category = message.guild.channels.find(c => c.name == "Тикеты" && c.type == "category");
        if(!category) return message.channel.send(categorysend)
  
      chan.setParent(category.id)
      chan.send(channelsend1)
      chan.setTopic(`Тикет ${numbers}`)
      db.set(`${message.guild.id}_${message.author.id}-channelID`, chan.id)
    
      let authorsend = new Discord.RichEmbed()
      .setColor('#e64b0e')
      .setDescription(`Тикет создан, #${chan.name}`)

      let logchannel = message.guild.channels.find(cl => cl.name == "ticket-logs" && cl.type == "text")
      logchannel.send(logchannelembed1)  
      message.channel.send(authorsend)
      msg.delete()
    });
    break;
    case '2⃣':
      db.set(`${message.guild.id}_${message.author.id}-ticketreason`, topic2)
      
      var name = `ticket-${numbers}`;
    message.guild.createChannel(name, { type: "text" }).then(
      (chan) => {
      chan.overwritePermissions(message.guild.roles.find('name', '@everyone'), {
         'VIEW_CHANNEL': false
      })
      chan.overwritePermissions(message.guild.roles.find('name', 'Тех.Поддержка'), {
          'VIEW_CHANNEL': true
      })
      chan.overwritePermissions(message.author.id, {'VIEW_CHANNEL': true, 'SEND_MESSAGES': true, 'MENTION_EVERYONE': false})
        let category = message.guild.channels.find(c => c.name == "Tickets" && c.type == "category");
        if(!category) return message.channel.send(categorysend)
  
      chan.setParent(category.id)
      chan.send(channelsend2)
      chan.setTopic(`Тикет ${numbers}`)
      db.set(`${message.guild.id}_${message.author.id}-channelID`, chan.id)
    
      let authorsend = new Discord.RichEmbed()
      .setColor('#e64b0e')
      .setDescription(`Тикет создан, #${chan.name}`)

      let logchannel = message.guild.channels.find(cl => cl.name == "ticket-logs" && cl.type == "text")
      logchannel.send(logchannelembed2)  
      message.channel.send(authorsend)
      msg.delete()
      });
      break;
    case '3⃣':
      db.set(`${message.guild.id}_${message.author.id}-ticketreason`, topic3)
      
      var name = `ticket-${numbers}`;
    message.guild.createChannel(name, { type: "text" }).then(
      (chan) => {
      chan.overwritePermissions(message.guild.roles.find('name', '@everyone'), {
         'VIEW_CHANNEL': false
      })
      chan.overwritePermissions(message.guild.roles.find('name', 'Тех.Поддержка'), {
          'VIEW_CHANNEL': true
      })
      chan.overwritePermissions(message.author.id, {'VIEW_CHANNEL': true, 'SEND_MESSAGES': true, 'MENTION_EVERYONE': false})
        let category = message.guild.channels.find(c => c.name == "Tickets" && c.type == "category");
        if(!category) return message.channel.send(categorysend)
  
      chan.setParent(category.id)
      chan.send(channelsend3)
      chan.setTopic(`Тикет ${numbers}`)
      db.set(`${message.guild.id}_${message.author.id}-channelID`, chan.id)
    
      let authorsend = new Discord.RichEmbed()
      .setColor('#e64b0e')
      .setDescription(`Тикед создан, #${chan.name}`)

      let logchannel = message.guild.channels.find(cl => cl.name == "ticket-logs" && cl.type == "text")
      logchannel.send(logchannelembed3)  
      message.channel.send(authorsend)
      msg.delete()
      });
      break;
      case '4⃣':
        db.set(`${message.guild.id}_${message.author.id}-ticketreason`, topic4)
        
        var name = `ticket-${numbers}`;
      message.guild.createChannel(name, { type: "text" }).then(
        (chan) => {
        chan.overwritePermissions(message.guild.roles.find('name', '@everyone'), {
           'VIEW_CHANNEL': false
        })
        chan.overwritePermissions(message.guild.roles.find('name', 'Тех.Поддержка'), {
            'VIEW_CHANNEL': true
        })
        chan.overwritePermissions(message.author.id, {'VIEW_CHANNEL': true, 'SEND_MESSAGES': true, 'MENTION_EVERYONE': false})
          let category = message.guild.channels.find(c => c.name == "Tickets" && c.type == "category");
          if(!category) return message.channel.send(categorysend)
    
        chan.setParent(category.id)
        chan.send(channelsend4)
        chan.setTopic(`Support Ticket ${numbers}`)
        db.set(`${message.guild.id}_${message.author.id}-channelID`, chan.id)
      
        let authorsend = new Discord.RichEmbed()
        .setColor('#e64b0e')
        .setDescription(`Ticket Created, #${chan.name}`)
  
        let logchannel = message.guild.channels.find(cl => cl.name == "ticket-logs" && cl.type == "text")
        logchannel.send(logchannelembed4)  
        message.channel.send(authorsend)
        msg.delete()
        });
        break;
        case '5⃣':
          db.set(`${message.guild.id}_${message.author.id}-ticketreason`, topic5)
          
          var name = `ticket-${numbers}`;
        message.guild.createChannel(name, { type: "text" }).then(
          (chan) => {
          chan.overwritePermissions(message.guild.roles.find('name', '@everyone'), {
             'VIEW_CHANNEL': false
          })
          chan.overwritePermissions(message.guild.roles.find('name', 'Тех.Поддержка'), {
              'VIEW_CHANNEL': true
          })
          chan.overwritePermissions(message.author.id, {'VIEW_CHANNEL': true, 'SEND_MESSAGES': true, 'MENTION_EVERYONE': false})
            let category = message.guild.channels.find(c => c.name == "Tickets" && c.type == "category");
            if(!category) return message.channel.send(categorysend)
      
          chan.setParent(category.id)
          chan.send(channelsend5)
          chan.setTopic(`Тикет ${numbers}`)
          db.set(`${message.guild.id}_${message.author.id}-channelID`, chan.id)
        
          let authorsend = new Discord.RichEmbed()
          .setColor('#e64b0e')
          .setDescription(`Тикет создан, #${chan.name}`)
    
          let logchannel = message.guild.channels.find(cl => cl.name == "ticket-logs" && cl.type == "text")
          logchannel.send(logchannelembed5)  
          message.channel.send(authorsend)
          msg.delete()
          });
          break;
      case '❌':
      db.subtract(`${message.guild.id}-ticketcount`, 1)
      msg.delete() 
      return message.channel.send(cancelembed)
    }
  }).catch(collected => {
    msg.delete()  
    return message.channel.send(timeoutembed)
  })
    db.set(`ticketcooldown_${message.guild.id}_${message.author.id}`, Date.now())
  }}

module.exports.help = {
    name:"create",
    aliases: ["create"]
  }