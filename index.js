const Discord = require('discord.js');

const prefix = '-';

const client = new Discord.Client({
    allowedMentions: {
        parse: [`users`, `roles`],
        repliedUser: true,

    },
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_PRESENCES",
        "GUILD_MEMBERS",
        "GUILD_MESSAGE_REACTIONS",

    ],
});

client.login('MTAxMjAyODQzODg5NjQ1MTYzNQ.G28YvW.GZl-sqTcswAYIwuc7u5YtM3sf65yfwgmXqgJ4M')