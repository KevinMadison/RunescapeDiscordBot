const Discord = require('discord.js');
const emojiCharacters = require('../images/emojiCharacters.js');

module.exports = {
    name: 'create',
    description: "Create a pvm event.",
    execute(message, args){
        if(args[0] === "rots"){
            // const creatingUser = message.author;
            // message.channel.send(`Rise of the Six event created by ${creatingUser}: `);
            
            message.channel.send(createRotsMessage(message,args));
        }if(args[0] === "aod"){
            const creatingUser = message.author;
            message.channel.send(createAodMessage(message,args, creatingUser));
        }else{
            message.channel.send("Invalid event. \nCurrently supported events are: \n 1. rots <game-time>\n 2. aod <game-time> <# of people> <keeps/split>");
        }
    }
}

function createRotsMessage(message, args){
    const creatingUser = message.author;
    const gameTime = args[1];
    const smashBossBrosLogo = "https://media.discordapp.net/attachments/750188097781628981/750190094337704098/greazy.gif";
    const rotsLogo = "https://cdn.discordapp.com/attachments/755170306016149525/755170340610506752/Karil_the_Tainted_28Shadow29.png";

    const eventCard = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle(`Rise of the Six Event @ ${gameTime} GMT(Game Time)`)
	.setAuthor(`${creatingUser}`, smashBossBrosLogo)
	.setDescription('TODO: add discription')
	.setThumbnail(smashBossBrosLogo)
	.addFields(
		{ name: emojiCharacters[1]+' West Incite', value: '<Empty>', inline: true },
		{ name: emojiCharacters[2]+' West DPS', value: '<Empty>', inline: true },
		{ name: emojiCharacters[3]+' East Incite', value: '<Empty>', inline: true },
		{ name: emojiCharacters[4]+' East DPS', value: '<Empty>', inline: true },
	)
	.setImage(rotsLogo)
	.setTimestamp()
    .setFooter('Smash Boss Bros', smashBossBrosLogo);
    
    return eventCard;
};

function createAodMessage(message, args, creatingUser){
    const gameTime = args[1];
    const man = args[2];
    const lootSplit = args[3];
    const smashBossBrosLogo = "https://media.discordapp.net/attachments/750188097781628981/750190094337704098/greazy.gif";
    const aodLogo = "https://cdn.discordapp.com/attachments/755170306016149525/755176674190163998/Nex_28Angel_of_Death29.png";

    const eventCard = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle(`${man} man Nex: AoD Event @ ${gameTime} GMT(Game Time) <${lootSplit}>`)
	.setAuthor(`${creatingUser}`, smashBossBrosLogo)
	.setDescription('TODO: add discription')
	.setThumbnail(smashBossBrosLogo)
	.addFields(
		{ name: emojiCharacters[1]+' Base', value: '<Empty>', inline: true },
		{ name: emojiCharacters[2]+' Chin', value: '<Empty>', inline: true },
		{ name: emojiCharacters[3]+' Hammer', value: '<Empty>', inline: true },
		{ name: emojiCharacters[4]+' Umbra', value: '<Empty>', inline: true },
		{ name: emojiCharacters[5]+' Glacies', value: '<Empty>', inline: true },
		{ name: emojiCharacters[6]+' Fumus', value: '<Empty>', inline: true },
		{ name: emojiCharacters[7]+' Cruor', value: '<Empty>', inline: true },
		{ name: emojiCharacters[8]+' Leech', value: '<Empty>', inline: true },
	)
	.setImage(aodLogo)
	.setTimestamp()
    .setFooter('Smash Boss Bros', smashBossBrosLogo);
    
    return eventCard;
};