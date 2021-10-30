const Discord = require("discord.js");
const db = require("nrc.db")


module.exports = {
    calistir: async(client, message, args) => {

        let yetkili = db.fetch(`byetkili_${message.guild.id}`)
        if (!message.member.roles.cache.has(yetkili)) return message.channel.send('Bu Komutu Kullanamazsın')    
          let botisim = args[0]
          let sahip = message.mentions.users.first() 
          let sebep = args.slice(2).join(" ");
          let basvuru = db.fetch(`basvuruk_${message.guild.id}`)
          let tes = db.fetch(`başvurdu_${message.guild.id}_${botisim}`)
            let kanal = db.fetch(`bot-ekle_${message.guild.id}`)
          let log =   db.fetch(`bot-log_${message.guild.id}`)
            if(!log) return message.channel.send("Bu komudu kullanmak için botlist kanallarının sunucuda ayarlı olması gerekiyor.")
          if(!basvuru) return message.channel.send("Bu komudu kullanmak için botlist kanallarının sunucuda ayarlı olması gerekiyor.")
          if(!kanal) return message.channel.send("Bu komudu kullanmak için botlist kanallarının sunucuda ayarlı olması gerekiyor.")
          const red = new Discord.MessageEmbed()
          .setColor("RED")
          .setDescription(`<@${sahip}> adlı kişini <@${botisim}> adlı botu reddedildi.\nSebep : ${sebep}\nReddeden yetkili : ${message.author}`)
            
            if (!botisim) return message.channel.send(`:no_entry: Botun ID'sini yazmalısın.`)
            if (!tes) return message.channel.send(":no_entry: Böyle Bir Bot Başvuru Yok")
          if (!sebep) return message.channel.send(`:no_entry: Botu neden onaylamadığını yazmalısın.`)
            if (!sahip) return message.channel.send(`:no_entry: Bot Sahibi ID yazman lazım.`)
          message.delete()
                client.channels.cache.get(log).send({embeds: [red]});
                message.channel.send(`Botu reddettiniz.`)

                let t =  db.fetch(`sıra_${message.guild.id}`)

                var son = Number(t)-1
                    db.set(`sıra_${message.guild.id}`,son)
                    db.delete(`başvurdu_${message.guild.id}_${botisim}`)

                    

             
                    if (db.arrayHas(`başvurular_${message.guild.id}`, `<@${botisim}>`))  return;
                    
            db.arrayDeleteVal(`başvurular_${message.guild.id}`, `<@${botisim}>`)
},

name: "botreddet",
description: "Gelen Bot Başvurusunu Reddedersin",
aliases: ["bot-reddet","botred","bot-red"],
kategori: "botlist",
usage: "",
}