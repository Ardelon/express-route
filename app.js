const express = require('express')
const app = express();
const path = require('path')

app.get('/home', function (req, res) {
  console.count('home');
  console.log(path.join(__dirname +'/public/home/home.html'));
  res.sendFile(path.join(__dirname, '/public/home/home.html'))
})

app.get('/article:ss', function (req, res) {
  console.count('article');
  console.log(req.params);
  // console.log(path.join(__dirname +'/public/article/home.html'));
  // res.sendFile(path.join(__dirname, '/public/article/home.html'))
})

app.get('/', function (req,res) {
  console.count('redirect');
  res.redirect('/home')
})

app.listen(3310)