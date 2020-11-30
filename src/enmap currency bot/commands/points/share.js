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
  description: '', 
  callback: async (message, args, text, client) => {
    message.reply('current disabled due a exploit')
    return
    let user = message.mentions.members.first()  // looking whos the lucky person
    let member = message.mentions.members.first()  // looking whos the lucky person
    let mamber = message.author
    let target = message.author
    let balER =  client.userProfiles.get(member.id, 'points'); 
    let bal = Number(balER)
    if(`${mamber.id}` === `${user.id}`) {
        const Embed = new Discord.MessageEmbed() // talking
        .setTitle('points!')
        .setDescription(`**Sharing with yourself smh**`) 
        .setColor('BLUE')
        message.reply(Embed);
        return
    }
    if(!user) { // what happens if theres noone mentioned
   const Embed = new Discord.MessageEmbed() // talking
    .setColor('#03fc49')
        .setTitle('points!')
        .setDescription(`**This is not a user!**`) 
        .setColor('BLUE')
        message.reply(Embed);
        return
}
let amounter = args[1] // coin amount
let amount = Number(amounter)
if (amount < 99 ){ // checking if the bank doesng go below 0
    const Embed = new Discord.MessageEmbed()
    .setColor('#03fc49')
        .setTitle('points!')
        .setDescription(`**Cant share less than 100points for reasons**`)
        .setColor('BLUE')
        message.reply(Embed);
        return } 

if (isNaN(`${amount}`)) { // checking if its a amount of points
    const Embed = new Discord.MessageEmbed()
    .setColor('#03fc49')
        .setTitle('points!')
        .setDescription(`**Thats not a number!**`)
        .setColor('BLUE')
        message.reply(Embed);
        return
  }

let bank = await client.userProfiles.get(target.id,'points');  // opening bank
let check = (bank - amount) // comparing the numbers

 if (check < 0){ // checking if the bank doesng go below 0
    const Embed = new Discord.MessageEmbed()
    .setColor('#03fc49')
        .setTitle('points!')
        .setDescription(`**You can not give more points than you have, you only have ${bank} points.**`)
        .setColor('BLUE')
        message.reply(Embed);
        return }
client.userProfiles.set(user.id, bal + amount, 'points');
client.userProfiles.set(target.id, bal - amount, 'points');
let news = await client.userProfiles.get(user.id, 'points');
const Embed = new Discord.MessageEmbed()
        .setColor('#03fc49')
        .setTitle('points!')
        .setDescription(`**You gave ${user} ${amount} points and they now have ${news} points**`)
        .setColor('BLUE')
        message.reply(Embed);
        if (980 < amount) {
       let quest =  client.userProfiles.get(member.id, 'quest'); 
    if(quest == 'share'){
       client.userProfiles.set(member.id, 1, 'quest');
    } 
  }
  return 
  }
    
    }
      
