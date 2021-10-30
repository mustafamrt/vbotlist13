const Discord = require("discord.js");
const db = require("nrc.db")



module.exports = {
    calistir: async(client, message, args) => {



let liste = db.get(`başvurular_${message.guild.id}`)
let sıra = db.fetch(`sıra_${message.guild.id}`)

let lis = liste.map(anan => anan).join("\n")
const embed = new Discord.MessageEmbed()
.setDescription(`Başvuru Listesi **${sıra}**
 ${lis}`)

message.channel.send({embeds: [embed]})


},

name: "botlistesi",
description: "",
aliases: [],
kategori: "",
usage: "",
}