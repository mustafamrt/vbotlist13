const Discord = require("discord.js");
const db = require("nrc.db")


module.exports = {
    calistir: async(client, message, args) => {


        let yetkili = db.fetch(`byetkili_${message.guild.id}`)
        if (!message.member.roles.cache.has(yetkili)) return message.channel.send('Bu Komutu Kullanamazsın')
          let botisim = args[0]
  

        let sahip = message.mentions.users.first() 

        let tes = db.fetch(`başvurdu_${message.guild.id}_${botisim}`)
          let basvuru = db.fetch(`basvuruk_${message.guild.id}`)
          let kanal = db.fetch(`bot-ekle_${message.guild.id}`)
        let log =   db.fetch(`bot-log_${message.guild.id}`)
          if(!log) return message.channel.send("Bu komudu kullanmak için botlist kanallarının sunucuda ayarlı olması gerekiyor.")
        if(!basvuru) return message.channel.send("Bu komudu kullanmak için botlist kanallarının sunucuda ayarlı olması gerekiyor.")
        if(!kanal) return message.channel.send("Bu komudu kullanmak için botlist kanallarının sunucuda ayarlı olması gerekiyor.")
        const onay = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setDescription(`<@${sahip}> adlı kişinin <@${botisim}> adlı botu onaylandı.\nOnaylayan yetkili : ${message.author}`)
          
          if (!botisim) return message.channel.send(`:no_entry: Botun idsini yazmalısın.`)
          if (!tes) return message.channel.send(":no_entry: Böyle Bir Bot Başvuru Yok")
        message.delete()
        if (!sahip) return message.channel.send(`:no_entry: Botun sahipinin Etiketlemelisin`)
              client.channels.cache.get(log).send({embeds: [onay]})      
        message.channel.send(`Botu onayladınız.`)

        let t =  db.fetch(`sıra_${message.guild.id}`)

        var son = Number(t)-1
            db.set(`sıra_${message.guild.id}`,son)


            if (db.arrayHas(`başvurular_${message.guild.id}`, `<@${botisim}>`))  return;

            db.arrayDeleteVal(`başvurular_${message.guild.id}`, `<@${botisim}>`)

},

name: "botonayla",
description: "Bot onaylarsın",
aliases: ["botonay","bot-onay"],
kategori: "botlist",
usage: "",
}