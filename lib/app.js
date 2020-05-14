const Koa = require('koa');

const app = new Koa();

app.use((ctx) => {
  console.log(ctx.method, ctx.path);
  if (ctx.method === 'GET' && ctx.path === '/user') {
    ctx.body = 'hello, friend';
  }
});

module.exports = app;
