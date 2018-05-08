import React, { Component } from 'react';
import Child from './Child';
import PropTypes from 'prop-types';

class Parent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bankBalance: 1000.00
        }
    }
    getChildContext() {
        return { bankBalance: this.state.bankBalance, bankName: 'some-bank' };
    }
    render() {
        return (
            <div className="jumbotron">
                <Child />
            </div>
        );
    }
}

Parent.childContextTypes = {
    bankBalance: PropTypes.number
};

export default Parent;