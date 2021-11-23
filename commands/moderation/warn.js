const {
    Client,
    Message,
    MessageEmbed
} = require('discord.js');
const warndb = require('../../models/warns data base');

module.exports = {
    name: 'warn',
    aliases: ['w'],
    description: ['warns the user (only for staff'],
    UserPerms: ['MANAGE_MESSAGES'],
    Usage: ['.warn (the user mention/id) (the reason) you cannot warn without a vaild reason!'],

    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args, Discord) => {

        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0])

        if (!user) return message.reply('please mention a vaild user!')
        const reason = args.slice(1).join(" ")
        if (!reason) return message.reply('you cant warn for no reason!')

        warndb.findOne({
            guild: message.guild.id,
            user: user.user.id
        }, async (err, data) => {
            if (err) throw err;
            if (!data) {
                data = new warndb({
                    guild: message.guild.id,
                    user: user.user.id,
                    content: [{
                        moderator: message.author.id,
                        reason: reason
                    }]
                })
            } else {
                const object = {
                    moderator: message.author.id,
                    reason: reason
                }
                data.content.push(object)
            }
            data.save()

        })

        message.reply(`successfuly logged a warning for the user with reason: ${reason}`).then(console.log(`${message.author.username} have warned ${user.user.username} for ${reason}`))
        user.send(`You have have been warned in astral traders for: ${reason}`)

    }
}