const ytdl = require('ytdl-core');

const { objYtb } = require('./../../config.json');


module.exports = {
    name:'music',
    category:'voice',
    aliases:['ytb_mc' , 'play_music', 'p_music', 'play'],
    run : (client, message, args)=>{
        if(!args[0]) message.channel.send(`${message.author} thêm link ytb nhạc đi bạn ╰(*°▽°*)╯`);

        let url = args.join(" ");
        if(url == "cocailon" || url == "dcm") 
            message.delete();
        const voidChannel = message.member.voice.channel;
        if(!voidChannel) return message.reply(`${message.author} join void đã!`);

        objYtb.value.forEach( value => {
            if(value.name.find( nm => nm == url )){
                url = value.url;
                if(url.endsWith(".mp3")){
                    return voidChannel.join().then(connection =>{
                        const dispatcher  = connection.play(url
                        );
                        dispatcher.on('finish', ()=>{
                            voidChannel.leave();
                        })
                    })
                }
            }
        })
        
        

        try {
            voidChannel.join()
            .then(connection => {
                const dispatcher  = connection.play(
                    ytdl(url , {filter : 'audioonly'}), 
                    {
                        volume: 0.3,
                    }
                );
                dispatcher.on('finish', ()=>{
                    voidChannel.leave();
                })
            })
        } catch (error) {
            message.channel.send(`Bot lỗi, vui lòng thử lại sau !(┬┬﹏┬┬)`);
            console.log(error);
        }
    }
}