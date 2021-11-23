const { Client, Message, MessageEmbed } = require('discord.js');
const prefix = require('../../config.json')

module.exports = {
    name: 'help_unmute',
    aliases: 'hunmute',
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
            .setTitle('**Unmute command**')
            .setDescription('details')
            .addFields([
                {
                    name: "Name",
                    value: "unmute",
                    inline : true
                },
                {
                    name: "Aliases",
                    value: "um",
                    inline : true
                },
                {
                    name: "Description",
                    value: "A command that unmutes a muted member from the discord server",
                    inline : true
                },
                {
                    name: "User perms",
                    value: "MUTE_MEMBERS",
                    inline : true
                },
                {
                    name: "Usage",
                    value: `.unmute/um (the user mention)`,
                    inline : true
                },
            ])
            .setFooter(`requested by ${message.author.tag}`)

            message.channel.send({embeds : [helpEmbed]})
    },
};