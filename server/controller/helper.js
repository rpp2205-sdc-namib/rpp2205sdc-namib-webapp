require('dotenv').config();
const axios = require('axios');
const API_Link = `https://app-hrsei-api.herokuapp.com/api/fec2/${process.env.CAMPUS_CODE}`;

module.exports = {

  getProductHandler: (req, res) => {
    var product_id = req.params.product_id;
    axios.get(`${API_Link}/products/${product_id}`, {headers: {Authorization: process.env.access_token}})
      .then(response => {
      console.log(response.data);
      res.status(200).send(response.data)
      })
      .catch(err => {
        console.error(err);
        res.status(500).send(err);
      })

  },

  getReviewsHandler: (req, res) => {
    console.log(req.params);
    var product_id = req.params.product_id;
    var count = req.params.count;
    var page = req.params.page;
    var sort = req.params.sort;

   if (req.url.includes('meta')) {
    axios.get(`${API_Link}/reviews/meta?product_id=${product_id}`, {headers: {Authorization: process.env.access_token}})
      .then(response => {console.log(response); res.status(200).send(response.data)})
      .catch(err => {console.error(err); res.status(500).send(err)});
   } else {
      axios.get(`${API_Link}/reviews?product_id=${product_id}&count=${count}&page=${page}&sort=${sort}`, {headers: {Authorization: process.env.access_token}})
        .then(response => {console.log(response); res.status(200).send(response.data)})
        .catch(err => {console.error(err); res.status(500).send(err)});
   }
  },

  getQuestionsHandler: (req, res) => {
    var product_id = req.params.product_id;

    axios.get(`${API_Link}/qa/questions?product_id=${product_id}`, {
      headers: {
        'Authorization': process.env.access_token
      }
    })
    .then(response => {
      res.status(200).send(response.data);
    })
    .catch(err => {
      res.sendStatus(500);
    })
  },

  postReviewHandler: (req, res) => {
    var { rating, recommend, characteristics, summay, body } = req.body;
    axios.post(`${API_Link}/reviews`, {product_id, rating, summary, })
  },


};
