import React from 'react';
import GallaryEntry from './gallary-entry.jsx';

class ImageGallary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentPhotoIndex: 0, highlightArr: []}
  }

  componentDidMount() {
    var arr = [true];
    for (var i = 0; i < this.props.photos.length - 1; i++) {
      arr.push(false);
    }
    this.setState({highlightArr: arr});
  }

  changeCurrentPhoto(newIndex) {
    var arr = [];
    this.props.photos.forEach((photo, index) => {
      if (index !== newIndex) {
        arr.push(false)
      } else {
        arr.push(true)
      }
    })
    this.setState({currentPhotoIndex: newIndex, highlightArr: arr}, () => {
      console.log(this.state)
    });
  }

  render() {
    if (this.state.highlightArr.length === 0) {
      return null;
    }
    return (<div className="image-gallary">
      <div className="gallary-list">{this.props.photos.map((photo, index) => {
        return (<div key={index}>
          <GallaryEntry id={index} photoInfo={photo} changeCurrentPhoto={this.changeCurrentPhoto.bind(this)} highlight={this.state.highlightArr[index]}/>
        </div>)
      })}
      </div>
      <img className="current-photo" src={this.props.photos[this.state.currentPhotoIndex].url}></img>
    </div>)

  }
}

export default ImageGallary;