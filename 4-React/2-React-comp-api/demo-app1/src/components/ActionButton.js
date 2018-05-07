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
        let { onAction } = this.props;
        count += 1;
        this.setState({ count }, () => {
            //onAction();
        })
        onAction();
    }
    render() {
        console.log('ActionButton :: render()');
        let { label } = this.props;
        let { count } = this.state
        return (
            <div className="action-btn">
                <div className="card">
                    <div className="card-body">
                        <button
                            onClick={() => { this.handleBtnClick() }}
                            className="btn btn-primary">
                            {label} | <span className="badge badge-danger">{count}</span>
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