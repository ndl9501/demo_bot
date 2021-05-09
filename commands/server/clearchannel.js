module.exports = {
    name: 'clearchannel',
    category : 'server',
    aliases : ['cc', 'clearchannel'],
    run : (client, message , args)=>{
        
        if(message.member.hasPermission('ADMINISTRATOR')){
            message.channel.messages.fetch().then((result) =>{
                console.log(result);
                message.channel.bulkDelete(result);
                message.channel.send(`${client.user.username} đã dọn dẹp kênh chat (●'◡'●)`);
            });
        }
    }
}