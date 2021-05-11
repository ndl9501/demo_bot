const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'sv',
    category : 'server',
    aliases : ['sv', 'server'],
    run : (client, message , args)=>{
        // full server 
        // client.guilds.cache.forEach((guild) => {
        //     message.channel.send(`server name : ${guild.name}\ntotal members: ${guild.memberCount}`);
        // });
        const embed = new MessageEmbed()
                        .setColor("RAMDOM")
                        .setAuthor(message.guild.bot)
                        .setTitle(`${message.guild.name}`)
                        .setFooter(now())
        message.channel.send(`
            server name : ${message.guild.name}\ntotal members : ${message.guild.memberCount}
        `)
    }
}