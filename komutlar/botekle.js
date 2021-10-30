const Discord = require("discord.js");
const db = require("nrc.db")


module.exports = {
    calistir: async(client, message, args) => {

        let botid = args[0]
        let prefix = args[1]
      let onaylımı = args[2]

      let tes = db.fetch(`başvurdu_${message.guild.id}_${botid}`)
      let basvuru = db.fetch(`basvuruk_${message.guild.id}`)
        let kanal = db.fetch(`bot-ekle_${message.guild.id}`)
      let log =   db.fetch(`bot-log_${message.guild.id}`)
        if(!log) return message.channel.send("Bu komudu kullanmak için botlist kanallarının sunucuda ayarlı olması gerekiyor.")
      if(!basvuru) return message.channel.send("Bu komudu kullanmak için botlist kanallarının sunucuda ayarlı olması gerekiyor.")
      if(!kanal) return message.channel.send("Bu komudu kullanmak için botlist kanallarının sunucuda ayarlı olması gerekiyor.")
      
      if (message.channel.id !== kanal) return message.channel.send(`Bu komutu sadece <#${kanal}> kanalında kullanabilirsin.`)
        if (message.channel.id == kanal) {
      if (!botid) return message.channel.send(`:no_entry: Botunun ID'sini yazmalısın.`)

      if (tes) return message.channel.send(`:no_entry: Bu bot Zaten Sisteme Eklenmiş`)
      if (!prefix) return message.channel.send(`:no_entry: Botunun prefixini yazmalısın.`)
      if (!onaylımı) return message.channel.send(`:no_entry: Botunun Dbl onaylımı onu yazmalısın`)

    
      const embed = new Discord.MessageEmbed()
      .setColor("BLUE")
      .setDescription(`[Ekle](https://discordapp.com/oauth2/authorize?client_id=${botid}&scope=bot&permissions=0)`, true)
      .setTitle("Bot Ekletme")
      .addField("Bot Sahibi", message.author.tag)
      .addField("Bot ID", botid)
      .addField("Bot Prefix", prefix)
      .addField("Bot Onaylımı?", onaylımı)
      client.channels.cache.get(basvuru).send({embeds: [embed]})

      message.channel.send(`Bot ekleme isteğiniz alındı.`)
      }

if (!db.has(`başvurular_${message.guild.id}`)) {

    db.set(`başvurular_${message.guild.id}`, [])
    db.set(`sıra_${message.guild.id}`,0)

} else {

    db.push(`başvurular_${message.guild.id}`, `<@${botid}>`)

let t =  db.fetch(`sıra_${message.guild.id}`)

var son = Number(t)+1
    db.set(`sıra_${message.guild.id}`,son)
}
db.set(`başvurdu_${message.guild.id}_${botid}`, true)

let sıra = db.fetch(`sıra_${message.guild.id}`)


const basvuruuu = new Discord.MessageEmbed()
.setColor("PURPLE")
.setDescription(`${message.author} adlı kullanıcının <@${botid}> adlı botu sıraya ekledi. Botu onaylanmayı bekliyor. **( Şu Anda Sırada ${sıra ? sıra: "1"} bot var)** `)
client.channels.cache.get(log).send({embeds: [basvuruuu]})

},

name: "bot-ekle",
description: "Bot Eklersin",
aliases: [],
kategori: "botlist",
usage: "",
}