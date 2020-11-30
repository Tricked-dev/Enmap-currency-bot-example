
 const Discord = require("discord.js");
 const Enmap = require("enmap");
 const { MessageEmbed } = require('discord.js'); 
 const ms = require("parse-ms");
 module.exports = {
  cooldown: '2s',
  category: 'Points',
  aliases: [''],
  minArgs: 0,
  maxArgs: -1,
  syntaxError: "",
  expectedArgs: "", 
  description: 'Shows the leaderboard of Points', 
  callback: async (message, args, text, client) => {
  let timeout = 86400000 // 24 hours in milliseconds, change if you'd like.
  let amounts = 500
    const target = message.author


    let daily = await client.userProfiles.get(target.id, 'daily');
    console.log(daily)
    if (daily !== null && timeout - (Date.now() - daily) > 0) {
        let time = ms(timeout - (Date.now() - daily));
        const Embed = new Discord.MessageEmbed() // talking
        .setTitle('points!')
        .setDescription(`You already collected ur daily reward\n\nyou can come back and collect it in **${time.hours}h ${time.minutes}m ${time.seconds}s**!`) 
        .setColor('#FF0000')
        message.reply(Embed);
        return
    } else { 
      /*
        let bank = await db.fetch(`points_${message.author.id}`)
        let banker = (bank* 0.02)
        let amounter = (banker + amounts)
        let amount = amounter.toFixed(0)
      */
      /*
        message.reply(points + " points")
        let amounts = Number(points*0.02).toFixed(0)
        let amount = number(amounts)
        message.reply(amount + ' amount')
        let amounter = Number(amount + 500)
        message.reply(amounter+ ' amounter')
        let bank = Number(amounter + points)
        message.reply(bank + ' bank')
      */


        
        point = await client.userProfiles.get(target.id, 'points');
        let points = parseInt(point)
        let banker = parseInt(points* 0.02)
        let amounter = parseInt(banker + amounts)
        let amount = amounter
        let banks = parseInt(amount + points)
        
   
    client.userProfiles.set(target.id, Date.now(), 'daily');
    client.userProfiles.set(target.id, banks,'points');
    let embed = new Discord.MessageEmbed()
    .setAuthor(`Daily`, message.author.displayAvatarURL)
    .setColor("GREEN")
    .setDescription(`**Daily Reward**`)
    .addField(`Collected`, amount + '\n\n(500 + 2% intrest)')
    message.channel.send(embed)

  }

}
}
