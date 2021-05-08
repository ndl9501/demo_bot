const { MessageAttachment } = require('discord.js');

module.exports = {
    name: 'allahu',
    category: 'fun',
    aliases : ['allahu', 'boom'],
    run : (client, message, args)=>{
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
            const attachment = new MessageAttachment(`./mp4/allahu.mp4`);
            message.mentions.members.first() || message.guild.members.cache.get(args[0]) ? message.channel.send(` ${member.user} `,  attachment) : message.channel.send(``,  attachment);
        if(message.deletable)
            message.delete();
    }
}