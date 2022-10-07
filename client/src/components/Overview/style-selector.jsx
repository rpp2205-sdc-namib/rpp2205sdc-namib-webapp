import React from 'react';
import StyleEntry from './style-entry.jsx';
import axios from 'axios';

class StyleSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {styles: []}
  }

  componentDidMount() {
    axios.get(`/products/${this.props.productId}/styles`)
      .then(response => {
        this.setState({styles: response.data.results})
      })
      .catch(err => {
        console.error(err);
      })
  }

  render() {
    if (this.state.styles.length === 0) {
      return null;
    } else {
      return (<div className="style-selector">
        <p>{'Style > ' + this.props.styleObj.name}</p>
        <div className="styles">
        {this.state.styles.map((style, index) => {
          return (<div className="styleEntries" key={index}>
            <StyleEntry id={style.style_id} styleObj={style} changeStyle={this.props.changeStyle}/></div>)
        })}
        </div>
      </div>
      )
    }


  }
}

export default StyleSelector;