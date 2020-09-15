const Discord = require('discord.js');
const emojiCharacters = require('../images/emojiCharacters.js');

module.exports = {
    name: 'help',
    description: "list all the commands",
    execute(message, args){
        message.channel.send(createHelpMessage(message,args));
        message.channel.send(message.author);
    }
}

function createHelpMessage(message, args){
    const creatingUser = message.author;
    const gameTime = args[1];
    const smashBossBrosLogo = "https://media.discordapp.net/attachments/750188097781628981/750190094337704098/greazy.gif";

    const eventCard = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle(`List of Commands`)
	.setAuthor(`${creatingUser}`, smashBossBrosLogo)
	.setDescription('Here are all the supported commands: ')
	.setThumbnail(smashBossBrosLogo)
	.addFields(
		{ name: 'Creating an Event', value: '```-create rots <game-time>```\n ```-create aod <game-time> <# of people> <keeps/split>```'},
		{ name: 'Checking bot health', value: '```-ping```'},
		{ name: 'List all the commands:', value: '```-help```'},
	)
	.setTimestamp()
    .setFooter('Smash Boss Bros', smashBossBrosLogo);
    
    return eventCard;
};