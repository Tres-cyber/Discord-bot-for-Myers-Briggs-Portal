const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, token } = require('./config.json');

const commands = [
	new SlashCommandBuilder().setName('menu').setDescription('It will show the menu!'),
    new SlashCommandBuilder().setName('personality').setDescription('It will show all the personality!'),
	new SlashCommandBuilder().setName('facts').setDescription('It will show facts!'),
	new SlashCommandBuilder().setName('command').setDescription('It will show all the commands'),
]
	.map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);