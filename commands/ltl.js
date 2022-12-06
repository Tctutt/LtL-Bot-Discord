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
                    { name: 'Setup', value: 'something here' },
                    { name: 'Default', value: 'something here' },
                    { name: 'Default', value: 'something here' },
                )),
    async execute(interaction) {
        await interaction.reply('Pong!');
    },
};