const express = require('express');
// const serveStatic = require('serve-static');
const path = require('path');
const app = express();

// set header
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTION');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Cache-Control', 'max-age=290304000, public');
  next();
})

// serve entry file from /dist which is now contains index.html
app.use(express.static(__dirname + '/dist'))
app.get('*', (req, res) => res.sendFile(path.join(__dirname + '/dist/index.html')));

// use robots.txt
app.use('/robots.txt', express.static(path.join(__dirname, '/dist/robots.txt')));

const port = process.env.PORT || 8080;
app.listen(port);
console.log("listening on port " + port)