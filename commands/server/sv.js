const { MessageEmbed, Client } = require("discord.js")

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
                        .setAuthor(message.author.user)
                        .setTitle(`${message.guild.name}`)
                        .setImage(message.guild.banner)
                        .setDescription(`${message.guild.memberCount}`)
                        .setTimestamp()
        message.channel.send(embed)
    }
}