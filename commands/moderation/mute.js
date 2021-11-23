const {
    Client,
    Message,
    MessageEmbed
} = require('discord.js');
const ms = require('ms')
const client = require('../../index')
const prefix = client.config.prefix

module.exports = {
    name: 'mute',
    aliases: ['m'],
    description: 'a command that mutes a user',
    UserPerms: ['MUTE_MEMBERS'],
    Usage: [`${prefix}mute/m [ seconds = s, hours = hr ] [reason]`],
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args, Discord) => {

        const member = message.mentions.members.first();
        let time = args[1];
        const reason = args.slice(2).join(' ');
        const role = message.guild.roles.cache.find(role => role.name === 'Muted')

        if (!member) return message.reply('Please select a vaild user to mute');
        if (!reason) return message.reply('you cannot mute for no reason');
        if (!time) return message.reply('You cannot mute this person forever');
        if (member.id === message.author.id) return message.reply('why are you trying to mute yourself?');
        if (member.id === client.id) return message.reply('i might be just a bot. but im not an idiot ');
        if (!role) {
            try {
                message.channel.send('There is no muted role have been selected in this server\n guess i will make one myself')
                let muterole = await message.guild.roles.create({
                    data: {
                        name: 'Muted2',
                        permissions: [],
                    }
                });
                message.guild.channels.cache.filter(c => c.type === 'text').forEach(async (channel, id) => {
                    await channel.createOverwrite(muterole, {
                        SEND_MESSAGES: false,
                        ADD_REACTIONS: false
                    })
                });
                message.channel.send(
                    new MessageEmbed()
                    .setDescription('Muted role has sucessfully been created')
                    .setColor("GREEN")
                )
            } catch (error) {
                console.log(error)
            }
        };
        let role2 = message.guild.roles.cache.find(role => role.name === 'Muted')
        if (member.roles.cache.has(role2)) return message.reply('User is already muted!')

        if (member.roles.highest.position >= message.member.roles.highest.position) return message.reply('You cannot mute someone that is higher than you')


        await member.roles.add(role2)
        message.channel.send(`${member.user.username} has been muted for ${ms(ms(time))}, Reason: ${reason}`).then(console.log(`${message.author.username} has muted ${member.user.username} till ${ms(ms(time))} for: ${reason}`))

        setTimeout(() => {
            member.roles.remove(role2)
        }, ms(time))

    }



}