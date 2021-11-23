const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'unmute',
    aliases: ['um'], 
    description: 'A command that unmutes a muted memer',
    UserPerms: 'MUTE_MEMBERS',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args, Discord) => {
        
        const member = message.mentions.members.first();
        let target = message.guild.members.cache.get(member.id)
        const role = message.guild.roles.cache.find(role => role.name === 'Muted')

        if(!member) return message.reply('please select a vaild user to mute')
        if(member.roles.highest.position >= message.member.roles.highest.position) return message.reply('You cannot ban someone that is higher than you')
        if(member.id === message.author.id) return message.reply('why are you trying to mute yourself?');
        if(client.id) return message.reply('BRUH');
        if(!role) return message.reply('this user is not muted')

        target.roles.remove(role.id);
        message.reply(`Successfuly unmuted ${member.user.username}`).then(console.log(`${message.author.username} has unmuted ${member.user.username}`))


    } 
}