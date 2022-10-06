module.exports = {

  avgRating: (obj) => {
    var arr = [1, 2, 3, 4, 5];
    var helperArr = arr.reduce((acc, element) => {
      var key = String(element);
      acc[0] += Number(obj[key]);
      acc[1] += Number(obj[key] * element);
      return acc;
    }, [0, 0]);
    return (Math.round(helperArr[1] / helperArr[0] * 100) / 100).toFixed(2);
  },

}