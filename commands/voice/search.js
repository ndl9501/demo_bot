const search = require("youtube-search");
const music = require('./music.js');
const { API_KEY } = require('./../../config.json')
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
        
        const value = args.join(' ');
        search(value, opts, (err, results) => {
            if (err) return console.log("err ~~ :", err);
            else{
                // console.log(results[0].link);
                music.run(client, message, results[0].link);
            }
        });
        


    }
}