const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('spongify')
        .setDescription('Spongifies your message')
        .addStringOption(option =>
            option.setName('text')
                .setDescription('The text to spongify')
                .setRequired(true)
        ),
    async execute(interaction) {
        // Get user string
        let userString = interaction.options.getString('text');

        // Make user string all lowercase
        userString = userString.toLowerCase();

        // Loop through the string and make random characters uppercase
        for(let i = 0; i < userString.length; i++) {
            if(getRandomInt(2) === 1)
                userString = userString.substring(0, i) + userString.charAt(i).toUpperCase() + userString.substring(i + 1);
        }

        // Respond to user
        await interaction.reply(userString);
    },
};

function getRandomInt(bound) {
    return Math.floor(Math.random() * bound);
}