import React from 'react';

const highlightStyle = {"borderStyle": "solid", "color": "orange", "borderWidth": "2.5px"};
const nonHighlightStyl = {"borderStyle": "none"};

class StyleEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  handleMouseOver() {
    var newId = this.props.id;
    this.props.changeStyle(newId);
  }

  render() {
    return (<div>
      <img className="styleThumbnails" src={this.props.styleObj.photos[0].thumbnail_url || 'img/NoImageThumbnail.png'} onClick={this.handleMouseOver.bind(this)} style={this.props.highlight ? highlightStyle : nonHighlightStyl}></img>
    </div>)

  }
}

export default StyleEntry;