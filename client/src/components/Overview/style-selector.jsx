import React from 'react';
import StyleEntry from './style-entry.jsx';
import axios from 'axios';

class StyleSelector extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (<div className="style-selector">
      <p>{'Style > ' + this.props.styleObj.name}</p>
      <div className="styles">
      {this.props.styles.map((style, index) => {
        return (<div className="styleEntries" key={index}>
          <StyleEntry id={style.style_id} styleObj={style} changeStyle={this.props.changeStyle} highlight={this.props.styleId === style.style_id}/></div>)
      })}
      </div>
    </div>
    )
  }
}

export default StyleSelector;