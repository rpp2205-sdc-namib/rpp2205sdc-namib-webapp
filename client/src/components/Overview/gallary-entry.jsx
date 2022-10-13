import React from 'react';

const highlightStyle = {"borderStyle": "solid", "color": "orange", "borderWidth": "2px"};
const nonHighlightStyle = {"borderStyle": "none"};

class GallaryEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  handleMouseOver(e) {
    var newId = this.props.id;
    this.props.changeCurrentPhoto(newId);
  }

  render() {
    return (<div>
      <img className="gallary-entry" src={this.props.photoInfo.thumbnail_url} onMouseOver={this.handleMouseOver.bind(this)} style={this.props.highlight ? highlightStyle : nonHighlightStyle}></img>
    </div>)

  }
}

export default GallaryEntry;