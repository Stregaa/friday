// Friday Bot

// Imports discord.js
const { Client, Intents } = require("discord.js")

// Sets Bot's gateway intents
const client = new Client({ intents: [
    Intents.FLAGS.GUILDS, 
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_WEBHOOKS
] })

// Imports bot token
const auth = require("./auth.json")
const token = auth.token

// Sets bot command prefix
const prefix = "!"

// List of current commands
const commands = [
    "!day"
]

// Gets the day of the week
const d = new Date()
let day = d.getDay()

// Sends message when bot goes online
client.once("ready", () => {
    console.log("Friday is online.")
})

// Code for when bot is online
client.on("message", message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === "commands") {
        message.channel.send(commands)
    } else if (command === "day") {
        if (day == 5) {
            message.channel.send("It's Friday!")
        } else {
            message.channel.send("It's not Friday..")
        }
    }
})




// Bot going online
client.login(token)
