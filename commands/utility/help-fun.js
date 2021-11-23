const { Client, Message, MessageEmbed } = require('discord.js');
const prefix = require('../../config.json')

module.exports = {
    name: 'help_fun',
    aliases: 'hf',
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
            .setDescription('This is list of fun commands. if you want to see more details about a command. Do .help (the name of the command)\n for exmple : .help memz')
            .addFields([
                {
                    name: "set-chatbot",
                    value: "sets a chat bot with specifying the channel you want to make the bot chat bot in",
                    inline : true
                },
                {
                    name: "memz",
                    value: "genrates a random meme every 5s",
                    inline : true
                },
            ])
            .setFooter(`requested by ${message.author.tag}`)

            message.channel.send({embeds : [helpEmbed]})
    },
};
