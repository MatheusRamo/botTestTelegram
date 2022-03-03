const { Composer } = require('micro-bot')
const axios = require('axios')
const convertapi = require('convertapi')('YUq0lPxMCF5ERedm')


const bot = new Composer()
const PhotoURL = 'https://picsum.photos/200/300/?random'

bot.start((ctx) => ctx.reply('Welcome'))

bot.on('document', async (ctx) => {
    const { file_id: fileId } = ctx.update.message.document
    const fileUrl = await ctx.telegram.getFileLink(fileId)

    const resultPromise = await convertapi.convert('pdf', { File: fileUrl })
    const pdfUrl = await resultPromise.file.url
    
    ctx.reply(`Url: ${fileUrl}\n\n Pdf Url: ${pdfUrl}`)
    ctx.replyWithDocument(pdfUrl)
})

bot.command('photo', (ctx) => ctx.replyWithPhoto({ url: PhotoURL }))



module.exports = bot