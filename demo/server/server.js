const Koa = require('koa');
const KoaBodyParser = require('koa-bodyparser');
const KoaRouter = require('koa-router');

const app = new Koa();
const router = new KoaRouter();

app.use(KoaBodyParser());

app.use(async (ctx, next) => {
  const { path, method } = ctx;
  console.log({ ctx });
  ctx.set('Access-Control-Allow-Origin', '*');
  ctx.set('Content-Type', 'application/json');
  switch (path) {
    case '/200':
    default:
      ctx.status = 200;
      ctx.body = {
        path,
        method,
        res: {
          body: ctx.request.body,
          query: ctx.request.query,
          querystring: ctx.request.querystring
        },
        data: '请求成功test'
      };
      break;
  }
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
  // await next();
});

// router.post('/post', async (ctx, next) => {
//   const { path, method } = ctx;
//   let data = {
//     body: ctx.request.body,
//     query: ctx.request.query,
//     querystring: ctx.request.querystring,
//     method
//   };
//   ctx.body = {
//     path: path,
//     method: method,
//     response: data,
//     data: 'POST'
//   };
// });
// router.get('/hello/:name', async (ctx, next) => {
//   let name = ctx.params.name;
//   const { path, method } = ctx;
//   let data = {
//     body: ctx.request.body,
//     query: ctx.request.query,
//     querystring: ctx.request.querystring,
//     method
//   };
//   ctx.body = {
//     path: path,
//     method: method,
//     response: data,
//     data: 'get ' + name
//   };
// });
// app.use(router.routes());

app.on('error', (err) => {
  console.log('server error', err);
});

app.listen(3000);
console.log('app started at port 3000...');
