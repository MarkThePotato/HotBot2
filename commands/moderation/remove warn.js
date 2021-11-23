const warndb = require('../../models/warns data base')
const client = require('../../index')
const prefix = client.config.prefix

module.exports = {
    name: 'delwarn',
    aliases: ['dw'],
    description: ['delete one warn for the user'],
    UserPerms: ['MANAGE_MESSAGES'],
    Usage: [`${prefix}delwarn (the number of the warn)`],
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {Stright[]} args
     */
     run: async (client, message, args, Discord) => {
        
        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase())
        if (!user) return message.reply('Could not find the user')
        warndb.findOne({
            guild: message.guild.id, 
            user: user.user.id
        }, async (err, data) => {
            if (err) throw err;
            if (data) {
                let number = parseInt(args[1]) - 1
                if (isNaN(number)) return message.channel.send("Please select the number of the warn to remove it")
                data.content.splice(number, 1)
                message.reply('Removed the warning').then(console.log(`${message.author.username} has removed a warning for ${user.user.username}`))
                data.save()
            } else {
                message.channel.send('This user does not have any warnings to remove yet')
            }
        }) 

    }
}