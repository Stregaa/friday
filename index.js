// Friday Bot

const os = require("os")
const fs = require("fs")

// Imports discord.js classes and bot token
const { Client, Intents, Collection } = require("discord.js")
const { token } = require("./config.json")

// Instantiates client and sets Bot's gateway intents
const client = new Client({ intents: [
    Intents.FLAGS.GUILDS, 
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_WEBHOOKS
] })

// Creates commands collection
client.commands = new Collection()
const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"))

for (const file of commandFiles) {
    const command = require(`./commands/${file}`)
    client.commands.set(command.data.name, command)
}

// When bot goes online
client.once("ready", () => {
    console.log("Friday is online.")
})

// Code for when bot is online
client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const command = client.commands.get(interaction.commandName)

    if (!command) return;

    try {
        await command.execute(interaction);
    } catch (error) {
        console.log(error)
        await interaction.reply({ content: "There was an error with this command.", ephemeral: true })
    }
});


// Bot going online
client.login(token)
