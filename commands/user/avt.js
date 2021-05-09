const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'avt',
    category: 'user',
    aliases: ['avatar'],
    run : (client, message, args) =>{
        if(message.deletable)
            message.delete();
        // avatar user say avatar
    //         // message.reply(message.author.displayAvatarURL());
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member ;
        const URL = member.user.avatarURL({format: 'jpg' , dynamic: true, size: 1024})
        if(!URL){
            console.log("No avt!");
            message.channel.send(`(☞ﾟヮﾟ)☞ ${member.user} đổi avt cho sinh động đi bạn ơi!! ☜(ﾟヮﾟ☜) `); return;
        }
        const avatarEmbed = new MessageEmbed()
                .setImage(URL)
                .setURL(URL)
                .setTitle("¯\_(ツ)_/¯ dow here!")
                .setDescription(`(☞ﾟヮﾟ)☞ ${member.user}`)
                .setColor("RANDOM")
        message.channel.send(avatarEmbed);
    }
}