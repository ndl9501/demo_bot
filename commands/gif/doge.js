const { MessageAttachment } = require('discord.js');


module.exports = {
    name: 'doge',
    category: 'gif',
    aliases : ['doge', 'dogedance'],
    run : (client, message, args)=>{
        if(message.deletable) message.delete();
            const attachment = new MessageAttachment(`https://media.giphy.com/media/10ECejNtM1GyRy/giphy.gif`);  
            message.channel.send( attachment);
    }
}

