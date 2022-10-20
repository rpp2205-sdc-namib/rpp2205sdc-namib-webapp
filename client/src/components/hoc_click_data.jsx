import React from 'react';
import axios from 'axios';

const withClickData = (WrappedComponent, widget) => {
  class ClickData extends React.Component {
    constructor(props) {
      super(props);
    }

    interactionFunc(event) {
      var selector = event.target.id ? ('#' + event.target.id) : ('.' + event.target.className);
      var element = event.target.type + selector;
      console.log(element);
      var time =  String(new Date());
      axios.post('/interactions', { element, widget, time})
        .then(response => {
          if (response.status === 201) {
            console.log(response.data);
          }
        })
        .catch(err => {
          console.error(err);
        })
    }

    render() {
      return <WrappedComponent {...this.props} interaction={this.interactionFunc.bind(this)} />;
    }

  }
  return ClickData;
}

export default withClickData;