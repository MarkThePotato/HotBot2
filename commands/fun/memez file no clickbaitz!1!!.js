const {
    Client,
    Message,
    MessageEmbed
} = require('discord.js');
const Schema = require('../../models/Memezfile no clickbaitz!1!!')

module.exports = {
    name: 'memz',
    UserPerms: ['ADMINISTRATOR'],
    Usage: ['.memz (spicefy a channel)'],
    /**
     * 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String} args 
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
            message.channel.send('Successfuly made this channel memes channel. NOTE: the memes will be sent evert 0.5s from now. Please contact the developer to change the time if you thing this is not ok').then(console.log(`${message.author.username} has made a memes channel!`))
        })
    }
}