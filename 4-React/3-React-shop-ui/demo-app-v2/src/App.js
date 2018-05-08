import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Product from './components/Product';
import ViewCart from './components/ViewCart';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCartOpen: false,
      /*
        {
          "111":{item,qty},
          "222":{item,qty}
        }
      */
      cart: {},
      products: [
        {
          code: 111,
          name: 'Laptop',
          price: 198000,
          description: 'New Mac pro',
          canBuy: true,
          image: 'images/Laptop.png'
        },
        {
          code: 222,
          name: 'Mobile',
          price: 18000,
          description: 'New  pro',
          canBuy: true,
          image: 'images/Mobile.png'
        }
      ]
    }
  }
  toggleCart() {
    let { isCartOpen } = this.state;
    this.setState({ isCartOpen: !isCartOpen });
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
    let { products, isCartOpen } = this.state;
    if (!isCartOpen) {
      return products.map((product, idx) => {
        return (
          <Product item={product} key={idx} onBuy={(item) => this.addToCart(item)} />
        )
      })
    } else {
      return null;
    }
  }
  renderCart() {
    let { isCartOpen, cart } = this.state;
    if (isCartOpen) {
      return <ViewCart cart={cart} onItemInc={(item, qty) => this.addToCart(item, qty)} />
    } else {
      return null;
    }
  }
  render() {
    let { cart, isCartOpen } = this.state;
    return (
      <div className="container">
        <nav className="navbar navbar-light bg-light">
          <span className="navbar-brand">shopIT</span>
        </nav>
        <hr />
        <i className="fa fa-shopping-cart"></i>{Object.keys(cart).length} item(s) in cart
        <a className="pull-right" href="/#" onClick={() => { this.toggleCart() }}>{isCartOpen ? 'View products' : 'View cart'}</a>
        <hr />
        {this.renderCart()}
        <div className="list-group">
          {this.renderProducts()}
        </div>

      </div>
    );
  }
}

export default App;
