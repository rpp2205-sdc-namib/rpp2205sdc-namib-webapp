import React from 'react';
import GallaryEntry from './gallary-entry.jsx';

class ImageGallary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentPhotoIndex: 0}
  }

  handleForward () {
    var oldId = this.state.currentPhotoIndex;
    if (oldId < this.props.photos.length) {
      this.changeCurrentPhoto(oldId + 1);
    }
  }

  handleBackward () {
    var oldId = this.state.currentPhotoIndex;
    if (oldId > 0) {
      this.changeCurrentPhoto(oldId - 1);
    }
  }

  changeCurrentPhoto(newIndex) {
    this.setState({currentPhotoIndex: newIndex});
  }

  render() {
    return (<div className="image-gallary">
      <div className="gallary-list">{this.props.photos.map((photo, index) => {
        return (<div key={index}>
          <GallaryEntry id={index} photoInfo={photo} changeCurrentPhoto={this.changeCurrentPhoto.bind(this)} highlight={this.state.currentPhotoIndex === index}/>
        </div>)
      })}
      </div>
      <div className="current-photo">
        <img id="current-photo" src={this.props.photos[this.state.currentPhotoIndex].url}></img>
        <button id="backBtn" onClick={this.handleBackward.bind(this)}>Back</button>
        <button id="forwardBtn" onClick={this.handleForward.bind(this)}>Forward</button>
      </div>

    </div>)

  }
}

export default ImageGallary;