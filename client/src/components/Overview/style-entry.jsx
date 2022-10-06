import React from 'react';

class StyleEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>
      <img src={this.props.styleObj.photos[0].thumbnail_url}></img>
    </div>)

  }
}

export default StyleEntry;