const { Client, Message, MessageEmbed } = require('discord.js');
const prefix = require('../../config.json')

module.exports = {
    name: 'help_warn',
    aliases: 'hwarn',
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
            .setTitle('**Warn command**')
            .setDescription('details')
            .addFields([
                {
                    name: "Name",
                    value: "warn",
                    inline : true
                },
                {
                    name: "Aliases",
                    value: "w",
                    inline : true
                },
                {
                    name: "Description",
                    value: "A command that logs a warn for the user",
                    inline : true
                },
                {
                    name: "User perms",
                    value: "MANAGE_MESSAGES",
                    inline : true
                },
                {
                    name: "Usage",
                    value: `.warn/w (the user mention) (the reason)`,
                    inline : true
                },
            ])
            .setFooter(`requested by ${message.author.tag}`)

            message.channel.send({embeds : [helpEmbed]})
    },
};