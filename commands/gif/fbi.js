const { MessageAttachment } = require('discord.js');


module.exports = {
    name: 'fbi',
    category: 'gif',
    aliases : ['fbi','fbi_dance', 'loli?'],
    run : (client, message, args)=>{
        if(message.deletable) message.delete();
            const attachment = new MessageAttachment(`https://media.giphy.com/media/LT6GjSh99SGYp5qvhr/giphy.gif`);  
            message.channel.send(attachment);
    }
}