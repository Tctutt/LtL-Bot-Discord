const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('Test')
        .setDescription('Test'),
    async execute(interaction) {
        await interaction.reply('This worked!');
    },
}; 