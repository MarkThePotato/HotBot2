const { Client, Message, MessageEmbed } = require('discord.js');
const prefix = require('../../config.json')

module.exports = {
    name: 'help_kick',
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
            .setTitle('**kick command**')
            .setDescription('details')
            .addFields([
                {
                    name: "Name",
                    value: "kick",
                    inline : true
                },
                {
                    name: "Aliases",
                    value: "k",
                    inline : true
                },
                {
                    name: "Description",
                    value: "A command that kicks a member from the discord server",
                    inline : true
                },
                {
                    name: "User perms",
                    value: "KICK_MEMBERS",
                    inline : true
                },
                {
                    name: "Usage",
                    value: `.kick/k (the user mention) (the reason)`,
                    inline : true
                },
            ])
            .setFooter(`requested by ${message.author.tag}`)

            message.channel.send({embeds : [helpEmbed]})
    },
};