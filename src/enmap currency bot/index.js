const Discord = require('discord.js'); // requireing djs
const WOKCommands = require('wokcommands'); // command hand;er
const config = require('./config.json'); //setting config
const client = new Discord.Client();; // making a djs client
const Enmap = require("enmap"); // the almighty enmap

client.on('ready', () => { // enabling WOKcommands
	new WOKCommands(client, 'commands', 'features')
		.setMongoPath(config.mongoPath)
		.setSyntaxError('Incorrect syntax! Please use {PREFIX}{COMMAND} {ARGUMENTS}').setCategoryEmoji('Points', '🤑').setCategoryEmoji('Fun', '🎮')
    });


client.userProfiles = new Enmap({ // making the enman check features oin how data is stored
    name: 'userProfiles',
    fetchAll: true,
    autoFetch: true,
    cloneLevel: 'deep'
});
client.login(config.token);
