const { Client, MessageEmbed, Util ,MessageAttachment, Collection} = require("discord.js");
const client = new Client();
const { token, prefix } = require("./config.json");
const { parse } = require("twemoji-parser");


client.on('ready', ()=>{
    console.log(`${client.user.username} đã sẵn sàng hoạt động !\n ${client.ws.ping} ms`);
    
    client.user.setPresence({
        activity:{
            name: "Đang xem sẽ !",
            type: "WATCHING",
        },
        status: "online",
    })
        // .then(console.log)
        // .catch(console.error);
})

client.commands = new Collection();
client.aliases = new Collection();

// queue 
client.queue = new Map();

// Map()

["command"].forEach(handler =>{
    require(`./handlers/${handler}`)(client);
});



client.on('message', message =>{
    if(message.author.bot) return;
    if(!message.guild) return;

    if(!message.content.startsWith(`${prefix}`)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    
    
    if(cmd.length === 0) return;
    let command = client.commands.get(cmd);
    if(!command) command = client.commands.get(client.aliases.get(cmd));
    if(command) command.run(client, message, args);

    
})

client.login(token);