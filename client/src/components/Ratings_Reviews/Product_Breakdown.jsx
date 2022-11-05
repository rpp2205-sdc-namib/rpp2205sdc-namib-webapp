const data = require("./data.json");

const ratingInPercentage = (value) => {
  let result = `${((value/5)*100).toFixed(2)}%`
  return result;
}

const Product_Breakdown = ({reviewsMeta}) => {
  return (
    <div id='characteristics'>
        {
          Object.entries(reviewsMeta.characteristics).map(([key, val]) =>
            <div id="characteristic" key={val.id}>
              <div id="characteristic_name">{key}</div>
              <div className="guages">
              <div className="characteristic_guage_1">
                <div className="bar_1" style={parseInt(val.value) < 1 ? {width:`${ratingInPercentage(val.value)}`} : {width:"0%"}}>
                  {parseInt(val.value) < 1 ? <div className="arrow"></div> : <div></div>}
                </div>
              </div>
              <div className="breakdown_1">{data.characteristics[key][1]}</div>
              <div className="characteristic_guage_2">
                <div className="bar_2" style={parseInt(val.value) < 2 && parseInt(val.value) > 0.99 ? {width:`${ratingInPercentage(val.value)}`} : {width:"0%"}}>
                  {parseInt(val.value) < 2 && parseInt(val.value) > 0.99 ? <div className="arrow"></div> : <div></div>}
                </div>
              </div>
              <div className="breakdown_2">{data.characteristics[key][2]}</div>
              <div className="characteristic_guage_3">
                <div className="bar_3" style={parseInt(val.value) < 3 && parseInt(val.value) > 1.99 ? {width:`${ratingInPercentage(val.value)}`} : {width:"0%"}}>
                  {parseInt(val.value) < 3 && parseInt(val.value) > 1.99 ? <div className="arrow"></div> : <div></div>}
                </div>
              </div>
              <div className="breakdown_3">{data.characteristics[key][3]}</div>
              <div className="characteristic_guage_4">
                <div className="bar_4" style={parseInt(val.value) < 4 && parseInt(val.value) > 2.99 ? {width:`${ratingInPercentage(val.value)}`} : {width:"0%"}}>
                  {parseInt(val.value) < 4 && parseInt(val.value) > 2.99 ? <div className="arrow"></div> : <div></div>}
                </div>
              </div>
              <div className="breakdown_4">{data.characteristics[key][4]}</div>
              <div className="characteristic_guage_5">
                <div className="bar_5" style={parseInt(val.value) <= 5 && parseInt(val.value) > 3.99 ? {width:`${ratingInPercentage(val.value)}`} : {width:"0%"}}>
                  {parseInt(val.value) <= 5 && parseInt(val.value) > 3.99 ? <div className="arrow"></div> : <div></div>}
                </div>
              </div>
              <div className="breakdown_5">{data.characteristics[key][5]}</div>
              </div>
            </div>
          )
        }
    </div>
  );
}

export default Product_Breakdown;