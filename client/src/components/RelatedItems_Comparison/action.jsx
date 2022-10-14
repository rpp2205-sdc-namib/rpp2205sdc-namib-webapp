import React from 'react';

class Action extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  removeProduct(e) {
    e.preventDefault();
    localStorage.removeItem(this.props.id)
  }

  render() {
    return(
      this.props.actionButton ? (
        <div id="action">
            <button onClick={this.props.showModal}>Star</button>
        </div>
      ) : (
        <div id="action">
          <button onClick={this.removeProduct.bind(this)}>Remove</button>
        </div>
      )
    )
  }
}

export default Action;