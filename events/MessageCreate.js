const client = require('../index')

client.on("messageCreate", async (message) => {
    if (message.author.bot || !message.guild) return 
    if (!message.content.startsWith(client.prefix)) return;
    const [cmd, ...args] = message.content
        .slice(client.config.prefix.length)
        .trim()
        .split(" ");
    const Discord = require('discord.js') 
    let command = client.commands.get(cmd)
    

    if (!command) command = client.commands.get(client.aliases.get(cmd)) 
    if (command) {
        
        if (!message.member.permissions.has(command.UserPerms || [])) return message.reply(`sorry, but you don't have \`${command.UserPerms || []}\` permission to use this command..`) 

        
        if (!message.guild.me.permissions.has(command.BotPerms || [])) return message.reply(`Please, give the bot \`${command.BotPerms || []}\` to run this command!`)

        await command.run(client, message, args, Discord) 
    } 
})