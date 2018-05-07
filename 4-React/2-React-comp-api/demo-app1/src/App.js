import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import PropTypes from 'prop-types';
import ActionButton from './components/ActionButton';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('App :: constructor()');
    //console.log(props);
  }
  render() {
    console.log('App :: render()');
    // let title=this.props.title;
    // or
    let { title } = this.props; // es6 - destructuring
    return (
      <div className="container">
        <hr />
        <h1>React - api - {title}</h1>
        <hr />
        <ActionButton />
        <ActionButton label="give me break" />
      </div>
    );
  }
}

App.propTypes = {
  title: PropTypes.string
};

export default App;
