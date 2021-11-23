const { Client, Message, MessageEmbed } = require('discord.js');
const prefix = require('../../config.json')

module.exports = {
    name: 'help_warnings',
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
            .setTitle('**Warnings command**')
            .setDescription('details')
            .addFields([
                {
                    name: "Name",
                    value: "warnings",
                    inline : true
                },
                {
                    name: "Aliases",
                    value: "There is no aliases for this command",
                    inline : true
                },
                {
                    name: "Description",
                    value: "A commmand that show the member warnings",
                    inline : true
                },
                {
                    name: "User perms",
                    value: "MANAGE_MESSAGES",
                    inline : true
                },
                {
                    name: "Usage",
                    value: `.warnings (the user mention)`,
                    inline : true
                },
            ])
            .setFooter(`requested by ${message.author.tag}`)

            message.channel.send({embeds : [helpEmbed]})
    },
};