const { Client, Message, MessageEmbed } = require('discord.js');
const prefix = require('../../config.json')

module.exports = {
    name: 'help_delwarn',
    aliases: 'hdelwarn',
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
            .setTitle('**delwarn command**')
            .setDescription('details')
            .addFields([
                {
                    name: "Name",
                    value: "delwarn",
                    inline : true
                },
                {
                    name: "Aliases",
                    value: "dw",
                    inline : true
                },
                {
                    name: "Description",
                    value: "A command that deletes one warning for the member",
                    inline : true
                },
                {
                    name: "User perms",
                    value: "MANAGE_MESSAGES",
                    inline : true
                },
                {
                    name: "Usage",
                    value: '.delwarn/dw (the user mention) (the number of the warn)',
                    inline : true
                },
            ])
            .setFooter(`requested by ${message.author.tag}`)

            message.channel.send({embeds : [helpEmbed]})
    },
};