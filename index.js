// const Telegraf = require('telegraf') // import telegram lib
const { Composer } = require('micro-bot')

const bot = new Composer()
bot.start((ctx) => ctx.reply('Welcome')) // display Welcome text when we start bot
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.hears('hi', (ctx) => ctx.reply('Hey there')) // listen and handle when user type hi text

module.exports = bot