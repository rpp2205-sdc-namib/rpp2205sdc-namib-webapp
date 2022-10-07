import React from 'react';

class GallaryEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick(e) {
    var newId = this.props.id;
    this.props.changeCurrentPhoto(newId);
  }

  render() {
    return (<div>
      <img className="gallary-entry" src={this.props.photoInfo.thumbnail_url} onClick={this.handleClick.bind(this)} style={}></img>
    </div>)

  }
}

export default GallaryEntry;