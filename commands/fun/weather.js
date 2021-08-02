const {MessageEmbed} = require('discord.js')
const { WEATHER_API_KEY } = require('./../../config.json');
const slug = require('slug');
const axios = require('axios');
module.exports = {
    name : "weather",
    category : "fun",
    aliases : ['wt', 'weather'],
    run : async (client, message, args)=>{
        const city = slug(args.join(' '), " ");
        const uri = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}&units=metric&lang=vi`;
        const url = encodeURI(uri)
        const sendEmbed = (data)=>{
            const embed = new MessageEmbed().setColor('#0099ff')
                                        .setTitle(`Thời Tiết ${data.name}`)
                                        .setDescription(`Nhiệt Độ : ${data.main.temp}`)
                                        .setThumbnail('https://cdn.iconscout.com/icon/free/png-256/sunny-weather-1-458138.png')
                                        .addFields(
                                            { name: 'Nhiệt Độ Thấp Nhất ', value: `${data.main.temp_min}` },
                                            { name: 'Nhiệt Độ Cao Nhất ', value: `${data.main.temp_max}` },
                                            { name: 'Cảm Thấy Như ', value: `${data.main.feels_like}` },
                                        )
                                        .setTimestamp()
            message.channel.send(embed);
        }
        console.log(url)
        await axios.get(url)
            .then((rs) => {
                const data = rs.data;
                sendEmbed(data);
            })
            .catch(err => console.log(err))
        
    
    }
}