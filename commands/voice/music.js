const ytdl = require('ytdl-core');

const { objYtb } = require('./../../config.json');


module.exports = {
    name:'music',
    category:'voice',
    aliases:['ytb_mc' , 'play_music', 'p_music', 'play'],
    run : (client, message, args)=>{
        if(!args[0]) message.channel.send(`${message.author} thêm link nhạc đi bạn ╰(*°▽°*)╯`);
        let url = Array.isArray(args)?args.join(' ') : args + "";  
        console.log(url);
        if(url == "cocailon" || url == "dcm") 
            message.delete();
        const voidChannel = message.member.voice.channel;
        if(!voidChannel) return message.reply(`${message.author} join void đã!`);
        // if(voidChannel.join()){
        //     console.log("join rồi");
        //     voidChannel.leave();
        // }
        // else
        // console.log("chưa jon");;

        objYtb.value.forEach( value => {
            if(value.name.find( nm => nm == url )){
                url = value.url;
                if(url.endsWith(".mp3")){
                    return voidChannel.join().then(connection =>{
                        const dispatcher  = connection.play(url
                        );
                        dispatcher.setVolume(0.4);
                        dispatcher.on('finish', ()=>{
                            voidChannel.leave();
                        })
                    })
                }
            }
        })
        if(url.startsWith("https")){
            try {
                voidChannel.join()
                .then(connection => {
                    const dispatcher  = connection.play(
                        ytdl(url , {filter : 'audioonly'}), 
                        {
                            volume: 0.4,
                        }
                    );
                    // dispatcher.on('drain', ()=>{
                    //    console.log('is running');
                    // })
                    dispatcher.on('finish', ()=>{
                        voidChannel.leave();
                    })
                })
            } catch (error) {
                voidChannel.leave();
                message.channel.send(`Bot lỗi, vui lòng thử lại sau !(┬┬﹏┬┬)`);
                console.log(error);
            }
        }
        

        
    }
}