const {
    MessageActionRow,
    MessageButton
} = require('discord.js');
const {MessageEmbed} = require('discord.js')
const client = require('../index')

client.on("interactionCreate", async (interaction) => {

    await interaction.deferUpdate();
    if (interaction.isButton()) {
        if (interaction.customId === 'tic') {

            const thread = await interaction.channel.threads.create({
                name: `${interaction.user.tag}`,
                autoArchiveDuration: 1440,
                //type: 'private_thread',
            });
            await thread.setLocked(true)
            const embed = new MessageEmbed()
                .setTitle('Ticket')
                .setDescription('Please do not ping more then 2 staffs in the ticket, might cause a warn\n this is support ticket not a claim ticket\n Please close this ticket if you think your problem solved\n or there is no need to help anymore')
                .setColor('GREEN')
                .setTimestamp()
                .setAuthor(interaction.guild.name, interaction.guild.iconURL({
                    dynamic: true
                }))

            const del = new MessageActionRow()
                .addComponents(
                    new MessageButton() 
                    .setCustomId('del')
                    .setLabel('🗑️ Delete Ticket!')
                    .setStyle('DANGER'),
                );
            interaction.user.send('Ticket has been opend as a thread');
            thread.send({
                content: `Welcome <@${interaction.user.id}> Please ping on of our "Ticket Mangers" to get in touch of them to help `,
                embeds: [embed],
                components: [del]
            }).then(interaction.followUp({
                content: 'Ticket has been created, please read the ticket embed before doing anything',
                ephemeral: true
            }))
            console.log(`Created thread: ${thread.name}`);
            setTimeout(() => {
                interaction.channel.bulkDelete(1)
            }, 5000)
        } else if (interaction.customId === 'del') {

            const thread = interaction.channel
            thread.delete()

        }
    }
})