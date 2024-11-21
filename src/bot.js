const TelegramBot = require('node-telegram-bot-api');

const token = '<YOUR_BOT_API_TOKEN>';
const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Welcome! Please connect your wallet using this link: https://<YOUR_APP_URL>');
});
