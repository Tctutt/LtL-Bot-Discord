// Main discord bot file.
// Requirements and Variables
require('dotenv').config();
const fs = require('node:fs');
const path = require('node:path');
const keepAlive = require(`./server`);
const { Client, Collection, Events, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, 32767] });

//New Commands Collection
client.commands = new Collection();

// Defined Commands Location
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

// Registering the Commands with Discord
for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    client.commands.set(command.data.name, command);
}


/*const cmds = [{
    name: `ping`, // Command name
    description: `Ping!`, // Command description
    async execute(interaction) { // Execute function
        await interaction.reply({
            content: `Pong.`
        });
    }
}]
*/

// Interaction Create Event
/*client.on('interactionCreate', async interaction => {
    if (interaction.isCommand()) {
        await cmds.forEach(async command => {
            if (interaction.commandName == command.name) {
                try {
                    await command.execute(interaction);
                } catch (error) {
                    console.error(error);
                }
            }
        });
    }
});
*/

// Ready Event
client.on('ready', async () => {
    console.log(`The Bot is now online successfully!`);
    await client.guilds.cache
        .get(process.env['serverId'])
});

client.on(Events.InteractionCreate, async interaction => {
    if (!interaction.isChatInputCommand()) return;

    const command = client.commands.get(interaction.commandName);

    if (!command) return;

    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
    }
});

// Bot Login
client.login(process.env['token']);
keepAlive();