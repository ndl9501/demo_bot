const search = require("youtube-search");
const music = require('./music.js');

module.exports = {
    name: 'stop',
    category: 'voice',
    aliases: ['stop'],
    run: async (client, message, args) => {
        message.member.voice.channel.leave();
    }
}