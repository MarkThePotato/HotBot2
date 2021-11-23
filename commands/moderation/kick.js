const {
    Client,
    Message,
    MessageEmbed
} = require('discord.js');
const client = require('../../index')
const prefix = client.config.prefix;

module.exports = {
    name: 'kick',
    aliases: 'k',
    UserPerms: ['KICK_MEMBERS'],
    description: ['a command that kick a user, only for staff'],
    Usage: [`${prefix}kick/k (user mention or id)`],
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args, Discord) => {

        const user = message.mentions.members.first();
        const reason = args.slice(1).join(' ');
        const exampleEmbed = new MessageEmbed()
        .setColor('#0099ff')
        .setTitle(`Error`)
        .setDescription(`Please select a vaild user to kick`);

        const reasonEmbed = new MessageEmbed()
        .setColor('#0099ff')
        .setTitle(`Error`)
        .setDescription(`Please specify a reason to kick this member`)

        const bruhEmbed = new MessageEmbed()
        .setColor('#0099ff')
        .setTitle(`lmao....`)
        .setDescription(`Man legitly wanted to kick himself`)

        const nopeEmbed = new MessageEmbed()
        .setColor('#0099ff')
        .setTitle(`no`)
        .setDescription(`I might be a bot. But im not a stupid one`)

        const SuccessEmbed = new MessageEmbed()
        .setColor('#0099ff')
        .setTitle(`Done!`)
        .setDescription(`${user} has been kicked for ${reason} by ${message.author.tag}`)

        if (!user) return message.reply({embeds : [exampleEmbed]});
        if (!reason) return message.channel.send({embeds : [reasonEmbed]});
        if (user.id === message.author.id) return message.reply({embeds : [bruhEmbed]});
        if (!user.id === client.id) return message.reply({embeds : [nopeEmbed]});

        if (user) {

            await user.kick({
                reason: reason,
            }).then(() => {
                message.reply({embeds : [SuccessEmbed]})
                //user.send(`You've been kicked by ${message.author.username} for : ${reason}`).then(console.log(`${message.author.username} has kicked ${user.user.username} for : ${reason}`))
            })

        } else {
            message.channel.send('I could not find the user')
        }

    }
}