const { Client, Message, MessageEmbed } = require('discord.js')
const warndb = require('../../models/warns data base')
const client = require('../../index')
const prefix = client.config.prefix

module.exports = {
    name: 'cl-warns',
    aliases: ['cws'],
    description: ['clears all the user warns'],
    UserPerms: ['MANAGE_MESSAGES'],
    Usage: [`${prefix}cl-warns/cws (clears all the member warnings`],
    /**
     * 
     * @param {*} client 
     * @param {*} message 
     * @param {*} args 
     * @returns 
     */
    run: async (client, message, args) => {
        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if (!user) return message.channel.send('Could not find the user')
        warndb.findOne({
            guild: message.guild.id,
            user: user.user.id
        }, async (err, data) => {
            if (err) throw err;
            if (data) {
                await warndb.findOneAndDelete({
                    user: user.user.id,
                    guild: message.guild.id
                })
                message.channel.send(`successfuly cleared all the users warns`).then(console.log(`${message.author.username} has removed all the warnings for ${user.user.username}`))
            } else {
                message.channel.send('This user does not have any warnings yet')
            }
        }) // lets try it :D
    }
}