import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Greeting extends Component {
    constructor(props) {
        super(props);
        console.log('Greeting :: constructor()');
        //this.state = {
        //    serverMessage: ''
        //}
        // this.state = {
        //     timeNow: new Date().toTimeString()
        // }
    }
    componentWillMount() {
        console.log('Greeting :: componentWillMount()');
    }
    render() {
        //let { serverMessage } = this.state;
        console.log('Greeting :: render');
        let { message } = this.props;
        // let { timeNow } = this.state;
        let timeNow = new Date().toTimeString();
        return (
            <div className="alert alert-info">
                {message}
                <hr />
                {/* {serverMessage} */}
                {timeNow}
            </div>
        );
    }
    componentDidMount() {
        console.log('Greeting :: componentDidMount()');

        //setTimeout(() => {
        //let m = 'greetings from server-side'
        //this.setState({ serverMessage: m });
        //}, 3000);

        this.interval = setInterval(() => {
            //this.setState({ timeNow: new Date().toTimeString() })
            this.forceUpdate();
        }, 500);

    }
    componentWillReceiveProps(nextProps) {
        console.log('Greeting :: componentWillReceiveProps()');
        //console.log(this.props);
        //console.log(nextProps);
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('Greeting :: shouldComponentUpdate()');
        //return this.props.message !== nextProps.message;
        return true;
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('Greeting :: componentWillUpdate()');
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Greeting :: componentDidUpdate()');
    }
    componentWillUnmount() {
        console.log('Greeting :: componentWillUnmount()');
        clearInterval(this.interval);
    }


}
Greeting.propTypes = {
    message: PropTypes.string
}
Greeting.defaultProps = {
    message: 'what to greet !!'
}

// Greeting.displayName = 'ibm-greeting';

export default Greeting;