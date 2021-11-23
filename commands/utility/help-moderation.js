const { Client, Message, MessageEmbed } = require('discord.js');
const prefix = require('../../config.json')

module.exports = {
    name: 'help_moderation',
    aliases: 'hm',
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
            .setDescription('This is a list of moderation commands, if you want more details about a command. Do .help (the command)\n for exmple : .help_purge')
            .addFields([
                {
                    name: "ban",
                    value: "ban a person permently from the server",
                    inline : true
                },
                {
                    name: "kick",
                    value: "kicks the person out the server",
                    inline : true
                },
                {
                    name: "purge",
                    value: "deletes more then 5 messages at one time",
                    inline : true
                },
                {
                    name: "warn",
                    value: "logs a warning for the member",
                    inline : true
                },
                {
                    name: "delwarn",
                    value: "deletes one warnings from the user",
                    inline : true
                },
                {
                    name: "cl-warns",
                    value: "clear all the user warnings",
                    inline : true
                },
                {
                    name: "mute",
                    value: "mutes a member tempoary in the server",
                    inline : true
                },
                {
                    name: "unmute",
                    value: "unmutes a muted member",
                    inline : true
                },
                {
                    name: "ticketing",
                    value: "creates a ticket-panel",
                    inline : true
                },
                {
                    name: "warnings",
                    value: "shows the member`s warnings",
                    inline : true
                    
                },
            ])
            .setFooter(`requested by ${message.author.tag}`)

            message.channel.send({embeds : [helpEmbed]})
    },
};
