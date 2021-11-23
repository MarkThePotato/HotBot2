const {
    Client,
    Message,
    MessageEmbed
} = require('discord.js');
const client = require('../../index')
const prefix = client.config.prefix

module.exports = {
    name: 'purge',
    aliases: ['p'],
    description: ['purge couple of messages at time'],
    UserPerms: ['MANAGE_MESSAGES'],
    Usage: [`${prefix}purge/clear (numbers of the messages to delete.) must not be more then 100`],
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args, Discord) => {
        try {
            let delamount = args[0];
            if (isNaN(delamount) || parseInt(delamount <= 0)) return message.reply('Error:')

            if (parseInt(delamount) > 100) return message.reply('sorry. but the maxiume messages i can purge cant be 100 or above.')

            await message.channel.bulkDelete(parseInt(delamount) + 1, true);

            await message.channel.send(`successfuly purged the messages\n purged by ${message.author.username}`).then(m => {
                setTimeout(() => {
                    m.delete()
                }, 5000).then(console.log(`${message.author.username} has purged messages in ${message.channel}`)) // 5 seconds
            })
        } catch (e) {
            console.log(e)
        } //lets try it
    }
}