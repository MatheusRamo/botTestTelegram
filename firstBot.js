const Telegraf = require('telegraf') // import telegram lib

const bot = new Telegraf('5125681835:AAH43gW3B4fSyRj1IaHjCkdmx4PwCid6Zj8') // get the token from envirenment variable
bot.start((ctx) => ctx.reply('Welcome')) // display Welcome text when we start bot
bot.hears('hi', (ctx) => ctx.reply('Hey there')) // listen and handle when user type hi text
bot.launch() //start