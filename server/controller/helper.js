require('dotenv').config();
const axios = require('axios');
const fs = require('fs');
const API_Link = `https://app-hrsei-api.herokuapp.com/api/fec2/${process.env.CAMPUS_CODE}`;
const auth = {headers: {Authorization: process.env.access_token}};

module.exports = {

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

  updateHelpfulCountsForQuestion: (req, res) => {
    var question_id = req.params.question_id;

    axios.put(`${API_Link}/qa/questions/${question_id}/helpful`, {question_id}, auth)
    .then(response => {
      res.status(204).send(response.data);
    })
    .catch(err => {
      console.log('err: ', err);
      res.sendStatus(500);
    });
  },

  updateHelpfulCountsForAnswer: (req, res) => {
    var answer_id = req.params.answer_id;

    axios.put(`${API_Link}/qa/answers/${answer_id}/helpful`, {answer_id}, auth)
    .then(response => {
      res.status(204).send(response.data);
    })
    .catch(err => {
      console.log('err: ', err);
      res.sendStatus(500);
    });
  },

  updateReportForQuestion: (req, res) => {
    var question_id = req.params.question_id;

    axios.put(`${API_Link}/qa/questions/${question_id}/report`, {question_id}, auth)
    .then(response => {
      res.status(204).send(response.data);
    })
    .catch(err => {
      console.log('err: ', err);
      res.sendStatus(500);
    });
  },

  updateReportForAnswer: (req, res) => {
    var answer_id = req.params.answer_id;

    axios.put(`${API_Link}/qa/questions/${answer_id}/report`, {answer_id}, auth)
    .then(response => {
      res.status(204).send(response.data);
    })
    .catch(err => {
      console.log('err: ', err);
      res.sendStatus(500);
    });
  },

  postQuestionHandler: (req, res) => {
    var body = req.body.body;
    var name = req.body.name;
    var email = req.body.email;
    var product_id = parseInt(req.body.product_id);

    // console.log('body: ', body)
    // console.log('name: ', name)
    // console.log('email: ', email)
    // console.log('productId: ', product_id)

    axios.post(`${API_Link}/qa/questions`, {
      body, name, email, product_id
    }, auth)
    .then(response => {
      res.status(201).send(response.data);
    })
    .catch(err => {
      console.log('err: ', err);
      res.sendStatus(500);
    });
  },

  postAnswerHandler: (req, res) => {
    var question_id = req.params.question_id;
    var { body, name, email, photos } = req.body;

    axios.post(`${API_Link}/qa/questions/${question_id}/answers`, {
      question_id, body, name, email, photos
    }, auth)
    .then(response => {
      res.status(201).send(response.data);
    })
    .catch(err => {
      console.log('err: ', err);
      res.sendStatus(500);
    });
  },

  uploadPhotosHandler: (req, res) => {
    let productId = req.params.product_id;
    let question_id = req.params.question_id;
    let image_name = req.params.image_name;
    let rootDir = './atelier';
    let productDir = productId;
    let questionDir = question_id;

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir)
    } else {

    }
  }

};
