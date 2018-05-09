import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Product from './components/Product';
import ViewCart from './components/ViewCart';
import Login from './components/Login'

import { connect } from 'react-redux';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Home from './components/Home';

class App extends Component {

  renderProducts() {
    let { products } = this.props;
    return products.map((product, idx) => {
      return (
        <Product item={product} key={idx} />
      )
    })
  }
  renderCart() {
    let { cart } = this.props;
    return <ViewCart cart={cart} />
  }
  render() {
    let { cart, loadingStatus } = this.props;
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-light bg-light">
            <span className="navbar-brand">
              <Link to="/">shopIT</Link>
            </span>
            <ul className="navbar-nav pull-right">
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
            </ul>
          </nav>
          <hr />
          <i className="fa fa-shopping-cart"></i>{Object.keys(cart).length} item(s) in cart |
          {/* <a className="" href="/#/products">View Products</a> */}
          <Link to="/products">View Products</Link>
          <Link className="pull-right" to="/view-cart" >View cart</Link>
          <hr />
          <span className="badge badge-primary">{loadingStatus.message}</span>
          <hr />
          <Route exact={true} path="/" component={Home} />
          <Route path="/products" render={() => this.renderProducts()} />
          <Route path="/view-cart" render={() => this.renderCart()} />
          <Route path="/login" component={Login} />

        </div>
      </Router>
    );
  }
}
function mapStateToProps(state, props) {
  return {
    products: state.products,
    cart: state.cart,
    loadingStatus: state.loadingStatus
  }
}
export default connect(mapStateToProps, null)(App);
