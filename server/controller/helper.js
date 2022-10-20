require('dotenv').config();
const axios = require('axios');
const API_Link = `https://app-hrsei-api.herokuapp.com/api/fec2/${process.env.CAMPUS_CODE}`;
const auth = {headers: {Authorization: process.env.access_token}};

module.exports = {


  postInteractionHandler: (req, res) => {
    var element = req.body.element;
    var widget = req.body.widget;
    var time = req.body.time;
    axios.post(`${API_Link}/interactions`, { element, widget, time }, auth)
      .then(response => {
        res.status(201).send(`${element} from module ${widget} at ${time} was clicked and reported to API successfully!`)
      })
      .catch(err => {!
        res.status(500).send(err);
      })
  },

  getProductHandler: (req, res) => {
    var product_id = req.params.product_id;
    axios.get(`${API_Link}/products/${product_id}`, auth)
      .then(response => {
      res.status(200).send(response.data)
      })
      .catch(err => {
        res.status(500).send(err);
      })

  },

  getRelatedHandler: (req, res) => {
    var product_id = req.params.product_id;
    axios.get(`${API_Link}/products/${product_id}/related`, auth)
      .then(response => {
        res.status(200).send(response.data);
      })
      .catch(err => {
        res.status(500).send(err);
      })
  },

  getStylesHandler: (req, res) => {
    var product_id = req.params.product_id;
    axios.get(`${API_Link}/products/${product_id}/styles`, auth)
      .then(response => {
        res.status(200).send(response.data);
      })
      .catch(err => {
        res.status(500).send(err);
      })
  },

  getReviewsHandler: (req, res) => {
    var product_id = req.params.product_id;
    var count = req.params.count;
    var page = req.params.page;
    var sort = req.params.sort;

   if (req.url.includes('meta')) {
     axios.get(`${API_Link}/reviews/meta?product_id=${product_id}`, {
       headers: {
         'Authorization': process.env.access_token
       }
     })
       .then(response => {
         res.status(200).send(response.data);
       })
       .catch(err => {
         console.error(err, 'test');
         res.status(500).send(err);
       });
   } else {
      axios.get(`${API_Link}/reviews?product_id=${product_id}&count=${count}`, {
        headers: {
          'Authorization': process.env.access_token
        }
      })
        .then(response => {
          res.status(200).send(response.data);
        })
        .catch(err => {
          res.status(500).send(err);
        });
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

  getAnswersHandler: (req, res) => {
    var question_id = req.params.question_id;

    axios.get(`${API_Link}/qa/questions/${question_id}/answers`, {
      headers: {
        'Authorization': process.env.access_token
      }
    })
    .then(response => {
      res.status(200).send(response.data);
    })
    .catch(err => {
      console.log('err: ', err)
      res.sendStatus(500);
    })
  },

  postReviewHandler: (req, res) => {
    var { rating, recommend, characteristics, summay, body } = req.body;
    axios.post(`${API_Link}/reviews`, {product_id, rating, summary, })
  },


};
