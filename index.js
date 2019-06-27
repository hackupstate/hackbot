var SlackBot = require('slackbots');
var token = require ('./token');

const bot = new SlackBot({
    token: token.token,
    name: 'HackBot'
});

// Start handler
bot.on('start', function() {
    // more information about additional params https://api.slack.com/methods/chat.postMessage
    const params = {
        link_name: 'true',
    };
    
    bot.postMessageToChannel('bot-testing', 'Hey Students! It is time to fill out the feedback survey. Head on over to https://forms.gle/ALgMTTyH5TaDQfYT7' , params);
});