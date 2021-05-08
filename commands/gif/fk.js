const { MessageAttachment } = require('discord.js');


module.exports = {
    name: 'fk',
    category: 'gif',
    aliases : ['fuku','fukyou', 'fuk'],
    run : (client, message, args)=>{
        if(message.deletable) message.delete();
            const attachment = new MessageAttachment(`https://media.giphy.com/media/Azgg39gvsuZBlOm6cd/giphy.gif`);  
            message.channel.send(  attachment);
    }
}