const Discord = require("discord.js");
const db = require("nrc.db")
const ayarlar = require("../ayarlar.json")


module.exports = {
    calistir: async(client, message, args) => {



        const embed = new Discord.MessageEmbed()

        .setColor("BLUE")

        .setFooter( "Narcos Code V13", client.user.avatarURL())

       
        .setDescription(`
       
       ╔═══════╣Narcos Beta╠══════════
       ║
       ${client.commands
       
         .filter(cmds => cmds.kategori == "botlist")
       
         .map(komut => `║ <:880072774041878609:881951010057240626> **${ayarlar.prefix}${komut.name}** = ${komut.description || "**Açıklama Eklenmemiş**"}`)
       
         .join('\n')}
       ║
       ╠═══════════════════════════
       ║
       ║⎾[Davet Linki](https://discord.com/oauth2/authorize?client_id=645226005144797184&scope=bot&permissions=8)⏌ ⎾[Destek Sunucusu](https://discord.gg/kbwQU6gJCF)⏌
       ║
       ╚══════════════════════════`)

       .setTimestamp()
         
        
       
       message.channel.send({embeds: [embed]}) 
       

},

name: "yardım",
description: "",
aliases: [],
kategori: "",
usage: "",
}