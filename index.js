const { Client, Intents, Message } = require('discord.js');
const { token } = require('./config.json');
const { MessageActionRow, MessageButton, MessageEmbed, MessageSelectMenu } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;
  
  if (interaction.commandName === 'personality') {

	const embed = new MessageEmbed()
	.setColor('#FFA500')
	.setTitle('Welcome to Personality tab!')
	.setAuthor({ name: 'Personality Tab', iconURL: 'https://media.giphy.com/media/Q19c27PjLbLq0aITzD/giphy.gif',})
	.setDescription('This tab consists of 16 personalities that provide insight into how a person makes decisions, interacts with other people, and processes information. Below this tab, you will choose the personality that you have acquired.')
	.setThumbnail('https://media.giphy.com/media/yqL2quQHCpnPRclr8s/giphy.gif')

	
	
		const frow = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setLabel('ISTJ')
					.setStyle('LINK')
          .setURL('https://discord.com/channels/977375734530183280/977378525487202304'),

				new MessageButton()
					.setLabel('ISTP')
					.setStyle('LINK')
          .setURL('https://discord.com/channels/977375734530183280/977378663257501736'),

		  new MessageButton()
					.setLabel('ISFJ')
					.setStyle('LINK')
          .setURL('https://discord.com/channels/977375734530183280/977378768438038599'),

		  new MessageButton()
					.setLabel('ISFP')
					.setStyle('LINK')
          .setURL('https://discord.com/channels/977375734530183280/977378873241120768'),

		  new MessageButton()
					.setLabel('INFJ')
					.setStyle('LINK')
          .setURL('https://discord.com/channels/977375734530183280/977378986420224050')
			);
		
			const srow = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setLabel('INFP')
					.setStyle('LINK')
          .setURL('https://discord.com/channels/977375734530183280/977379092280274995'),

				new MessageButton()
					.setLabel('INTJ')
					.setStyle('LINK')
          .setURL('https://discord.com/channels/977375734530183280/977379205874589756'),

		  new MessageButton()
					.setLabel('INTP')
					.setStyle('LINK')
          .setURL('https://discord.com/channels/977375734530183280/977379296924549180'),

		  new MessageButton()
					.setLabel('ESTP')
					.setStyle('LINK')
          .setURL('https://discord.com/channels/977375734530183280/977376178535018566'),

		  new MessageButton()
					.setLabel('ESTJ')
					.setStyle('LINK')
          .setURL('https://discord.com/channels/977375734530183280/977376211091198013')
			);
		
			const trow = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setLabel('ESFP')
					.setStyle('LINK')
          .setURL('https://discord.com/channels/977375734530183280/977376328137449542'),

				new MessageButton()
					.setLabel('ESFJ')
					.setStyle('LINK')
          .setURL('https://discord.com/channels/977375734530183280/977376352523141170'),

		  new MessageButton()
					.setLabel('ENFP')
					.setStyle('LINK')
          .setURL('https://discord.com/channels/977375734530183280/977377868483022858'),

		  new MessageButton()
					.setLabel('ENFJ')
					.setStyle('LINK')
          .setURL('https://discord.com/channels/977375734530183280/977378000360329266'),

		  new MessageButton()
					.setLabel('ENTP')
					.setStyle('LINK')
          .setURL('https://discord.com/channels/977375734530183280/977378113308725329')
			);
        
			const forow = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setLabel('ENTJ')
					.setStyle('LINK')
          .setURL('https://discord.com/channels/977375734530183280/977378227905507339')
			);

		

		await interaction.reply({ content: ' ', embeds: [embed], components: [frow, srow, trow, forow] });
	}

	if(interaction.commandName === 'command'){
		const exampleEmbed = new MessageEmbed()
	.setColor('#FFA500')
	.setTitle('Welcome to Command Tab')
	.setAuthor({ name: 'Command Tab', iconURL: 'https://media.giphy.com/media/Q19c27PjLbLq0aITzD/giphy.gif' })
	.setDescription(

		"Here's the commands:"
		)
	.addFields(
		{ name: '\b  /personality', value: 'It will show all the personalities.' },
		{ name: '\b /command', value: 'It will show all the command.' },
	)
	.setImage('https://media.giphy.com/media/Q19c27PjLbLq0aITzD/giphy.gif')
	.setTimestamp()

	await interaction.reply({ content: ' ', embeds: [exampleEmbed]});
	}


});


client.login(token);