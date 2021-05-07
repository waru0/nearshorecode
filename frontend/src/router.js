import { Route, Switch } from 'react-router-dom';
import React from 'react';
import LoanComponent from './components/loanComponent';
import PaymentComponent from './components/paymentComponent';
import InformationComponent from './components/informationComponent';
const Router = () => {

  return (
    <>
      <Switch>
        <Route exact path="/loan" component={LoanComponent} />
        <Route exact path="/payment" component={PaymentComponent} />
        <Route path="/information" component={InformationComponent} />
      </Switch>
    </> 
  );
};


export default Router;
