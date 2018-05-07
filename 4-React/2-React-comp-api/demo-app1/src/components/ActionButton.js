import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ActionButton.css';
class ActionButton extends Component {
    constructor(props) {
        super(props);
        console.log('ActionButton :: constructor()');
    }
    render() {
        console.log('ActionButton :: render()');
        let { label } = this.props;
        return (
            <div className="action-btn">
                <div className="card">
                    <div className="card-body">
                        <button className="btn btn-primary">
                            {label}
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
ActionButton.propTypes = {
    label: PropTypes.string
};
ActionButton.defaultProps = {
    label: 'Action-btn'
}

export default ActionButton;