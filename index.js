// const Telegraf = require('telegraf') // import telegram lib
const { Composer } = require('micro-bot')



// const convertapi = require('convertapi')('<YOUR SECRET HERE>');
// convertapi.convert('pdf', {
//     File: '/path/to/my_file.doc'
// }, 'doc').then(function(result) {
//     result.saveFiles('/path/to/dir');
// })

const bot = new Composer()

const PhotoURL = 'https://picsum.photos/200/300/?random'

bot.start((ctx) => ctx.reply('Welcome')) // display Welcome text when we start bot
bot.help((ctx) => ctx.reply('Send me a sticker'))

bot.command('photo', (ctx) => ctx.replyWithPhoto({ url: PhotoURL }))

bot.hears('hi', (ctx) => ctx.reply('Hey there')) // listen and handle when user type hi text






module.exports = bot