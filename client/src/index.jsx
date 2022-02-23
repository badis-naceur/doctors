import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      patients: []
    }
  }

  componentDidMount() {
    $.ajax({
      url: '/patients',
      success: (data) => {
        this.setState({
          patients: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  render () {
    return (<div>
      <h1>Hello world</h1>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));