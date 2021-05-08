
const { getAudioUrl } = require('google-tts-api');



module.exports = {
    name: 'speak',
    category: 'void',
    aliases : ['say_void', 's_void', 'svoid', 'talk'],
    run :async (client, message, args)=>{
        if(!args[0]) return message.channel.send(`${message.author} nhập gì đi my friend (●'◡'●)`);

        const str = args.join(' ');
        if(str.length > 300) message.channel.send(`${message.author} nhập ngắn thôi!!! Tôi đọc đau mồm lắm ༼ つ ◕_◕ ༽つ`);

        const voidChannel = message.member.voice.channel;

        if(!voidChannel) return message.reply(`join void đã!`);
        if(message.deletable)
            message.delete();
        
        const audioUrl = await getAudioUrl(str , {
            lang: 'vi',
            slow: false,
            host: 'https://translate.google.com',
            timeout: 1000,
        })
        


        try {
            voidChannel.join()
            .then(connection => {
                const dispatcher  = connection.play(audioUrl);
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