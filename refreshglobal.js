const { SlashCommandBuilder } = require('discord.js');
const fs = require('fs');
const deploycmd = require(`./deploy-commandglobal.js`);

module.exports = {
    data: new SlashCommandBuilder()
        .setName('refreshlocal')
        .setDescription('Refresh the Commands on this server.'),
    async execute(interaction) {
        deploycmd();
        await interaction.reply('Done');
    },
};