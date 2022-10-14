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
    if (this.props.section === 'overview') {
      return (<div>
        <img className="gallary-entry" src={this.props.photoInfo.thumbnail_url} onMouseOver={this.handleMouseOver.bind(this)} style={this.props.highlight ? highlightStyle : nonHighlightStyle}></img>
      </div>)
    } else {
      return (
        <div>
          <span class="dot" src={this.props.photoInfo.thumbnail_url} onMouseOver={this.handleMouseOver.bind(this)} style={this.props.highlight ? highlightStyle : nonHighlightStyle}></span>
        </div>
      )
    }
  }
}

export default GallaryEntry;