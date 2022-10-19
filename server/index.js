const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const bodyParser = require('body-parser');
const { getProductHandler, getRelatedHandler, getStylesHandler, getReviewsHandler, getQuestionsHandler, getAnswersHandler, updateHelpfulCountsForQuestion, updateHelpfulCountsForAnswer, updateReportForQuestion, updateReportForAnswer } = require('./controller/helper.js');

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../client/dist')));

//get routes
app.get('/products/:product_id', getProductHandler);

app.get('/products/:product_id/styles', getStylesHandler);

app.get('/reviews/meta/:product_id', getReviewsHandler);

app.get('/reviews/:product_id/:count', getReviewsHandler);

app.get('/qa/questions/:product_id', getQuestionsHandler);

app.get('/qa/questions/:question_id/answers', getAnswersHandler);

app.get('/products/:product_id/related', getRelatedHandler);


//post routes
app.post('/products', (req, res) => {

});

app.post('/reviews', (req, res) => {

});



//put routes
app.put('/products', (req, res) => {

});

app.put('/reviews', (req, res) => {

});

app.put('/qa/questions/:question_id/helpful', updateHelpfulCountsForQuestion);

app.put('/qa/answers/:answer_id/helpful', updateHelpfulCountsForAnswer);

app.put('qa/questions/:question_id/report', updateReportForQuestion);

app.put('/qa/answers/:answer_id/report', updateReportForAnswer);


app.listen(port, () => {
  console.log(`Listening on  http://localhost:${port}`);
});


//app.get('/reviews/:product_id/:count/:page/:sort', getReviewsHandler);