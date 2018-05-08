import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Review from './Review';
import ReviewForm from './ReviewForm'

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab: 1,
            reviews: []
        }
    }
    addNewReview(newReview) {
        let { reviews } = this.state;
        let { item } = this.props;
        let apiUrl = `http://localhost:8080/api/products/${item.id}/reviews`;
        fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newReview)
        })
            .then(response => response.json())
            .then(review => {
                reviews = reviews.concat(review);
                this.setState({ reviews });
            });
    }
    changeTab(tab) {
        this.setState({ tab }, () => {
            if (tab === 3) {
                let { item } = this.props;
                let apiUrl = `http://localhost:8080/api/products/${item.id}/reviews`;
                fetch(apiUrl)
                    .then(response => response.json())
                    .then(reviews => {
                        this.setState({ reviews });
                    });
            }
        });
    }
    renderBuyBtn(item) {
        let { onBuy } = this.props;
        return true ? <button onClick={(e) => { onBuy(item) }} className="btn btn-sm btn-primary">buy</button> : null
    }
    renderReviews() {
        let { reviews } = this.state;
        return reviews.map((review, idx) => {
            return <Review review={review} key={idx} />
        });
    }
    renderTabPanel(item) {
        let { tab } = this.state;
        let panel = null;
        switch (tab) {
            case 1:
                panel = (<div><p>{item.description}</p></div>)
                break;
            case 2:
                panel = (<div><p>Not Yet</p></div>)
                break;
            case 3:
                panel = (
                    <div>
                        {this.renderReviews()}
                        <hr />
                        <ReviewForm onNewReview={(newReview) => { this.addNewReview(newReview) }} />
                    </div>
                )
                break;
            default:
                panel = null;
        }
        return panel;
    }
    render() {
        let { item } = this.props;
        let { tab } = this.state;
        return (
            <div>
                <div className="list-group-item">
                    <div className="row">
                        <div className="col-3 col-sm-3 col-md-3">
                            <img src={item.image} className="img-fluid" alt="laptop" />
                        </div>
                        <div className="col-9 col-sm-9 col-md-9">
                            <h5>{item.name}</h5>
                            <h6>&#8377;{item.price}</h6>
                            {this.renderBuyBtn(item)}
                            <hr />
                            <ul className="nav nav-tabs">
                                <li className="nav-item">
                                    <a className={classNames('nav-link', { active: tab === 1 })} onClick={() => { this.changeTab(1) }}>Description</a>
                                </li>
                                <li className="nav-item">
                                    <a className={classNames('nav-link', { active: tab === 2 })} onClick={() => { this.changeTab(2) }}>Specification</a>
                                </li>
                                <li className="nav-item">
                                    <a className={classNames('nav-link', { active: tab === 3 })} onClick={() => { this.changeTab(3) }}>Reviews</a>
                                </li>
                            </ul>
                            {this.renderTabPanel(item)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
Product.propTypes = {
    item: PropTypes.object.isRequired
}

export default Product;