const { Composer } = require('micro-bot')
const convertapi = require('convertapi')(process.env.API_SECRET)


const bot = new Composer()

bot.start((ctx) => ctx.reply('Bem Vindo, me envie um arquivo para ser convertido'))

bot.on('document', async (ctx) => {
    const { file_id: fileId} = ctx.update.message.document
    const fileUrl = await ctx.telegram.getFileLink(fileId)

    const resultPromise = await convertapi.convert('pdf', { File: fileUrl })
    const pdfUrl = await resultPromise.file.url

    ctx.reply(`Url: ${fileUrl}\n\n Pdf Url: ${pdfUrl}`)
    ctx.replyWithDocument({ source: pdfUrl , filename: 'yourFile' })
})

module.exports = bot