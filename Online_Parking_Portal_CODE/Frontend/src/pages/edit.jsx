import React, { Component } from 'react';
import axios from 'axios';
import {Link, Redirect} from 'react-router-dom';
import Header from "../elements/header";
import Sidebar from "../elements/sidebar";

export default class EditPage extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        id: '',
        redirect: false,
        isLoading: false,
        bookingId:'',
        userId:'',
        user:{}
    };

    componentDidMount() {
        const id = this.props.location.search[4];
        this.state.id = id
         this.state.user = JSON.parse(localStorage.getItem('user'))
        this.state.userId = this.state.user.userId;
        
     }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({isLoading: true});
      //  const token = localStorage.getItem('token');
         const url = 'http://localhost:8090/saveBooking';
         let obj ={
            "custId":this.state.userId,
            "vechicalId":this.state.id,
            "deposit":document.getElementById('deposit').value,
            "rent":document.getElementById('rent').value,
            "totalAmount":document.getElementById('totalAmount').value,
            "startDate":document.getElementById('startDate').value,
            "fromDate":document.getElementById('fromDate').value,
            "status":"SUCESS"
        
         }

        axios.post(url, obj)
            .then(result => {
                if (result.data.status) {
                    this.state.bookingId = result.data.bookingId;
                    localStorage.setItem('bookingId', this.state.bookingId)
                    console.log(this.state.bookingId)
                    this.setState({redirect: true, isLoading: false})
                }
            })
            .catch(error => {
                this.setState({ toDashboard: true });
                console.log(error);
            });
    };

    renderRedirect = () => {
        if (this.state.redirect) {
           return <Redirect to='/bookingbyid' />
        }
    };
    cancel()
    {
        this.props.history.push('/booking-details');
    }
    render() {
        const isLoading = this.state.isLoading;
        if (this.state.toDashboard === true) {
            return <Redirect to='/bookingbyid' />
        }
        return (
            <div>
             
                <div id="wrapper">
                    <Sidebar></Sidebar>
                    <div id="content-wrapper">
                        <div className="container-fluid">
                            <ol className="breadcrumb">
                                {/* <li className="breadcrumb-item">
                                    <Link to={'/dashboard'} >Dashboard</Link>
                                </li> */}
                                <li className="breadcrumb-item active">Book Parking Slot</li>
                            </ol>
                        </div>
                        <div className="container-fluid">
                            <div className="card mx-auto">
                                <div className="card-header">Book Parking Slot</div>
                                <div className="card-body">
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="form-group">
                                            <div className="form-row">
                                                <div className="col-md-6">
                                                    <div className="form-label-group">
                                                       <label htmlFor="deposit">Deposit</label>
                                                        <input type="number" id="deposit" className="form-control" placeholder="Enter deposit" required="required" autoFocus="autofocus" />
                                                        
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-label-group">
                                                        <label htmlFor="rent">Rent</label>
                                                        <input type="number" id="rent" className="form-control" placeholder="Enter Rent" required="required" />
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="form-row">
                                                <div className="col-md-6">
                                                    <div className="form-label-group">
                                                        <label htmlFor="totalAmount">Enter Total Amount</label>

                                                        <input type="input" id="totalAmount" className="form-control" placeholder="Total Amount" required="required" />
                                                        
                                                    </div>
                                                   
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-label-group">
                                                         <label htmlFor="startDate">Start Date</label>
                                                        <input type="date" id="startDate" className="form-control" placeholder="Enter Date" required="required"/>
                                                       
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="form-row">
                                                <div className="col-md-6">
                                                    <div className="form-label-group">
                                                        <label htmlFor="fromDate">End Date</label>
                                                        <input type="date" id="fromDate" className="form-control" placeholder="End Date" required="required" />
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <button className="btn btn-primary btn-block" type="submit" disabled={this.state.isLoading ? true : false}>Book Parking Slot &nbsp;&nbsp;&nbsp;
                                            {isLoading ? (
                                                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                            ) : (
                                                <span></span>
                                            )}
                                        </button>
                                        <button className='btn btn-danger btn-block' onClick={this.cancel.bind(this)} >Cancel</button>
                                    </form>
                                    <Header/>
                                    {this.renderRedirect()}
                                </div>
                            </div>
                        </div>

                      
                    </div>
                </div>
            </div>
        );
    }
}


