const {
    Client,
    Message,
    MessageEmbed
} = require('discord.js');
const Schema = require('../../models/chatbot')
const client = require('../../index');
const prefix = client.config.prefix


module.exports = {
    name: 'set-chatbot',
    aliases: ['SCB'],
    UserPerms: ['ADMINISTRATOR'],
    description: ['command used by admins to set a chat-bot!'],
    Usage: [`.set-chatbot {spicefy a channel}`],
    /**
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args, Discord) => {
        const channell = message.mentions.channels.first()
        if (!channell) return message.reply('Please specify a channel!');

        Schema.findOne({
            guild: message.guild.id
        }, async (err, data) => {
            if (data) data.delete()
            new Schema({
                guild: message.guild.id,
                channel: channell.id,
            }).save();
            message.channel.send('Successfuly made this channel chat bot channel').then(console.log(`${message.author.username} has made a chat bot`))
        })
    }
}