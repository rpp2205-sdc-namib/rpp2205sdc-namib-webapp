import React from 'react';
import GallaryEntry from './gallary-entry.jsx';

class ImageGallary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentPhotoIndex: 0 };
  }

  currentPhotoArray(max) {
     //max number of photos allowed in the screen, if exceeded, arrow down appears to click to next photo
    return this.props.photos.slice(this.state.currentPhotoIndex, this.state.currentPhotoIndex + max);
  }

  handleForward() {
    var oldId = this.state.currentPhotoIndex;
    if (oldId < this.props.photos.length - 1) {
      this.changeCurrentPhoto(oldId + 1);
    }
  }

  handleBackward() {
    var oldId = this.state.currentPhotoIndex;
    if (oldId > 0) {
      this.changeCurrentPhoto(oldId - 1);
    }
  }

  handleClick() {
    if(this.props.section === 'overview') {
      this.props.handleModalAppear();
      this.props.handleBackground("rgba(192,192,192,0.8)");
    } else {
      this.props.handleModalDisappear();
      this.props.handleBackground("white");
    }
  }

  changeCurrentPhoto(newIndex) {
    this.setState({ currentPhotoIndex: newIndex });
  }

  render() {
    var currentPhotos = this.currentPhotoArray(4);
    if (this.props.section === 'modal') {
      return (
        <div data-testid="test-ImageGallary-modal" className="image-gallary-modal">
          <div className="gallary-list-modal">{currentPhotos.map((photo, index) => {
            return (<div key={index}>
              <GallaryEntry id={index} photoInfo={photo} changeCurrentPhoto={this.changeCurrentPhoto.bind(this)} highlight={this.state.currentPhotoIndex === index} section='modal'/>
            </div>)
          })}
          </div>
          <div className="current-photo-modal">
            <img id="current-photo-modal" src={this.props.photos[this.state.currentPhotoIndex].url}></img>
            <button id="backBtn-modal" onClick={this.handleBackward.bind(this)}>Back</button>
            <button id="forwardBtn-modal" onClick={this.handleForward.bind(this)}>Forward</button>
            <button id="default-view" onClick={this.handleClick.bind(this)}>Default View</button>
          </div>
        </div>
      )
    }
    return (
      <div className="image-gallary" data-testid="test-ImageGallary">
        <div className="gallary-list">{currentPhotos.map((photo, index) => {
          return (<div key={index}>
            <GallaryEntry id={index} photoInfo={photo} changeCurrentPhoto={this.changeCurrentPhoto.bind(this)} highlight={this.state.currentPhotoIndex === index} section='overview'/>
          </div>)
        })}
        </div>
        <div className="current-photo">
          <img id="current-photo" src={this.props.photos[this.state.currentPhotoIndex].url}></img>
          <button id="backBtn" onClick={this.handleBackward.bind(this)}>Back</button>
          <button id="forwardBtn" onClick={this.handleForward.bind(this)}>Forward</button>
          <button id="expanded-view" onClick={this.handleClick.bind(this)}>Expand</button>
        </div>
      </div>)

  }
}

export default ImageGallary;