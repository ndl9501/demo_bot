const search = require("youtube-search");
const music = require('./music.js');
const { API_KEY } = require('./../../config.json');
const { MessageEmbed } = require("discord.js");
module.exports = {
    name: 'search',
    category: 'voice',
    aliases: ['search'],
    run: async (client, message, args) => {
        var opts = {
            maxResults: 1,
            key: API_KEY
        };
        
        if(!args[0])
            return message.channel.send(`${message.author} Ơ! Tìm mà không nhập gì à ¯\_(ツ)_/¯!`);
        const loop = args[args.length-1] == "loop" ?  true : false;
        if(loop) args.pop();
        const value = args.join(' ');
        console.log("value : " + value);
        search(value, opts,async (err, results) => {
            if (err) {
                console.log("err ~~ :", err);
                return;
            }
            else{
                // const song = {
                //     id : results[0].id,
                //     link : results[0].link,
                //     title : results[0].title,
                //     requester: message.author,
                //     image: results[0].thumbnails.medium.url,
                // }

                // const queue = message.client.queue.get(message.guild.id)
                // if(queue){
                //     queue.song.songs.push(song);
                //     let embed = discord.MessageEmbed()
                //         .setColor("RANDOM")
                //         .setTItle("Queue")
                // }
                await music.run(client, message, results[0].link);
                
                
                // console.log(results[0].link);
                // loop == false ? music.run(client, message, results[0].link) : start();
            }
        });
        


    }
}