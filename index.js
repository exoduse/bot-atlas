const Discord = require('discord.js')
const bot = new Discord.Client()

const fs = require("fs");
const bdd = require("./bdd.json");
const fetch = require('node-fetch');

bot.on('message', message => {
    if (message.content === 'salut') {
      message.reply('Salutation!')
    }
  })

bot.on('ready', function () {
  console.log("Je suis connecté !")
})

bot.login("NzM1OTA4MzU0NDUwMzkxMDcw.XxnGEA.sdWy1HmHyuu4Cct2G_LhVtAHil8");
