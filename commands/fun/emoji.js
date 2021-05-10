const { Util, MessageEmbed } = require('discord.js');
const { parse } = require('twemoji-parser');


module.exports = {
    name: 'emoji',
    category: 'fun',
    aliases : ['emo'],
    run : (client, message, args)=>{
        const emoji = args[0];
        if(!emoji) return message.channel.send(` ${message.author} nhập emoji đi bạn...`);
        
        
        let custom = Util.parseEmoji(emoji);
        const embed = new MessageEmbed()
            .setColor('RANDOM')
            // .setTitle(`Zoom  ${emoji}`)
        if(!custom) return message.channel.send(` ${message.author} emoji không hợp lệ`);
        if(custom.id){
            let link =`https://cdn.discordapp.com/emojis/${custom.id}.${custom.animated ? 'gif' : 'png'}`;
            embed.setImage(link)
                // .setFooter(`Emoji : ${custom.id}`);
            if(message.deletable)
                message.delete();
                return message.channel.send(embed);
        } else{
            let parsed = parse(emoji, { assetType : 'png'});
            if(!parsed){
                return message.channel.send('Emoji không hợp lệ!');
            }
            embed.setImage(parsed[0].url);
            if(message.deletable)
            message.delete();
            return message.channel.send(embed);
        }
        
    }

}