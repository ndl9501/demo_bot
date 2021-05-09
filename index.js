const { Client, MessageEmbed, Util ,MessageAttachment, Collection} = require("discord.js");
const client = new Client();
const { token, prefix } = require("./config.json");
const { parse } = require("twemoji-parser");


client.on('ready', ()=>{
    console.log(`${client.user.username} đã sẵn sàng hoạt động !\n ${client.ws.ping} ms`);

    client.user.setPresence({
        activity:{
            name: "Đang xem sẽ !",
            type: "WATCHING",
        },
        status: "online",
    })
        // .then(console.log)
        // .catch(console.error);
})

client.commands = new Collection();
client.aliases = new Collection();

["command"].forEach(handler =>{
    require(`./handlers/${handler}`)(client);
});


client.on('message', message =>{
    if(message.author.bot) return;
    if(!message.guild) return;

    if(!message.content.startsWith(`${prefix}`)) return;

    const args = message.content.slice(prefix.length).trim().split(' ');
    const cmd = args.shift().toLowerCase();

    
    if(cmd.length === 0) return;
    let command = client.commands.get(cmd);
    if(!command) command = client.commands.get(client.aliases.get(cmd));
    if(command) command.run(client, message, args);

    

    // switch(cmd){
    //     case `${prefix}ping`:
    //         message.channel.send(`${message.author.username} pong !`);
    //         break;
    //     case `${prefix}say`:
    //         if(message.deletable)
    //             message.delete();
    //         message.channel.send(args.join(" "));
    //         break;
    //     case `${prefix}avt`:
    //         // avatar user say avatar
    //         // message.reply(message.author.displayAvatarURL());
    //         const member_avt = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member ;
    //         const URL = member_avt.user.avatarURL({format: 'jpg' , dynamic: true, size: 1024})
    //         if(!URL){
    //             console.log("No avt!");
    //             message.channel.send(`${member_avt.user} đổi avt cho sinh động đi bạn ơi!!`); return;
    //         }
    //         const avatarEmbed = new MessageEmbed()
    //                 .setImage(URL)
    //                 .setURL(URL)
    //                 .setTitle("dow here!")
    //         message.channel.send(avatarEmbed);
    //         break;

    //     case `${prefix}rip`:
    //         if(message.deletable) message.delete();
    //         const attachment = new MessageAttachment(`https://media.giphy.com/media/KEkOcB5DJ4E4bhou9T/giphy.gif`);  
    //         message.channel.send(` ${message.author} `,  attachment);
    //         break;

    //     case `${prefix}bonk`:
    //         const member_bonk = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.user;
    //         const attachment_bonk = new MessageAttachment(`./mp4/bonk.mp4`);
    //         message.mentions.member.first() || message.guild.members.cache.get(args[0]) ? message.channel.send(` ${member_bonk.user} `,  attachment_bonk) : message.channel.send(``,  attachment_bonk);
    //         break;

    //     case `${prefix}pepe`:
    //         const member_pepe = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
    //         const attachment_pepe = new MessageAttachment(`./mp4/pepe.mp4`);
    //         message.mentions.members.first() || message.guild.members.cache.get(args[0]) ? message.channel.send(` ${member_pepe.user} `,  attachment_pepe) : message.channel.send(``,  attachment_pepe);
    //         break;
        
    //     case `${prefix}shutup`:
    //         const member_shutup = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
    //         const attachment_shutup = new MessageAttachment(`./mp4/shutup.mp4`);
    //         message.mentions.members.first() || message.guild.members.cache.get(args[0]) ? message.channel.send(` ${member_shutup.user} `,  attachment_shutup) : message.channel.send(``,  attachment_shutup);
    //         break;
    //     case 'emoji':
    //         const emoji = args[0];
    //         if(!emoji) return message.channel.send(` ${message.author} nhập emoji đi bạn...`);

    //         let custom = Util.parseEmoji(emoji)
    //         const embed = new MessageEmbed()
    //             .setTitle(`Zoom  ${emoji}`)
    //             .setColor('RANDOM')
    //         if(!custom) return message.channel.send(` ${message.author} emoji không hợp lệ`);
    //         if(custom.id){
    //             let link =`https://cdn.discordapp.com/emojis/${custom.id}.${custom.animated ? 'gif' : 'png'}`;
    //             embed.setImage(link)
    //                 .setFooter(`Emoji : ${custom.id}`);
    //                 return message.channel.send(embed);
    //         } else{
    //             let parsed = parse(emoji, { assetType : 'png'});
    //             if(!parsed){
    //                 return message.channel.send('Emoji không hợp lệ!');
    //             }
    //             embed.setImage(parsed[0].url);
    //             return message.channel.send(embed);
    //         }
    //         break;
    // }
    
})

client.login(token);