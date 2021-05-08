const { MessageAttachment } = require('discord.js');


module.exports = {
    name: 'ricado',
    category: 'gif',
    aliases : ['ricado','rica'],
    run : (client, message, args)=>{
        if(message.deletable) message.delete();
            const attachment = new MessageAttachment(`https://media.giphy.com/media/WoKqL8nGDJfFwGzrmR/giphy.gif`);  
            message.channel.send( attachment);
    }
}

