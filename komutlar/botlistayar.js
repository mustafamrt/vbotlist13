const Discord = require("discord.js");
const db = require("nrc.db")



module.exports = {
    calistir: async(client, message, args) => {

        if (!message.member.permissions.has("ADMINISTRATOR")) return message.reply(`   **Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.**`);
        const embed = new Discord.MessageEmbed()
                                              .setTitle("Doğru Kullanım:")
                                              .setDescription(` **Narcos Code V13 Botlist Botu**
                                              > <:uye:823577810383667200> **• \`!!botlist-ayar botekle-kanal #kanal\` => Bot Ekleme Kanalını Ayarlarsınız.**
                                              > <:uye:823577810383667200>  **• \`!botlist-ayar botlog-kanal #kanal\` Bot Log Kanalını Ayarlarsınız.**
                                              
                                              > <:uye:823577810383667200> **• \`!botlist-ayar başvurugiden-kanal #kanal\` Başvuru Logunu Ayarlarsınız.**
                                              
                                              > <:uye:823577810383667200>  **• \`!botlist-ayar yetkili @rol\` Botlist Yetkili Rolünü Ayarlarsınız.**
                                              
                                             `)
                                              .setColor("RED")
                                              if(!args[0]) return message.channel.send({embeds: [embed]})
      if(args[0] === "botekle-kanal"){
        if(db.has(`bot-ekle_${message.guild.id}`)) return message.channel.send("Bu kanal zaten ayarlanmış.Sıfırlamak için **!botlist-ayar sıfırla**")
        let botekle = message.mentions.channels.first();
        if(!botekle) return message.channel.send("Lütfen kanal seçin")
        db.set(`bot-ekle_${message.guild.id}`, botekle.id)
        message.channel.send("Bot-ekle kanalı başarıyla ayarlandı")
      }
       if(args[0] === "botlog-kanal"){
         if(db.has(`bot-log_${message.guild.id}`)) return message.channel.send("Bu kanal zaten ayarlanmış.Sıfırlamak için **!botlist-ayar sıfırla**")
         let botlog = message.mentions.channels.first();
         if(!botlog) return message.channel.send("Lütfen kanal seçiniz.")
         db.set(`bot-log_${message.guild.id}`, botlog.id)
         message.channel.send("Bot-log kanalı başarıyla ayarlandı")
      }
       if(args[0] === "başvurugiden-kanal"){
         if(db.has(`basvuruk_${message.guild.id}`)) return message.channel.send("Bu kanal zaten ayarlanmış.Sıfırlamak için **!botlist-ayar sıfırla**")
         let basvurukanal = message.mentions.channels.first();
         if(!basvurukanal) return message.channel.send("Lütfen kanal seçin.")
         db.set(`basvuruk_${message.guild.id}`, basvurukanal.id)
         message.channel.send("Başvuru kanalı başarıyla ayarlandı")}
      if(args[0] === "yetkili"){
        if(db.has(`byetkili_${message.guild.id}`)) return message.channel.send("Yetkili zaten ayarlanmış.")
        let yetkilirol = message.mentions.roles.first();
        if(!yetkilirol) return message.channel.send("Lütfen rol seçin.")
        db.set(`byetkili_${message.guild.id}`, yetkilirol.id)
        message.channel.send("Başarıyla ayarlandı.")
      }
       if(args[0] === "sıfırla"){
         if(!db.has(`bot-ekle_${message.guild.id}`)) return message.channel.send("Kanallar önceden ayarlanmamış.")
         if(!db.has(`bot-log_${message.guild.id}`)) return message.channel.send("Kanallar önceden ayarlanmamış.")
         if(!db.has(`basvuruk_${message.guild.id}`)) return message.channel.send("Kanallar önceden ayarlanmamış.")
         if(!db.has(`basvuruk_${message.guild.id}`)) return message.channel.send("Rol önceden ayarlanmamış")
         db.delete(`basvuruk_${message.guild.id}`)
         db.delete(`bot-log_${message.guild.id}`)
         db.delete(`bot-ekle_${message.guild.id}`)
         db.delete(`byetkili_${message.guild.id}`)
         message.channel.send("Başarıyla sıfırlandı.")
         
    
       }

},

name: "botlist-ayar",
description: "Botlist Kanallarını Ayarlarsın",
aliases: [],
kategori: "botlist",
usage: "",
}