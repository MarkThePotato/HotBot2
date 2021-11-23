const { Client, Message, MessageEmbed } = require('discord.js');
const prefix = require('../../config.json')

module.exports = {
    name: 'help',
    aliases: 'h',
    description: ['a command that show a list of commands and its usages'],
    usage: ['.help {a catrogie/command} name'],
    /**
     * 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        let helpEmbed = new MessageEmbed()
            .setColor('DARK_GREY')
            .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
            .setTitle('Help menu')
            .setDescription('Please select a catgorie by doing .help(the catgorie you want help with)\nexmple: (.help_moderation')
            .addFields([
                {
                    name: "🧢MODERATION",
                    value: ".help moderation",
                    inline : true
                },
                {
                    name: "🛠utility",
                    value: "There is no utility commands yet",
                    inline : true
                },
                {
                    name: "🎮fun",
                    value: ".help fun",
                    inline : true
                },
            ])
            .setFooter(`requested by ${message.author.tag}`)

            message.channel.send({embeds : [helpEmbed]})
    },
};
