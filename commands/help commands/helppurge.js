const { Client, Message, MessageEmbed } = require('discord.js');
const prefix = require('../../config.json')

module.exports = {
    name: 'help_purge',
    aliases: 'hpurge',
    description: ['a command that show a list of commands and its usages'],
    usage: ['.help {a catrogie/command} name'],
    /**
     * 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        const helpEmbed = new MessageEmbed()
            .setColor('DARK_GREY')
            .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
            .setTitle('**Purge command**')
            .setDescription('details')
            .addFields([
                {
                    name: "Name",
                    value: "purge",
                    inline : true
                },
                {
                    name: "Aliases",
                    value: "p",
                    inline : true
                },
                {
                    name: "Description",
                    value: "A command that purge 1+ messages at one time",
                    inline : true
                },
                {
                    name: "User perms",
                    value: "MANAGE_MESSAGES",
                    inline : true
                },
                {
                    name: "Usage",
                    value: '.purge/p (the amount of messages)',
                    inline : true
                },
            ])
            .setFooter(`requested by ${message.author.tag}`)

            message.channel.send({embeds : [helpEmbed]})
    },
};