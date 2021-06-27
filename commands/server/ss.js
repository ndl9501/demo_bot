const axios = require('axios');
const { MessageEmbed, Client } = require("discord.js")


module.exports = {
    name: 'ss',
    category : 'server',
    aliases : ['ss'],
    run : async (client, message , args)=>{
        //key: 'f~K3mBYhQrfjP1FwUxfC0ga0Tl3BrZ~tji3Chd4d',
        // https://api.nasa.gov/planetary/apod?api_key=1hXc1dZuiJ3aa8MXgivp8X8XkMduLC0cMf7skX6Q
        const str = args.join(' ');
        console.log(str);
        const uri = "https://tuanxuong.com/api/simsimi/index.php?text="+str;
        const url = encodeURI(uri);
        await axios.get(url)
        .then(rs => {
            console.log(rs.data.response);
            message.channel.send(rs.data.response);
        })
        .catch(error => {
            console.log(error);
        });
    }
}

