const { Client, Message, MessageEmbed } = require('discord.js');
const prefix = require('../../config.json')

module.exports = {
    name: 'help_cl-warns',
    aliases: 'hban',
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
            .setTitle('**clear-warns command**')
            .setDescription('details')
            .addFields([
                {
                    name: "Name",
                    value: "cl-warns",
                    inline : true
                },
                {
                    name: "Aliases",
                    value: "cws",
                    inline : true
                },
                {
                    name: "Description",
                    value: "A command that clear all the member warns",
                    inline : true
                },
                {
                    name: "User perms",
                    value: "MANAGE_MESSAGES",
                    inline : true
                },
                {
                    name: "Usage",
                    value: '.cl-warns/cws (the member mention)',
                    inline : true
                },
            ])
            .setFooter(`requested by ${message.author.tag}`)

            message.channel.send({embeds : [helpEmbed]})
    },
};