import React from 'react';

const highlightStyle = {"borderStyle": "solid", "color": "rgb(116, 196, 65)", "borderWidth": "2.5px"};
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
    var checkDisplay = this.props.highlight ? "initial" : "none";
    return (
    <div className="styleThumbnails-parent">
      <img className="styleThumbnails-check" src="img/check-icon.png" style={{"display": checkDisplay}}/>
      <div className="styleThumbnails-container" style={this.props.highlight ? highlightStyle : nonHighlightStyl}>
        <img className="styleThumbnails" src={this.props.styleObj.photos[0].thumbnail_url || 'img/NoImageThumbnail.png'} onClick={this.handleMouseOver.bind(this)}></img>
      </div>
    </div>
   )

  }
}

export default StyleEntry;