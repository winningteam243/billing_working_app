import React, { Component } from 'react';
import './App.css'; 
import ProductPannel from './components/abc/products';
import PhoneDeatails from './components/abc/phone-data';
import { Link, Route, Switch } from 'react-router-dom';
import BillDetail from './components/abc/bill-details';
import PreviousBill from './components/abc/previous_bill';

// import User from './components/user/user'

class App extends Component {
  render() {
    return (
      <div className="container">
         {/* <User />  */}
        {/* <ProductPannel/> */}
        
        <div className="ui container">
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">Billing Application</a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Products</Link>
            </li>
           
          </ul>
        </nav>
          {/* <div className="nav nav-bar">
            <Link className="item" to="/">Products</Link>
          </div>   */}
      
          <Switch>
            <Route exact path="/" component={ProductPannel} />
            <Route exact path="/billdetails/:id" component={ BillDetail } />
            <Route exact path="/previous_bill/:id" component={ PreviousBill } />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
