import React, { Component } from "react";
import LoanService from "../services/loanService";

export default class LoanComponent extends Component
{
  constructor ( props )
  {
    super( props );
    this.onChangeEmail = this.onChangeEmail.bind( this );
    this.onChangeAmount = this.onChangeAmount.bind( this );
    this.saveData = this.saveData.bind( this );

    this.state = {

      email: "",
      amount: 0,
      message: "",
    };
  }
  onChangeEmail ( e )
  {
    this.setState( {
      email: e.target.value
    } );
  }

  onChangeAmount ( e )
  {
    this.setState( {
      amount: e.target.value
    } );
  }

  saveData ()
  {


    var data = {
      email: this.state.email,
      amount: this.state.amount
    };
    LoanService.create( data )
      .then( response =>
      {

        this.setState( {
          email: data.email,
          amount: data.amount,
          message: response.data

        } );

      } )
      .catch( e =>
      {

      } );
  }

  render ()
  {
    const alert = this.state

    return (
      <div className="submit-form">
        { this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success">
              Add
            </button>
          </div>
        ) : (
            <div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  required
                  value={ this.state.email }
                  onChange={ this.onChangeEmail }
                  name="email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="description">Amount</label>
                <input
                  type="number"
                  className="form-control"
                  id="amount"
                  required
                  value={ this.state.amount }
                  onChange={ this.onChangeAmount }
                  name="amount"
                />
                <span style={ {
                  fontWeight: 'bold',
                  color: 'red',
                } }>{ alert.message.response }</span>
              </div>

              <button onClick={ this.saveData } className="btn btn-success">
                Submit
            </button>
            </div>
          ) }
      </div>
    );
  }
}