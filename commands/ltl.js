const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('LtL')
        .setDescription('Main Bot Command'),
    async execute(interaction) {
        await interaction.reply('This command was registered and works.');
    },
};