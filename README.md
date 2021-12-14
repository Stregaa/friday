# Friday: Discord bot

*****
To create your own version of this bot:
1. Create a config.json file in your bot folder
2. Create a bot on Discord website
3. Generate bot's token from Discord site
4. Add the following to config.json: { "token": "", "clientId": "", "guildId": "" }, replacing empty quotations with your own generated token/the appropriate parameters

*****
To run the bot as is:
1. Run [npm install] in your terminal
2. Run [node index.js] in your terminal

*****
To add new commands:
1. Create new .js file inside commands folder
2. Run [node deploy-commands.js] to register the new command