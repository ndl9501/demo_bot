const { MessageAttachment, MessageEmbed } = require('discord.js');
const { objGif } = require("./../../config.json");


module.exports = {
    name: 'video',
    category: 'fun',
    aliases : ['video',"mp4"],
    run : (client, message, args)=>{

        let attachment = args[0];
        objGif.value.forEach( value => {
            if(value.name.find( nm => nm == attachment)){
                attachment = value.url;
            }
        })
        const embed = new MessageEmbed()
            .setColor('RANDOM')
            .setTitle('')
            embed.setImage(attachment);

        if(message.deletable) message.delete();
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[1]) || message.member;
        
        message.mentions.members.first() || message.guild.members.cache.get(args[1]) ? message.channel.send(`${member.user} (¬‿¬)` , embed ) : message.channel.send(embed);
        
    }
}

