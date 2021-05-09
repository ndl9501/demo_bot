module.exports = {
    name: 'ping',
    category: 'user',
    aliases : ['p'],
    run : (client, message, args)=>{
        if(message.deletable)
            message.delete();
        message.channel.send(`${message.author.username} pong ${client.ws.ping} ms!`);
    }
}