const cluster = require('cluster');
// const http = require('http');
// const numCPUs = require('os').cpus().length;

// if (cluster.isMaster) {
//   console.log(`Master ${process.pid} is running`);

//   // Fork workers.
//   for (let i = 0; i < numCPUs; i++) {
//     cluster.fork();
//   }

//   cluster.on('exit', (worker, code, signal) => {
//     console.log(`worker ${worker.process.pid} died`);
//   });
// } else {
 
  // Workers can share any TCP connection
  const Telegraf = require('telegraf');
  const Telegram = require('telegraf/telegram');
  const telegram = new Telegram(process.env.token, { agent: null, webhookReply: true });

  const bot = new Telegraf(process.env.token);

  bot.start((ctx) => ctx.reply('Welcome!'));
  bot.help((ctx) => ctx.reply('Send me a sticker'));
  bot.on('sticker', (ctx) => ctx.reply('рџ‘Ќ'));
  bot.hears('hi', (ctx) => ctx.reply('Hey there'));
  bot.hears(/buy/i, (ctx) => ctx.reply('Buy-buy'));
  telegram.answerInlineQuery().then(res=>{console.log(res)});

  bot.startPolling();
  
//   http.createServer((req, res) => {
//     res.writeHead(200);
//     res.end('hello world\n');
//   }).listen(process.env.port || 8080);

//   console.log(`Worker ${process.pid} started`);
// }
