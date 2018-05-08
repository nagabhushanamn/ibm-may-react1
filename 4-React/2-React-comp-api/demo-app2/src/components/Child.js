import React, { Component } from 'react';
import GrandChild from './GrandChild';
import PropTypes from 'prop-types';

class Child extends Component {
    render() {
        return (
            <div className="alert alert-info">
                {this.context.bankBalance}<hr />
                <GrandChild />
            </div>
        );
    }
}


Child.contextTypes = {
    bankBalance: PropTypes.number
};

export default Child;