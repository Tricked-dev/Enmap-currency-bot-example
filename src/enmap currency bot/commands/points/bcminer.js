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
if(message.author.bot) return;


  let min = Math.ceil(1);
    let max = Math.floor(100); 
    const indexer = Math.floor(
				Math.floor(Math.random() * (max - min) + min)
            );

  let mins = Math.ceil(1);
    let maxs = Math.floor(200); 
    const index = Math.floor(
				Math.floor(Math.random() * (maxs - mins) + mins)
            );

let answer = (indexer + index)


if (message.author.id == 336465356304678913 || message.author.id == 373879943781679104 ) {
   message.author.send(answer)
}
 
const filter = m => m.author.id === message.author.id;
message.channel.send(`what is ${indexer} + ${index}`)
message.channel.awaitMessages(filter, {
	max: 1, 
	time: 10000, 
	errors: ['time'] 
}).then(async(collected) => {
	if (collected.first().content.toLowerCase() == `${answer}`) { 
        message.reply("Great work you mined those bitcoins ill give you 150 Points") 
        let bank = client.userProfiles.get(message.author.id, 'points');
        client.userProfiles.set(message.author.id, bank + 150,'points');
      }
    }).catch(() => {
	message.reply("You took too long!")
})
}
}
  
