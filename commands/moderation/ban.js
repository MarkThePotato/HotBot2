const {
    Client,
    Message,
    MessageEmbed
} = require('discord.js');
const client = require('../../index')
const prefix = client.config.prefix;

module.exports = {
    name: 'ban',
    aliases: 'b',
    UserPerms: ['BAN_MEMBERS'],
    description: 'a command to ban a user',
    Usage: [`${prefix}ban/b (user id or mention)`],
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args, Discord) => {

        const member = message.mentions.members.first();
        const reason = args.slice(1).join(' ');

        if (!member) return message.reply('PLease select a vaild user to ban');
        if (!reason) return message.reply('you cannot ban for no reason');
        if (member.roles.highest.position >= message.member.roles.highest.position) return message.reply('You cannot ban someone that is higher than you')
        if (member.id === message.author.id) return message.reply('why are you trying to mute yourself?');
        if (client.id) return message.reply('BRUH');

        if (member) {

            await member.ban({
                reason: reason,
            }).then(() => {
                message.reply(`${member} has been banned for ${reason} by ${message.author.username}`).then(console.log(`${message.author.username} has banned ${member.user.username} for : ${reason}`))
                
            })

        } else {
            message.channel.send('I could not find the user')
        }

    }
}