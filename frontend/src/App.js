import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import InformationComponent from "./components/informationComponent";
import LoanComponent from "./components/loanComponent";
import PaymentComponent from "./components/paymentComponent";
import index from "./components/index"
class App extends Component
{
  render ()
  {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/" className="navbar-brand">
            Exercise
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={ "/loan" } className="nav-link">
                Loans
              </Link>
            </li>
            <li className="nav-item">
              <Link to={ "/payments" } className="nav-link">
                Payments
              </Link>
            </li>
            <li className="nav-item">
              <Link to={ "/information" } className="nav-link">
                Information
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={ [ "/" ] } component={ index } />
            <Route exact path="/loan" component={ LoanComponent } />
            <Route path="/payments" component={ PaymentComponent } />
            <Route path="/information" component={ InformationComponent } />

          </Switch>
        </div>
      </div>
    );
  }
}

export default App;