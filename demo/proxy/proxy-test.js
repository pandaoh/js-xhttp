const request = require('request');
const express = require('express');

const app = express();

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});

app.get('/get', (req, res) => {
  request(
    {
      url: 'http://localhost:666/hello/world?q=123',
      method: 'GET',
      json: true,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(req.body)
    },
    function (error, response, body) {
      if (error) {
        console.log('---------------ERROR----------------');
        console.log(error);
        res.status(response.statusCode).send(error);
        res.end();
        console.log('---------------ERROR----------------');
      } else {
        console.log('---------------SUCCESS----------------');
        console.log(body);
        res.status(response.statusCode).send(body);
        res.end();
        console.log('---------------SUCCESS----------------');
      }
    }
  );
});

app.listen(10086);
console.log('proxy started at port 10086...');

// const Koa = require('koa');
// const KoaRouter = require('koa-router');
// const cors = require('koa-cors');

// const app = new Koa();
// const router = new KoaRouter();
// app.use(cors());

// router.get('/get', async (ctx, next) => {
//   return new Promise((resolve) =>
//     request(
//       {
//         url: 'http://localhost:666/hello/world?q=123',
//         method: 'GET',
//         json: true,
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: ctx.request.body
//       },
//       function (error, response, body) {
//         ctx.status = response.statusCode;
//         if (error) {
//           console.log('---------------ERROR----------------');
//           console.log(error);
//           ctx.body = error;
//           resolve(next());
//           console.log('---------------ERROR----------------');
//         } else {
//           console.log('---------------SUCCESS----------------');
//           console.log(body);
//           ctx.body = body;
//           resolve(next());
//           console.log('---------------SUCCESS----------------');
//         }
//       }
//     )
//   );
// });

// app.use(router.routes());

// app.on('error', (err) => {
//   console.log('server error', err);
// });

// app.listen(10010);
// console.log('proxy started at port 10010...');
