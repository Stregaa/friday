const { SlashCommandBuilder } = require('@discordjs/builders');
const os = require("os")

// Gets the day of the week
const d = new Date()
let day = d.getDay()

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
        } else if  (day == 3) {
            await interaction.reply(`It's Wednesday..${os.EOL}https://imgur.com/a/3rX16Ff`)
        } else {
            await interaction.reply("It's not Friday..")
        }
    }
}