const { Client, Message, MessageEmbed } = require('discord.js');
const prefix = require('../../config.json')

module.exports = {
    name: 'help_mute',
    aliases: 'hmute',
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
            .setTitle('**Mute command**')
            .setDescription('details')
            .addFields([
                {
                    name: "Name",
                    value: "mute",
                    inline : true
                },
                {
                    name: "Aliases",
                    value: "m",
                    inline : true
                },
                {
                    name: "Description",
                    value: "A command that mutes a member tempoary from the discord server",
                    inline : true
                },
                {
                    name: "User perms",
                    value: "MUTE_MEMBERS",
                    inline : true
                },
                {
                    name: "Usage",
                    value: `.mute/m (the user mention) (the timer of the mute) (the reason)`,
                    inline : true
                },
            ])
            .setFooter(`requested by ${message.author.tag}`)

            message.channel.send({embeds : [helpEmbed]})
    },
};