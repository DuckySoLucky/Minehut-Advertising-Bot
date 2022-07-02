# Minehut Advertising Bot
Ability to advertise your minecraft Minehut server. The application utilizes Discord.js for communicating with Discord, and Mineflayer for communicating with Minehut. 
> WARNING! Abusing this bot to advertise your Minecraft Bot is against Minehut rules. I do not promote any kind of usage of this bot for breaking rules. 
> WARNING! It is not my fault if you get banned/punished. Use it at your own risk!

### How does it work?
- There is minecraft bot which is sitting in Minehut lobby
- Every X seconds it sends advertising message
- Notifies specified on discord (opinional)

### Configuration

#### Server

The server is the server the Minecraft client should connect to, by default it will point to Hypixels server so it can be left as-is if the plan is to use the app for Hypixel guild chat, if not then the `host` is the servers IP or hostname, and the `port` is the port the server is running on. 

> Note: The server name must be lowercase.
> Note: The port must be a number, Mineflayer expects an integer so you can't wrap the port in quotes or Mineflayer won't create a connection to the Minecraft server.

#### Minecraft

The minecraft section includes a `username` and `password` option, if using a Mojang account these should be filled out with your Mojang username and password for the Minecraft account you plan on using, your Minecraft username is most likely the email it was created with. If using with a microsoft account change `accountType` to `microsoft`, `username` and `password` are not required and will be left blank as you will be directed to the [Microsoft Link page](https://www.microsoft.com/link). The name of minehut server you would like to advertise should be `serverName`. `adMessage` is custom message which will be next to server name when advertising. `cooldown` is amount of seconds between advertisements.

#### Discord

The Discord options includes the `token`, `channel`, `userId` and `customMessage` options.

The token is the Discord application token, if you don't already have a Discord App, you can [create a new app](https://discordapp.com/developers), then convert the app to a Discord bot, and then get your Discord bot token on the "Bot" page.

The Discord channel is the ID of the text channel the bot should be linked with, the bot will only send and listen to messages in the channel defined in the config.

The userID is the ID of the user who should get pinged when bot advertises. This is optional and can be toggled by making `customMessage` false
