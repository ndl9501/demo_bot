const { MessageAttachment } = require('discord.js');


module.exports = {
    name: 'nice',
    category: 'gif',
    aliases : ['nice', 'nt'],
    run : (client, message, args)=>{
        if(message.deletable) message.delete();
            const attachment = new MessageAttachment(`https://media.giphy.com/media/7C7pNe8NIpbFe/giphy.gif`);  
            message.channel.send( attachment);
    }
}

