const Discord = require('discord.js')
const bot = new Discord.Client()

const fs = require("fs");
const bdd = require("./bdd.json");
const fetch = require('node-fetch');

bot.on('message', message => {
    if (message.content === 'salut') {
      message.reply('veiller attendre que les autre Membre soit Actif !')
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

    let channel_new_vid = bot.channels.cache.get("733425809095917749");
   



    setInterval(function(){
        let result = search('', opts).catch(err => console.log(err));
        result.then(function(r) {
            r.results.forEach(element => {
                if(list['vidéos'].indexOf(element.id) == -1){
                    console.log(element.id);
                    channel_new_vid.send("https://www.youtube.com/watch?v=" + element.id)
                    list['vidéos'].push(element.id);
                    fs.writeFile("./youtube.json", JSON.stringify(list, null, 4), (err) => {
                        if (err) message.channel.send("Une erreur est survenue.");
                    });
                }

            });
        })
    },2000)
});

bot.on("guildMemberAdd", member => {
    
    if(bdd["message-bienvenue"]){
        bot.channels.cache.get('701770132812464169').send(bdd["message-bienvenue"]);
    }
    else{
        bot.channels.cache.get('701770132812464169').send("Bienvenue sur le serveur");
    }
    member.roles.add('701156465515167755');

})
bot.login("NzM1OTA4MzU0NDUwMzkxMDcw.XxnGEA.sdWy1HmHyuu4Cct2G_LhVtAHil8");
