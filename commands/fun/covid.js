const slug = require('slug');
const axios = require('axios');
const {MessageEmbed} = require('discord.js');

module.exports = {
    name : "covid",
    category : "fun",
    aliases : ['covid', 'cv'],
    run : async (client, message, args)=>{
        const uri = `https://api.ncovvn.xyz/cityvn`;
        const url = encodeURI(uri);
        const city = slug(args.join(' '), ' ')
        const sendEmbed = (data)=>{
            const embed = new MessageEmbed().setColor('#0099ff')
                                        .setTitle(`Thông Tin Covid Khu Vực ${data.dia_diem}`)
                                        .setDescription(`Tổng Số : ${data.tong_ca_nhiem}`)
                                        .setThumbnail('https://civilresolutionbc.ca/wp-content/uploads/2020/03/covid-19.png')
                                        .addFields(
                                            { name: 'Hôm Nay ', value: `${data.hom_nay}` },
                                            { name: 'Tử Vong', value: `${data.tu_vong}` },
                                        )
                                        .setTimestamp()
            message.channel.send(embed);
        }
        await axios.get(url)
            .then( rs => {
                const data = rs.data;
                const cvCity = data.filter((item)=> slug(item.dia_diem, ' ') === city);
                sendEmbed(cvCity[0])
            })
            .catch( err => {
                console.log(err);
                message.channel.send(`Có Lỗi Xảy Ra !!`)
            })
    }
}