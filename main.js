const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = "-";

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log("SmashBossBrosBot online.");
});

client.on('message', message =>{
    //break code if no prefix or if the bot is calling this message
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    // client.commands.get(command).execute(message, args);
    // if(command === 'ping'){
    //     client.commands.get('ping').execute(message, args);
    // }

    try {
        client.commands.get(command).execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('there was an error trying to execute that command!');
    }
});

// has to be the last line of this file.
client.login('NzU1MTI3Mjc1ODI1MDA0NTQ2.X1-xFA.m4ydCaPOPyxNqWpm3GwselmvKjs');