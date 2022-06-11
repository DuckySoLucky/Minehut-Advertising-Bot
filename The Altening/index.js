const mineflayer = require('mineflayer');
const config = require('./config.json');
const { Client, Intents } = require("discord.js");
const client = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});

const bot = mineflayer.createBot({
    authServer: 'http://authserver.thealtening.com',
    sessionServer: 'http://sessionserver.thealtening.com',
    host: config.server.host,
    port: config.server.port,
    username: config.minecraft.username,
    password: 'DuckySoLucky'
})

function wait(seconds) {
    var waitTill = new Date(new Date().getTime() + seconds * 1000)
    while (waitTill > new Date()) {}
}

bot.on('login', () => {
    while (1==1) {
        bot.chat(`/ad ${config.minecraft.serverName} ${config.minecraft.adMessage}`)
        console.log(`/ad ${config.minecraft.serverName} ${config.minecraft.adMessage}`)
        if (config.discord.customMessage) {
            client.channels.cache.get(config.discord.channel).send(`<@${config.discord.userId}> ${bot.username} advertised ${config.minecraft.serverName}`)
        }
        wait(config.minecraft.cooldown) 
    }
})

client.on("ready", () => {console.log('Discord > Client ready, logged in as ' + client.user.tag);});
bot.on('kicked', (reason, loggedIn) => console.log(reason, loggedIn))
bot.on('spawn', () => console.log('Minecraft > Client ready, logged in as ' + bot.username))

client.login(config.discord.token);