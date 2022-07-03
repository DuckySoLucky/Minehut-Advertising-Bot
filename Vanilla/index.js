const mineflayer = require('mineflayer');
const config = require('./config.json');
const { Client, Intents } = require("discord.js");
const client = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});

const bot = mineflayer.createBot({
    host: config.server.host,
    port: config.server.port,
    username: config.minecraft.username,
    password: config.minecraft.password,
    auth: config.minecraft.auth,
    version: false
})

bot.on('login', () => {
    setInterval(() => {
        bot.chat(`/ad ${config.minecraft.serverName} ${config.minecraft.adMessage}`)
        console.log(`/ad ${config.minecraft.serverName} ${config.minecraft.adMessage}`)
        if (config.discord.customMessage) {
            client.channels.cache.get(config.discord.channel).send(`<@${config.discord.userId}> ${bot.username} advertised ${config.minecraft.serverName}`)
        }
    }, config.minecraft.cooldown);
})

client.on("ready", () => {console.log('Discord > Client ready, logged in as ' + client.user.tag);});
bot.on('kicked', (reason, loggedIn) => console.log(reason, loggedIn))
bot.on('spawn', () => console.log('Minecraft > Client ready, logged in as ' + bot.username))

client.login(config.discord.token);
