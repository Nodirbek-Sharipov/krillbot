const Telegraf = require('telegraf')
const Telegram = require('telegraf/telegram')
const telegram = new Telegram(process.env.token, { agent: null, webhookReply: true })
 
const bot = new Telegraf(process.env.token)
 
bot.start((ctx) => ctx.reply('Welcome!'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('рџ‘Ќ'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.hears(/buy/i, (ctx) => ctx.reply('Buy-buy'))
telegram.answerInlineQuery().then(res=>{console.log(res)});
 
bot.startPolling()
