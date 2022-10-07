import React from 'react';

class StyleEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
    var newId = this.props.id;
    this.props.changeStyle(newId);
  }

  render() {
    return (<div>
      <img className="styleThumbnails" src={this.props.styleObj.photos[0].thumbnail_url} onClick={this.handleClick.bind(this)}></img>
    </div>)

  }
}

export default StyleEntry;