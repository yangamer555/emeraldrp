const Discord = require("discord.js");
const db = require("quick.db");
const rs = require("randomstring");

module.exports.run = async (bot, message, args) => {
  let permcheck = new Discord.RichEmbed()
    .setColor("#e64b0e")
    .setDescription(`У вас нету прав!`);

  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(permcheck);

  let setupcheck2 = new Discord.RichEmbed()
    .setColor("#e64b0e")
    .setDescription(`Успешно установлено!`);

  message.guild
    .createRole({
      name: "Тех.Поддержка",
      color: "BLUE",
      permissions: ["MANAGE_MESSAGES", "KICK_MEMBERS"]
    })
    .then(role =>
      console.log(
        `Created new role with name ${role.name} and color ${role.color}`
      )
    )
    .catch(console.error);

  let categorycreate = new Discord.RichEmbed()
    .setColor("#e64b0e")
    .setTitle(`Установка завершена!`)
    .setDescription(
      `Роль Тех.Поддержки: **Тех.Поддержка** | Открытые тикеты: **Tickets** | Закрытые тикеты: **Closed Tickets**`
    );

  var name = `Tickets`;
  message.guild.createChannel(name, { type: "category" });

  var name = `Closed Tickets`;
  message.guild.createChannel(name, { type: "category" }).then(chan2 => {
    chan2.overwritePermissions(message.guild.roles.find("name", "@everyone"), {
      SEND_MESSAGES: false
    });
  });

  message.channel.send(categorycreate);

  var name = `ticket-logs`;
  message.guild.createChannel(name, { type: "text" }).then(chan => {
    chan.overwritePermissions(message.guild.roles.find("name", "@everyone"), {
      VIEW_CHANNEL: false
    });
    chan.overwritePermissions(
      message.guild.roles.find("name", "Тех.Поддержка"),
      {
        VIEW_CHANNEL: true
      }
    );
    let category = message.guild.channels.find(
      c => c.name == "Tickets" && c.type == "category"
    );

    chan.setParent(category.id);
    chan.setTopic("Лог канал");
  });
};
module.exports.help = {
  name: "setup",
  aliases: ["su"]
};
