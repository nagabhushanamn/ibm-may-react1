import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import PropTypes from 'prop-types';
import ActionButton from './components/ActionButton';
import TotalCountDisplay from './components/TotalCountDisplay';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('App :: constructor()');
    //console.log(props);
    this.state = {
      totalCount: 0
    };
  }
  incrementTotalCount(value) {
    let { totalCount } = this.state;
    totalCount += value;
    this.setState({ totalCount });
  }
  render() {
    console.log('App :: render()');
    // let title=this.props.title;
    // or
    let { title } = this.props; // es6 - destructuring
    let { totalCount } = this.state;
    return (
      <div className="container">
        <hr />
        <h1>React - api - {title}</h1>
        <hr />
        <div className="card">
          <div className="card-header"> App Component : <span className="badge badge-primary">{totalCount}</span> </div>
          <div className="card-body">
            {
              
              /* 
              <ActionButton value={1} onAction={(value) => { this.incrementTotalCount(value) }} />
              <ActionButton value={10} onAction={(value) => { this.incrementTotalCount(value) }} />
              <ActionButton value={-10} onAction={(value) => { this.incrementTotalCount(value) }} /> 
              */
             
             [1,-1,10,-10]
             .map((n,idx)=><ActionButton key={idx} value={n} onAction={(value) => { this.incrementTotalCount(value) }} />)
            
            }
            <div style={{ clear: 'both' }}>
              <hr />
              <TotalCountDisplay value={totalCount} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  title: PropTypes.string
};

export default App;
