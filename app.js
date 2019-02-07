var express = require('express');
var app = express();
app.engine('html', require('ejs').renderFile);
http = require('http'),
server = http.createServer(app),
app.set('view engine', 'ejs');
app.use(express.static('static'));

app.get('/context_c', function (req, res) {
  res.sendFile('index.html' , { root : __dirname});
});

app.get('/context_q', function (req, res) {
  res.sendFile('index2.html' , { root : __dirname});
});

app.get('/highway_c', function (req, res) {
  res.sendFile('index3.html' , { root : __dirname});
});

app.get('/highway_q', function (req, res) {
  res.sendFile('index4.html' , { root : __dirname});
});

app.get('/char_c', function (req, res) {
  res.sendFile('index5.html' , { root : __dirname});
});

app.get('/char_q', function (req, res) {
  res.sendFile('index6.html' , { root : __dirname});
});

app.get('/word_c', function (req, res) {
  res.sendFile('index7.html' , { root : __dirname});
});

app.get('/word_q', function (req, res) {
  res.sendfile('index8.html' , { root : __dirname});
});

app.get('/loss', function (req, res) {
  res.sendfile('loss.html' , { root : __dirname});
});

app.use('/pos/:id', function (req, res, next) {
  console.log('Request Type:', req.method);
  next();
});

app.get('/pos/:nth', function (req, res) {
  res.render('pos.ejs', {'nth': req.params.nth});
});

app.get('/attention/:nth', function (req, res) {
  res.render('heatmap.ejs', {'nth': req.params.nth});
});

app.get('/mainview/:nth', function (req, res) {
  res.render('circle.ejs', {'nth': req.params.nth});
});

app.get('/mainview2/:nth', function (req, res) {
  res.render('circle2.ejs', {'nth': req.params.nth});
});

app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});
