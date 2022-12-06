const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ltl')
        .setDescription('The main command for the Bot.')
        .addStringOption(option =>
            option.setName('SubCommand')
                .setDescription('Subcommand for the command')
                .setRequired(true)
                .addChoices(
                    { name: 'setup', value: 'something here' },
                    { name: 'default', value: 'something here' },
                    { name: 'default', value: 'something here' },
                )),
    async execute(interaction) {
        await interaction.reply('Pong!');
    },
};