const axios = require('axios');
let totalReviewsAndAvgRating = (obj) => {
  var arr = [1, 2, 3, 4, 5];
  var helperArr = arr.reduce((acc, element) => {
    var key = String(element);
    acc[0] += Number(obj[key]);
    acc[1] += Number(obj[key] * element);
    return acc;
  }, [0, 0]);
  return [helperArr[0], (Math.round(helperArr[1] / helperArr[0] * 100) / 100).toFixed(2)];
}

let QuantitySelectArr = (num) => {
  if (num === 0) {
    return [];
  }
  var num = Math.min(15, num);
  var arr = [...Array(num + 1).keys()];
  return arr.slice(1);
}

let handlePromises = (arr) => {
  console.log('here in handlePromises');
  var data = [];
  var promises = [];
  arr.forEach((element) => {
    promises.push(axios.get(`/products/${element.toString()}/styles`));
    promises.push(axios.get(`/products/${element.toString()}`));
    promises.push(axios.get(`/reviews/meta/${element.toString()}`))
  });

  Promise.all(promises)
    .then(responseArr => {
      for (var i = 0; i <= responseArr.length - 3; i+=3) {
        var result = responseArr[i].data.results.find(style => style["default?"]);
        if(result === undefined) {
          result = responseArr[i].data.results[0];
        }
        data.push({
          defaultStyle: result,
          product: responseArr[i+1].data,
          rating: totalReviewsAndAvgRating(responseArr[i+2].data.ratings)[1]
        });
      }
      console.log(data);
      return data;
      ///this.setState({rp: [...data]}, () => {console.log(this.state)});
    })
    .catch(err => console.log(err));
}

module.exports = { totalReviewsAndAvgRating, QuantitySelectArr, handlePromises }