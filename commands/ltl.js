const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ltl')
        .setDescription('Test'),
    async execute(interaction) {
        await interaction.reply('This worked!');
    },
}; 