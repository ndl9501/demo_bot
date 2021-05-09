module.exports = {
    name: 'sv',
    category : 'server',
    aliases : ['sv', 'server'],
    run : (client, message , args)=>{
        // full server 
        // client.guilds.cache.forEach((guild) => {
        //     message.channel.send(`server name : ${guild.name}\ntotal members: ${guild.memberCount}`);
        // });
        
        message.channel.send(`
            server name : ${message.guild.name}\ntotal members : ${message.guild.memberCount}
        `)
    }
}