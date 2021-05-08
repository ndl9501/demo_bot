const { MessageAttachment } = require('discord.js');


module.exports = {
    name: 'gay',
    category: 'gif',
    aliases : ['gay','bede'],
    run : (client, message, args)=>{
        if(message.deletable) message.delete();
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        const attachment = new MessageAttachment(`https://media.giphy.com/media/ZcYe7jWTLRzkQ/giphy.gif`);  
        message.mentions.members.first() ? message.channel.send(`${member.user} (¬‿¬)` , attachment ) : message.channel.send(  attachment);
    }
}