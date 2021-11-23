const { Client, Message, MessageEmbed } = require('discord.js');
const prefix = require('../../config.json')

module.exports = {
    name: 'help_ban',
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
            .setTitle('**Ban command**')
            .setDescription('details')
            .addFields([
                {
                    name: "Name",
                    value: "ban",
                    inline : true
                },
                {
                    name: "Aliases",
                    value: "b",
                    inline : true
                },
                {
                    name: "Description",
                    value: "A command that bans a member from the discord server",
                    inline : true
                },
                {
                    name: "User perms",
                    value: "BAN_MEMBERS",
                    inline : true
                },
                {
                    name: "Usage",
                    value: '.ban/b (the member mention) (the reason)',
                    inline : true
                },
            ])
            .setFooter(`requested by ${message.author.tag}`)

            message.channel.send({embeds : [helpEmbed]})
    },
};
