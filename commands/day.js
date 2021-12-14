// Imports command builder
const { SlashCommandBuilder } = require('@discordjs/builders');

// Gets the day of the week
const d = new Date()
let day = d.getDay()

// Exports command data
module.exports = {
    data: new SlashCommandBuilder()
        .setName("day")
        .setDescription("Replies with day of the week!"),
    async execute(interaction) {
        if (day == 5) {
            await interaction.reply(`It's Friday!${os.EOL}https://www.youtube.com/watch?v=DfEnIFV2-mc`)
        } else if  (day == 6) {
            await interaction.reply(`It's Saturday!${os.EOL}https://www.youtube.com/watch?v=Dxrd2TVjLI0`)
        } else if  (day == 1) {
            await interaction.reply(`It's Monday..${os.EOL}https://www.youtube.com/watch?v=xKbEm67tox4`)
        } else {
            await interaction.reply("It's not Friday..")
        }
    }
}