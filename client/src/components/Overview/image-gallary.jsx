import React from 'react';
import GallaryEntry from './gallary-entry.jsx';

class ImageGallary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentPhotoIndex: 0, top: 0, bottom: 3};
  }

  handleArrowUp() {
    this.setState({top: this.state.top - 1, bottom: this.state.bottom - 1});
  }

  handleArrowDown() {
    this.setState({top: this.state.top + 1, bottom: this.state.bottom + 1});
  }

  handleForward() {
    var oldId = this.state.currentPhotoIndex;
    var newId = oldId + 1;
    if (oldId < this.props.photos.length - 1) {
      this.changeCurrentPhoto(oldId + 1);
      if (newId > this.state.bottom) {
        this.setState({bottom: this.state.bottom + 1, top: this.state.top + 1})
      }
    };


  }

  handleBackward() {
    var oldId = this.state.currentPhotoIndex;
    var newId = oldId - 1;
    if (oldId > 0) {
      this.changeCurrentPhoto(newId);
      if (newId < this.state.top) {
        this.setState({top: this.state.top - 1, bottom: this.state.bottom - 1})
      }
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
    if (this.props.section === 'modal') {
      return (
        <div data-testid="test-ImageGallary-modal" className="image-gallary-modal">
          <div className="gallary-list-modal">{this.props.photos.map((photo, index) => {
            return (<div key={index}>
              <GallaryEntry id={index} photoInfo={photo} changeCurrentPhoto={this.changeCurrentPhoto.bind(this)} highlight={this.state.currentPhotoIndex === index} section='modal'/>
            </div>)
          })}
          </div>
          <div className="current-photo-modal">
            <img id="current-photo-modal" src={this.props.photos[this.state.currentPhotoIndex]?.url || 'img/NoImageThumbnail.png'}></img>
            <button id="backBtn-modal" onClick={this.handleBackward.bind(this)}>Back</button>
            <button id="forwardBtn-modal" onClick={this.handleForward.bind(this)}>Forward</button>
            <button id="default-view" onClick={this.handleClick.bind(this)}>Default View</button>
          </div>
        </div>
      )
    }
    return (
      <div className="image-gallary" data-testid="test-ImageGallary">
        <div className="gallary-list">
          {this.state.top === 0 ? null : <div className="arrow-up" onClick={this.handleArrowUp.bind(this)}></div>}
          {this.props.photos.map((photo, index) => {
          return (<div key={index}>
            <GallaryEntry id={index} photoInfo={photo} changeCurrentPhoto={this.changeCurrentPhoto.bind(this)} highlight={this.state.currentPhotoIndex === index} section='overview' top={this.state.top} bottom={this.state.bottom}/>
          </div>)
        })}
        {this.state.bottom === this.props.photos.length - 1 ? null : <div className="arrow-down" onClick={this.handleArrowDown.bind(this)}></div>}
        </div>
        <div className="current-photo">
          <img id="current-photo" src={this.props.photos[this.state.currentPhotoIndex]?.url || 'img/NoImageThumbnail.png'}></img>
          <button id="backBtn" onClick={this.handleBackward.bind(this)}>Back</button>
          <button id="forwardBtn" onClick={this.handleForward.bind(this)}>Forward</button>
          <button id="expanded-view" onClick={this.handleClick.bind(this)}>Expand</button>
        </div>
      </div>)

  }
}

export default ImageGallary;