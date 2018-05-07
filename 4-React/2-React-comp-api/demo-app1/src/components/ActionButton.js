import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ActionButton.css';
class ActionButton extends Component {
    constructor(props) {
        super(props);
        console.log('ActionButton :: constructor()');
        this.state = {
            count: 0
        }
        //this.handleBtnClick = this.handleBtnClick.bind(this); // dynamic function-binding
    }
    handleBtnClick() {
        let { count } = this.state;
        let { value, onAction } = this.props;

        // let sign = label.substring(0, 1);
        // let value = Number.parseInt(label.substring(1), 10);
        // if (sign === '+') {
        //     count = count + value;
        // } else {
        //     count = count - value;
        // }

        count = count + value;
        this.setState({ count }, () => {
            onAction(value);
        })
        //onAction();
    }
    render() {
        console.log('ActionButton :: render()');
        let { value } = this.props;
        let { count } = this.state
        let btnClassName=`btn ${value>0?'btn-success':'btn-danger'}`;
        return (
            <div className="action-btn">
                <div className="card">
                    <div className="card-body">
                        <button
                            onClick={() => { this.handleBtnClick() }}
                            className={btnClassName}>
                            {value} | <span className="badge badge-dark">{count}</span>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
ActionButton.propTypes = {
    value: PropTypes.number
};
ActionButton.defaultProps = {
    value: 1
}

export default ActionButton;