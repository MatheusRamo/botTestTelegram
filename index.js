// const Telegraf = require('telegraf') // import telegram lib
const { Composer } = require('micro-bot')
const axios = require('axios')



// const convertapi = require('convertapi')('<YOUR SECRET HERE>');
// convertapi.convert('pdf', {
//     File: '/path/to/my_file.doc'
// }, 'doc').then(function(result) {
//     result.saveFiles('/path/to/dir');
// })

const bot = new Composer()

const PhotoURL = 'https://picsum.photos/200/300/?random'

bot.start((ctx) => ctx.reply('Welcome'))

bot.on('document', async (ctx) => {
    const {file_id: fileId} = ctx.update.message.document
    const fileUrl = await ctx.telegram.getFileLink(fileId)
    const response = await axios.get(fileUrl)
    ctx.reply('Aqui está o seu arquivo:\n\n' + response.data);
})

bot.command('photo', (ctx) => ctx.replyWithPhoto({ url: PhotoURL }))





module.exports = bot