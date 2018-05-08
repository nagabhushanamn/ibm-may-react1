import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Product from './components/Product';
import ViewCart from './components/ViewCart';
import Login from './components/Login'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Home from './components/Home';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: {},
      products: []
    }
  }
  componentDidMount() {
    let apiUrl = "http://localhost:8080/api/products";
    fetch(apiUrl)
      .then(response => response.json())
      .then(products => {
        this.setState({ products })
      });
  }
  addToCart(item, qty = 1) {
    let { cart } = this.state;
    let line = cart[item.code]
    if (!line) {
      line = { [item.code]: { item, qty } }
    } else {
      line = { [item.code]: { item, qty: line.qty + qty } }
      if (line[item.code].qty === 0) {
        delete cart[item.code];
        line = null;
      }
    }
    cart = Object.assign({}, cart, line)
    this.setState({ cart });
  }
  renderProducts() {
    let { products } = this.state;
    return products.map((product, idx) => {
      return (
        <Product item={product} key={idx} onBuy={(item) => this.addToCart(item)} />
      )
    })
  }
  renderCart() {
    let { cart } = this.state;
    return <ViewCart cart={cart} onItemInc={(item, qty) => this.addToCart(item, qty)} />
  }
  render() {
    let { cart } = this.state;
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

          <Route exact={true} path="/" component={Home} />
          <Route path="/products" render={() => this.renderProducts()} />
          <Route path="/view-cart" render={() => this.renderCart()} />
          <Route path="/login" component={Login} />

        </div>
      </Router>
    );
  }
}

export default App;
