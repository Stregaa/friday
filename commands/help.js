const { SlashCommandBuilder } = require('@discordjs/builders');

const fs = require("fs")

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Displays available commands'),
	async execute(interaction) {
        const commandsArr = []
        const commandFiles = fs.readdirSync(__dirname).filter(file => file.endsWith(".js"))
        commandFiles.forEach(command => {
            slicedCommand = command.slice(0, -3)
            commandsArr.push("\n" + slicedCommand)
            })
            await interaction.reply(`Available commands:\n${commandsArr}`)
        },
};
