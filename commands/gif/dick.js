const { MessageAttachment } = require('discord.js');


module.exports = {
    name: 'dick',
    category: 'gif',
    aliases : ['d*ck','dick', 'cac'],
    run : (client, message, args)=>{
        if(message.deletable) message.delete();
            const attachment = new MessageAttachment(`https://media.giphy.com/media/3ohc1cFiKmGa0n8Sis/giphy.gif`);  
            message.channel.send( attachment);
    }
}

