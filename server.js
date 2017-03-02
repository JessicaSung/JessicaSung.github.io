const bodyParser = require('body-parser');
const express = require('express');
const logger = require('morgan');

// Express port declaration
const PORT = process.env.PORT || 3000;
const app = express();


// MIDDLEWARE
// ===============================================
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));


// Connection to PORT
// ===============================================
app.listen(PORT, () => {
	console.log('Listening on port: ', PORT);
});