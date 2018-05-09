import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Review from './Review';
import ReviewForm from './ReviewForm'
import store from '../store';
import { loadReviews, addNewReview } from '../actions/reviews';
import { buy } from '../actions/cart';
class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab: 1,
            reviews: []
        }
    }
    componentDidMount() {
        let { item } = this.props;
        this.unsubscribe = store.subscribe(() => {
            let reviews = store.getState().reviews[item.code] || [];
            this.setState({ reviews });
        });
    }
    addNewReview(newReview) {
        let { item } = this.props;
        store.dispatch(addNewReview(item.code, newReview));
    }
    changeTab(tab) {
        this.setState({ tab }, () => {
            if (tab === 3) {
                let { item } = this.props;
                store.dispatch(loadReviews(item.code));
            }
        });
    }
    handleBuy() {
        let { item } = this.props;
        store.dispatch(buy(item, 1));
    }
    renderBuyBtn(item) {
        return true ? <button onClick={(e) => this.handleBuy()} className="btn btn-sm btn-primary">buy</button> : null
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
                        <div className="col-sm-9 col-md-9">
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
    componentWillUnmount() {
        this.unsubscribe();
    }
}
Product.propTypes = {
    item: PropTypes.object.isRequired
}

export default Product;