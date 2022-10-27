import React from 'react';
import withClickData from '../hoc_click_data.jsx';

const highlightStyle = {"borderStyle": "solid", "color": "rgb(116, 196, 65)", "borderWidth": "2.5px"};
const nonHighlightStyl = {"borderStyle": "none"};


class StyleEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick(e) {
    var newId = this.props.id;
    this.props.changeStyle(newId);
    this.props.interaction(e.target);
  }

  render() {
    var checkDisplay = this.props.highlight ? "initial" : "none";
    return (
    <div className="styleThumbnails-parent">
      <img className="styleThumbnails-check" src="img/check-icon.png" style={{"display": checkDisplay}}/>
      <div className="styleThumbnails-container" style={this.props.highlight ? highlightStyle : nonHighlightStyl}>
        <img className="styleThumbnails" id={"styleThumbnails" + this.props.id} src={this.props.styleObj.photos[0].thumbnail_url || 'img/NoImageThumbnail.png'} onClick={this.handleClick.bind(this)} width="50px"></img>
      </div>
    </div>
   )

  }
}

export default withClickData(StyleEntry, 'overview');