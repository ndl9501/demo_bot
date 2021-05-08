const { MessageAttachment } = require('discord.js');

module.exports = {
    name: 'bonk',
    category: 'fun',
    aliases : ['bonk', 'ponk'],
    run : (client, message, args)=>{
        if(message.deletable)
            message.delete();
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
        const attachment = new MessageAttachment(`./mp4/bonk.mp4`);
        message.mentions.members.first() || message.guild.members.cache.get(args[0]) ? message.channel.send(` ${member.user} `,  attachment) : message.channel.send(``,  attachment);
    }
}