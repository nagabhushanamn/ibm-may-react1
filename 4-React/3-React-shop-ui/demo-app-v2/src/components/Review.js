

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'font-awesome/css/font-awesome.css';

class Review extends Component {
    renderStars(n) {
        let stars = [];
        for (let i = 0; i < n; i++) {
            stars.push(<i style={{ color: 'red' }} className="fa fa-star" key={n}></i>);
        }
        return stars;
    }
    render() {
        let { review } = this.props;
        return (
            <div className="row">
                <div className="col-7 col-sm-7-col-md-7">
                    <div className="alert alert-info">
                        {this.renderStars(review.stars)} &mdash; {review.author}
                        <hr />
                        {review.body}
                    </div>
                </div>
            </div>
        );
    }
}
Review.propTypes = {
    review: PropTypes.object.isRequired
}

export default Review;