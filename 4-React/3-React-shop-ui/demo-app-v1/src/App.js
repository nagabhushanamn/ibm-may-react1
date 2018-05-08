import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import classNames from 'classnames';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 1,
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
  changeTab(tab) {
    this.setState({ tab });
  }
  renderBuyBtn(product) {
    return product.canBuy ? <button className="btn btn-sm btn-primary">buy</button> : null
  }
  renderTabPanel(product) {
    let { tab } = this.state;
    let panel = null;
    switch (tab) {
      case 1:
        panel = (<div><p>{product.description}</p></div>)
        break;
      case 2:
        panel = (<div><p>Not Yet</p></div>)
        break;
      case 3:
        panel = (<div><p>None Yet</p></div>)
        break;
      default:
        panel = null;
    }
    return panel;
  }
  renderProducts() {
    let { products, tab } = this.state;
    return products.map((product, idx) => {
      return (
        <div key={idx} className="list-group-item">
          <div className="row">
            <div className="col-3 col-sm-3 col-md-3">
              <img src={product.image} className="img-fluid" />
            </div>
            <div className="col-9 col-sm-9 col-md-9">
              <h5>{product.name}</h5>
              <h6>&#8377;{product.price}</h6>
              {this.renderBuyBtn(product)}
              <hr />
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <a className={classNames('nav-link', { active: tab === 1 })} href="/#" onClick={() => { this.changeTab(1) }}>Description</a>
                </li>
                <li className="nav-item">
                  <a className={classNames('nav-link', { active: tab === 2 })} href="/#" onClick={() => { this.changeTab(2) }}>Specification</a>
                </li>
                <li className="nav-item">
                  <a className={classNames('nav-link', { active: tab === 3 })} href="/#" onClick={() => { this.changeTab(3) }}>Reviews</a>
                </li>
              </ul>
              {this.renderTabPanel(product)}
            </div>
          </div>
        </div>
      )
    })
  }
  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-light bg-light">
          <span className="navbar-brand">shopIT</span>
        </nav>
        <hr />
        <div className="list-group">
          {this.renderProducts()}
        </div>
      </div>
    );
  }
}

export default App;
