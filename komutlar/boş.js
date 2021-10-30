const Discord = require("discord.js");
const db = require("nrc.db")


module.exports = {
    calistir: async(client, message, args) => {




        db.arrayDeleteVal(`başvurular_${message.guild.id}`, `<@844955462586859560>`)
        message.channel.send(".")
},

name: "test",
description: "",
aliases: [],
kategori: "",
usage: "",
}