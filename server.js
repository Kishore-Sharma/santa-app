// server.js
// where your node app starts

// init project
const express = require('express');
const morgan = require('morgan');
const app = express();
const { sendMailInInterval } = require('./src/controller/mailer');


app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(morgan());

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));
app.use('/css', express.static(`${__dirname}public`));

app.set('views', './src/views');
app.set('view engine', 'ejs');

const santaRoute = require('./src/router/santa');
app.use('/', santaRoute);

// listen for requests :)
const listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
  sendMailInInterval()
});
