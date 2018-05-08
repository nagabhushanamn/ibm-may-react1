import React, { Component } from 'react';
import PropTypes from 'prop-types';
class ViewCart extends Component {
    renderCartLines() {
        let { cart } = this.props;
        let keys = Object.keys(cart);
        return keys.map((key, idx) => {
            let line = cart[key];
            return (
                <tr key={idx}>
                    <td>{key}</td>
                    <td>{line.item.name}</td>
                    <td>>&#8377;{line.item.price}</td>
                    <td>{line.qty}</td>
                    <td>&#8377;{line.item.price * line.qty}</td>
                </tr>
            );
        })
    }
    renderCart() {
        let { cart } = this.props;
        let keys = Object.keys(cart);
        if (keys.length === 0) {
            return (
                <div className="row">
                    <div className="col-6 col-sm-6 col-md-6">
                        <div className="alert alert-info">No Items in cart </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="card">
                    <div className="card-header"> Items in cart</div>
                    <div className="card-body">
                        <table className="table table-bordered table-sm">
                            <thead>
                                <tr>
                                    <th>code</th>
                                    <th>name</th>
                                    <th>price</th>
                                    <th>qty</th>
                                    <th>total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderCartLines()}
                            </tbody>
                        </table>
                    </div>
                </div>
            )
        }
    }
    render() {
        return (
            <div>
                {this.renderCart()}
            </div>
        );
    }
}

ViewCart.propTypes = {
    cart: PropTypes.object.isRequired
};
export default ViewCart;