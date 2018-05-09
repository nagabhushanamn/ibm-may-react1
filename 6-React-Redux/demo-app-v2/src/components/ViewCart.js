import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { buy } from '../actions/cart';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class ViewCart extends Component {
    handleBuy(item, qty) {
        let { actions } = this.props;
        actions.buy(item, qty);
    }
    renderCartLines() {
        let { cart } = this.props;
        let keys = Object.keys(cart);
        this.total = 0;
        return keys.map((key, idx) => {
            let line = cart[key];
            this.total += line.item.price * line.qty;
            return (
                <tr key={idx}>
                    <td>{key}</td>
                    <td>{line.item.name}</td>
                    <td>&#8377;{line.item.price}</td>
                    {/* <td><input type="number" value={line.qty} onChange={() => { onItemInc(line.item, 1) }} /></td> */}
                    <td><i onClick={() => this.handleBuy(line.item, 1)} className="fa fa-plus"></i>
                        &nbsp;<span className="badge badge-primary">
                            {line.qty}
                        </span>&nbsp;
                    <i onClick={() => this.handleBuy(line.item, -1)} className="fa fa-minus"></i></td>
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
                        <hr />
                        Total : &#8377;{this.total}
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

function mapDispatchToProps(dispatch) {
    let actions = { buy };
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}
export default connect(null, mapDispatchToProps)(ViewCart);