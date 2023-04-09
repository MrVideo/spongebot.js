const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Returns the list of available commands'),
    async execute(interaction) {
        // Embed declaration
        const helpEmbed = {
            title: 'Commands list',
            description: "You can use commands by typing '/' and the command you want to use.",
            thumbnail: {
                url: 'https://i.ibb.co/hVXnBCs/helpicon.png'
            },
            fields: [
                {
                    name: 'Help menu',
                    value: '`/help`'
                },
                {
                    name: 'Spongify text',
                    value: '`/spongify <text>`'
                }
            ]
        }

        // Respond to user
        await interaction.reply({ embeds: [helpEmbed] });
    },
};