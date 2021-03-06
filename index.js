require('dotenv').config();
const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();

fs.readdir('./events/', (err, files) => {   // Legge i files nella folder
    files.forEach(file => {
        const eventHandler = require(`./events/${file}`);
        const eventName = file.split('.')[0];
        client.on(eventName, (...args) => eventHandler(client, ...args));
    });
});

client.login(process.env.BOT_TOKEN);    // Token Bot

// Main guide:
// https://thomlom.dev/create-a-discord-bot-under-15-minutes/
// Discord events:
// https://discord.js.org/#/docs/main/stable/class/Client
