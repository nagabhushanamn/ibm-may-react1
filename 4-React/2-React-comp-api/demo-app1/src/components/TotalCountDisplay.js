import React, { Component } from 'react';
import PropTypes from 'prop-types';
class TotalCountDisplay extends Component {
    constructor(props) {
        super(props);
        console.log('TotalCountDisplay :: constructor()');
    }
    render() {
        console.log('TotalCountDisplay :: render()');
        let { value } = this.props;
        return (
            <div className="alert alert-info">
                Total : <span className="badge badge-primary">{value}</span>
            </div>
        );
    }
}
TotalCountDisplay.propTypes = {
    value: PropTypes.number
}
TotalCountDisplay.defaultProps = {
    value: 0
}
export default TotalCountDisplay;