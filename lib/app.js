const Koa = require('koa');

const app = new Koa();

app.use((ctx) => {
  if (ctx.method === 'GET' && ctx.path === '/user') {
    ctx.body = 'hello, friend';
  }
});


module.exports = app;
