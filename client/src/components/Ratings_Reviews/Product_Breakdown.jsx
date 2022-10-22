import React from 'react';

const ratingInPercentage = (value) => {
  let result = `${((value/5)*100).toFixed(2)}%`
  return result;
  // const percentage = `${parseInt(totalSpecificRatings/totalRatings).toFixed(2)*100}%`
  // console.log('Ratings_Breakdown.jsx - percentageOfTotalReviews() - totalRatings', totalRatings);
  // console.log('Ratings_Breakdown.jsx - percentageOfTotalReviews() - data3', percentageOfTotalSpecificRatings);
  // return percentageOfTotalSpecificRatings;
}

const Product_Breakdown = ({reviewsMeta}) => {
  console.log(Object.entries(reviewsMeta.characteristics));


  return (
    <div id='characteristics'>
        {
            Object.entries(reviewsMeta.characteristics).map(([key, val]) =>
                <div key={val.id} id="characteristic">
                  <div>{key}</div>
                  <div className="progress">
                    <div className="bar" style={{width:`${ratingInPercentage(val.value)}`}}>
                      <div className="arrow"></div>
                    </div>
                  </div>
                </div>
            )
        }
    </div>
  );

}

export default Product_Breakdown;


{/* <div className="progress">
<div className="bar" style={{width:`${ratingInPercentage(parseInt(val.value))}`}}></div>
<p className="percent">{this.state.fiveStarReviews}</p>
</div> */}

{/* <div className="seperator" style={{left:`20%`}}></div>
<div className="seperator" style={{left:`40%`}}></div>
<div className="seperator" style={{left:`60%`}}></div> */}
{/* <div className="seperator" style={{left:`80%`}}></div> */}