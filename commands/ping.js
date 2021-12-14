// Basic structure for new command

// Imports command builder
const { SlashCommandBuilder } = require('@discordjs/builders');

// Exports command data
module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		await interaction.reply('Pong!');
	},
};
