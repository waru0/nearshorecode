import React, { Component } from "react";
import InformationService from "../services/informationService";

export default class InformationComponent extends Component
{
    constructor ( props )
    {
        super( props );
        this.onChangeEmail = this.onChangeEmail.bind( this );
        this.saveData = this.saveData.bind( this );

        this.state = {

            email: "",
            message: "",
        };
    }
    onChangeEmail ( e )
    {
        this.setState( {
            email: e.target.value
        } );
    }


    saveData ()
    {


        var data = {
            email: this.state.email,
        };
        InformationService.create( data )
            .then( response =>
            {

                this.setState( {
                    email: data.email,
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
                                <span style={ {
                                    fontWeight: 'bold',
                                    color: 'red',
                                } }>{ alert.message }</span>
                            </div>


                            <span style={ {
                                fontWeight: 'bold',
                                color: 'red',
                            } }>{ alert.message.response }</span>

                            <button onClick={ this.saveData } className="btn btn-success">
                                Submit
            </button>
                        </div>
                    ) }
            </div>
        );
    }
}