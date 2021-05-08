module.exports = {
    name: 'sv',
    category : 'server',
    aliases : ['sv', 'server'],
    run : (client, message , args)=>{
        if(message.deletable)
            message.delete();
        message.channel.send();
    }
}