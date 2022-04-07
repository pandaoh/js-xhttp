const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.post('/post/:name', function (req, res) {
  res.status(200).send({
    status: 200,
    path: req.path,
    url: req.url,
    method: req.method,
    data: {
      body: req.body,
      query: req.query,
      querystring: req.originalUrl.split('?')[1],
      params: req.params
    },
    msg: 'POST test'
  });
});

const server = app.listen(888, function () {
  let host = server.address().address;
  let port = server.address().port;

  console.log('server：http://localhost:%s', port);
});
