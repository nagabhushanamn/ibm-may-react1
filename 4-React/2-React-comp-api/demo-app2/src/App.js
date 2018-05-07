import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Greeting from './components/Greeting';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('App :: constructor()');
    this.state = {
      message: 'greetings'
    }
  }
  changeMessage(message) {
    this.setState({ message })
  }
  renderMessage() {
    let { message } = this.state;
    if (message)
      return <Greeting message={message} />
    else
      return null;
  }
  render() {
    console.log('App :: render()');

    return (
      <div className="container">
        <hr /><h1>React-api - lifecycle</h1><hr />
        <button className="btn btn-primary" onClick={() => { this.changeMessage('good morning') }}>GM</button>
        <button className="btn btn-primary" onClick={() => { this.changeMessage('good noon') }}>GN</button>
        <button className="btn btn-primary" onClick={() => { this.changeMessage('good evening') }}>GE</button>
        <button className="btn btn-danger" onClick={() => { this.changeMessage('') }}>Remove</button>
        <hr />
        {this.renderMessage()}
      </div>
    );
  }
}

export default App;
