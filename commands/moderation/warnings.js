const { Client, Message, MessageEmbed } = require('discord.js')
const warndb = require('../../models/warns data base')

module.exports = {
    name: 'warnings',
    aliases: ['warns'],
    description: ['show the user warnings (only staff)'],
    UserPerms: ['MANAGE_MESSAGES'],
    Usage: ['.warnings (the user mention/id)'],
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
     run: async (client, message, args, Discord) => {

        const user = message.mentions.members.first() || message.author.id;

        warndb.findOne({
            guild: message.guild.id, 
            user: user.id
        }, async (err, data) => {
            if (err) throw err
            if (data) {
                const e = data.content.map(
                    (w, i) => `\n\`${i + 1}\` - staff: ${message.guild.members.cache.get(w.moderator).user.tag}, The reason: ${w.reason}`
                )
                const embed = new MessageEmbed()
                    .setDescription(e.join(' '))
                message.channel.send({
                    embeds: [embed]
                })
            } else {
                message.channel.send('This user does not have any warnings yet')
            }
        })

    }
}