const Discord = require('discord.js')
const bot = new Discord.Client()

const fs = require("fs");
const bdd = require("./bdd.json");
const fetch = require('node-fetch');

bot.on('message', message => {
    if (message.content === 'salut') {
      message.reply(Salut !')
    }
  })

bot.on('ready', function () {
  console.log("Je suis connecté !")
})

bot.on("ready", async () => {
    console.log("Je suis connecté")
    bot.user.setStatus("status, shardID");
    setTimeout(() => {
        bot.user.setActivity("Je suis Dieux");
    }, 100)
    const opts = {
            maxResults: 1000,
            key: token.youtube,
            type:'video',
            // channelId: 'UC4KnmRSYO4240Hl201BMgIg' //Chaine de tests
            channelId: 'UCWqPk07TBQAKy695NJMnlZg'
        };

bot.login("NzM1OTA4MzU0NDUwMzkxMDcw.XxnGEA.hM7ODWKhEktYuvnrGjV_Tj-n6Xk");
