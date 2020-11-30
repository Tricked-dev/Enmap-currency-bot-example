const Discord = require('discord.js');
const client = new Discord.Client();
const Enmap = require("enmap");

module.exports = (client, prefix, message, command) => {
 client.on("message", message => {
client.userProfiles.ensure(message.author.id, {
    id: message.author.id,
    iq: 0,
    commands: 0,
    points: 0,
    claim: 0,
    started: 0,
    daily: 0,
    temp: 0,
    gamble: 0,
    items: [],
    hourly: 0,
    monthly: 0,
    quests: '',
    rob: 0,
    work: 0,
    totalActions: 0,
    warnings: [],
    kicks: []
 })}
 )
}
