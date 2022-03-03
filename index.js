const { Composer } = require('micro-bot')
// const convertapi = require('convertapi')(process.env.API_SECRET)
const download = require('download')

const puppeteer = require ('puppeteer')
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

async function pdf(url) {
	try {	
		const browser = await puppeteer.launch();   // launch puppeteer API
		const page = await browser.newPage();	
		 //1. Create PDF from URL
		  await page.goto(url)
  
		
		await page.emulateMedia ('screen');
		await page.pdf ({
		path: 'testpdf.pdf', // name of your pdf file in directory
		format: 'A4', //  specifies the format
		printBackground: true      // print background property
		});
		await browser.close();
		process.exit();
	} catch (e) {
		console.log ('our error', e);
	}
	
}


const bot = new Composer()

bot.start((ctx) => ctx.reply('Bem Vindo, me envie um arquivo para ser convertido'))

bot.on('document', async (ctx) => {
    const { file_id: fileId } = ctx.update.message.document
    const fileUrl = await ctx.telegram.getFileLink(fileId)

    await pdf(fileUrl)



    // const resultPromise = await convertapi.convert('pdf', { File: fileUrl })
    // const pdfUrl = await resultPromise.file.url

    // ctx.reply(`Url: ${fileUrl}\n\n Pdf Url: ${pdfUrl}`)
    // ctx.replyWithDocument(pdfUrl)

    ctx.replyWithDocument({source: 'testpdf.pdf'})

})

module.exports = bot