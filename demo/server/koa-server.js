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
  let status = Number(path?.split('/')[1] ?? 200) || 400;
  ctx.status = status;
  ctx.body = {
    path,
    url: ctx.request.url,
    status,
    method,
    data: {
      body: ctx.request.body,
      query: ctx.request.query,
      querystring: ctx.request.querystring
    },
    msg: `${method}[${path}](请求完成-${status})`
  };
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
  await next();
});

// const cors = require('koa-cors');
// app.use(cors());

// router.post('/post', async (ctx, next) => {
//   const { path, method } = ctx;
//   let data = {
//     body: ctx.request.body,
//     query: ctx.request.query,
//     querystring: ctx.request.querystring
//   };
//   ctx.body = {
//     status: 200,
//     path,
//     method,
//     data,
//     msg: 'POST test'
//   };
//   await next();
// });
// router.get('/hello/:name', async (ctx, next) => {
//   let name = ctx.params.name;
//   const { path, method } = ctx;
//   let data = {
//     body: ctx.request.body,
//     query: ctx.request.query,
//     querystring: ctx.request.querystring
//   };
//   ctx.body = {
//     status: 200,
//     path,
//     method,
//     data,
//     msg: `get ${name}`
//   };
//   await next();
// });
// app.use(router.routes());

app.on('error', (err) => {
  console.log('server error', err);
});

app.listen(666);

console.log('app started at port 666...');
