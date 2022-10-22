import React from 'react';
import RPC from './related-product-cards.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: 0,
      end: 3,
      hidePrev: true
    }
  }

  handleNext(e) {
    this.setState({start: 0, end: 3})
  }

  render() {
    return (
      <div id="outfit">
        <div data-testid="outfit">YourOutfit</div>
          {this.state.hidePrev ?
            ('') :
            (<button>Prev</button>)}
        <div className="card" onClick={this.props.add} id={this.state.start}>
          <FontAwesomeIcon icon={faPlus} />
          <p>Add to Outfit</p>
        </div>
        {this.props.list.map((element, index) => {
          return(
            <RPC action={false} key={index} remove={this.props.removeProd}
              info={JSON.parse(localStorage.getItem(element))} redirect={this.props.changeProduct}
            />
          )
        })}
        <button>Next</button>
    </div>
    )
  }
}

export default Carousel;