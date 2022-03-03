const { Composer } = require('micro-bot')
// const convertapi = require('convertapi')(process.env.API_SECRET)
const download = require('download')

const libre = require('libreoffice-convert')
const fs = require('fs')

function convertToPdf(filePath) {

   const file = fs.readFileSync(filePath)
 
   libre.convert(file, extend, undefined, (err, done) => {
      if (err) {
        console.log(`Error converting file: ${err}`)
      }
 
      fs.writeFileSync('outputFile.pdf', done)
  })
}


const bot = new Composer()

bot.start((ctx) => ctx.reply('Bem Vindo, me envie um arquivo para ser convertido'))

bot.on('document', async (ctx) => {
    const { file_id: fileId } = ctx.update.message.document
    const fileUrl = await ctx.telegram.getFileLink(fileId)


    // Download the file
    (async () => {
        await download(fileUrl, './')
    })()



    // const resultPromise = await convertapi.convert('pdf', { File: fileUrl })
    // const pdfUrl = await resultPromise.file.url

    // ctx.reply(`Url: ${fileUrl}\n\n Pdf Url: ${pdfUrl}`)
    // ctx.replyWithDocument(pdfUrl)

    ctx.reply(`FileId: ${fileId}`)
})

module.exports = bot