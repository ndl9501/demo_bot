const { MessageAttachment } = require('discord.js');


module.exports = {
    name: 'rip',
    category: 'gif',
    aliases : ['rip'],
    run : (client, message, args)=>{
        if(message.deletable) message.delete();
            const attachment = new MessageAttachment(`https://media.giphy.com/media/KEkOcB5DJ4E4bhou9T/giphy.gif`);  
            message.channel.send(attachment);
    }
}