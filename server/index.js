const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

//get routes
app.get('/products', (req, res) => {

});

app.get('/reviews', (req, res) => {

});

app.get('/qa/questions', (req, res) => {

});


//post routes
app.post('/products', (req, res) => {

});

app.post('/reviews', (req, res) => {

});

app.post('/qa/questions', (req, res) => {

});


//put routes
app.put('/products', (req, res) => {

});

app.put('/reviews', (req, res) => {

});

app.put('/qa/questions', (req, res) => {

});


app.listen(port, () => {
  console.log(`Listening on  http://localhost:${port}`);
});