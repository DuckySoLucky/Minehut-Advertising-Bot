const mineflayer = require('mineflayer');
const config = require('./config.json');
const { MessageEmbed, Client, Intents } = require("discord.js");
const client = new Client({intents: new Intents(32767)})
let bot;

client.once('ready', () => {
    console.log('Discord > Client ready, logged in as ' + client.user.tag);
    start();
})

function start() {
    const username = config.minecraft.username
    setInterval(() => {
        for (let i = 0; i < username.length; i++) {
            bot = mineflayer.createBot({
                authServer: 'http://authserver.thealtening.com',
                sessionServer: 'http://sessionserver.thealtening.com',
                host: config.server.host,
                port: config.server.port,
                username: username[i],
                password: 'DuckySoLucky'
            })
            bot.on('login', () => {
                bot.chat(`/ad ${config.minecraft.serverName} ${config.minecraft.adMessage}`)
                console.log(`Minecraft > ${bot.username}:  ${config.minecraft.serverName} ${config.minecraft.adMessage}`)
                if (config.discord.customMessage) {
                    const adEmbed = new MessageEmbed()
                        .setColor('#00FF00')
                        .setAuthor({ name: `${bot.username}`})
                        .setDescription(`${config.minecraft.serverName}\n${config.minecraft.adMessage}`)
                        .setFooter({ text: config.embed, iconURL: 'https://cdn.discordapp.com/avatars/486155512568741900/31cabcf3c42823f8d8266fd22babb862.png?size=4096' });
                    client.channels.cache.get(config.discord.channel).send({embeds: [ adEmbed ]})
                }
            })
            bot.on('kicked', (reason, loggedIn) => console.log(reason, loggedIn))
            setInterval(() => {}, config.minecraft.waitBeforeLogging*1000)
        }
    }, (config.minecraft.waitBeforeLogging*1000*5));
}

client.login(config.discord.token);