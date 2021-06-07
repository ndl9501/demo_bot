const ytdl = require('ytdl-core');

const { objYtb } = require('./../../config.json');


module.exports = {
    name:'music',
    category:'voice',
    aliases:['ytb_mc' , 'play_music', 'p_music', 'play'],
    run :async (client, message, args)=>{
        if(!args[0]) message.channel.send(`${message.author} thêm link nhạc đi bạn ╰(*°▽°*)╯`);
        let url = Array.isArray(args)?args.join(' ') : args + "";  
        console.log(url);
        
        const voidChannel = message.member.voice.channel;
        if(!voidChannel) return message.reply(`${message.author} join void đã!`);
        // if(voidChannel.join()){
        //     console.log("join rồi");
        //     voidChannel.leave();
        // }
        // else
        // console.log("chưa jon");
        
        objYtb.value.forEach( value => {
            if(value.name.find( nm => nm == url )){
                url = value.url;
                if(url.endsWith(".mp3")){
                    voidChannel.join().then(async connection =>{
                        const dispatcher  =await connection.play(await url
                        );
                        dispatcher.setVolume(0.4);
                        await dispatcher.on('finish', ()=>{
                            voidChannel.leave();
                        })
                    })
                }
            }
        })
        if(url.startsWith("https")){
            try {
                 voidChannel.join()
                .then( async connection => {
                    const dispatcher  =await connection.play(
                        await ytdl(url , {filter : 'audioonly'}), 
                        {
                            volume: 0.4,
                        }
                    ).on('finish', ()=>{
                        voidChannel.leave();
                        return;
                    }).on('error', error => console.error(error))
                })
            } catch (error) {
                voidChannel.leave();
                message.channel.send(`Bot lỗi, vui lòng thử lại sau !(┬┬﹏┬┬)`);
                console.log(error);
                return;
            }
        }
        

        
    }
}