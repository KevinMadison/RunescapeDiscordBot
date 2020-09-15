const Discord = require('discord.js');
const emojiCharacters = require('../images/emojiCharacters.js');

module.exports = {
    name: 'create',
    description: "Create a pvm event.",
    execute(message, args){
		switch(args[0]){
			case "rots":
				// const creatingUser = message.author;
				// message.channel.send(`Rise of the Six event created by ${creatingUser}: `);
				const msgCard = message.channel.send(createRotsMessage(message,args)).then(e =>{
					let numberOfRoles = 4;
					for(let x = 1; x<numberOfRoles+1; x++)
						e.react(emojiCharacters[x]);
				});
				break;
			case "aod":
				message.channel.send(createAodMessage(message,args)).then(e =>{
					let numberOfRoles = 8;
					for(let x = 1; x<numberOfRoles+1; x++)
						e.react(emojiCharacters[x]);
				});
				break;
			default:
				message.channel.send("Invalid command use -help for a list of commands");
		}
    }
}

function createRotsMessage(message, args){
    const creatingUser = message.member.displayName;
    const gameTime = args[1];
    const smashBossBrosLogo = "https://media.discordapp.net/attachments/750188097781628981/750190094337704098/greazy.gif";
    const rotsLogo = "https://cdn.discordapp.com/attachments/755170306016149525/755170340610506752/Karil_the_Tainted_28Shadow29.png";

    const eventCard = new Discord.MessageEmbed()
	.setColor('#ff0000')
	.setTitle(`Rise of the Six Event`)
	.setAuthor(`Host: ${creatingUser}`, smashBossBrosLogo)
	.setDescription(`@ ${gameTime} GMT (Game Time)`)
	.setThumbnail(rotsLogo)
	.addFields(
		{ name: 'Notify: ', value: '<@&755175850722459798>'},
		{ name: emojiCharacters[1]+' West Incite', value: '<Empty>', inline: true },
		{ name: emojiCharacters[2]+' West DPS', value: '<Empty>', inline: true },
		{ name: emojiCharacters[3]+' East Incite', value: '<Empty>', inline: true },
		{ name: emojiCharacters[4]+' East DPS', value: '<Empty>', inline: true },
	)
	.setTimestamp()
    .setFooter('Smash Boss Bros', smashBossBrosLogo);
    return eventCard;
};

function createAodMessage(message, args){
	const creatingUser = message.member.displayName;
    const gameTime = args[1];
    const man = args[2];
    const lootSplit = args[3];
    const smashBossBrosLogo = "https://media.discordapp.net/attachments/750188097781628981/750190094337704098/greazy.gif";
    const aodLogo = "https://cdn.discordapp.com/attachments/755170306016149525/755176674190163998/Nex_28Angel_of_Death29.png";

    const eventCard = new Discord.MessageEmbed()
	.setColor('#ff0000')
	.setTitle(`${man} man Nex: AoD Event <${lootSplit}>`)
	.setAuthor(`Host: ${creatingUser}`, smashBossBrosLogo)
	.setDescription(`@ ${gameTime} GMT (Game Time)`)
	.setThumbnail(aodLogo)
	.addFields(
		{ name: 'Notify: ', value: '<@&755175850722459798>'},
		{ name: emojiCharacters[1]+' Base', value: '<Empty>', inline: true },
		{ name: emojiCharacters[2]+' Chin', value: '<Empty>', inline: true },
		{ name: emojiCharacters[3]+' Hammer', value: '<Empty>', inline: true },
		{ name: emojiCharacters[4]+' Umbra', value: '<Empty>', inline: true },
		{ name: emojiCharacters[5]+' Glacies', value: '<Empty>', inline: true },
		{ name: emojiCharacters[6]+' Fumus', value: '<Empty>', inline: true },
		{ name: emojiCharacters[7]+' Cruor', value: '<Empty>', inline: true },
		{ name: emojiCharacters[8]+' Leech', value: '<Empty>', inline: true },
	)
	.setTimestamp()
    .setFooter('Smash Boss Bros', smashBossBrosLogo);
    
    return eventCard;
};