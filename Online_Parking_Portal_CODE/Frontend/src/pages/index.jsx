import React, { Component } from 'react';
import Header from "../elements/header";
import Sidebar from "../elements/sidebar";
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios';
import { Button } from 'bootstrap';

export default class Index extends Component {
    state = {
        vehical: [],
        toDashboard: false,
        isLoading: false,
        role:''
    };

    

    constructor(props) {
        super(props);
        this.url = 'http://localhost:8090/getBooking';
        //this.token = localStorage.getItem('token');
    }

    componentDidMount() {
        axios.get(this.url)
            .then(response => {
                const vehical = response.data;
                console.log(vehical)
                this.setState({ vehical });
            })
            .catch(error => {
                this.setState({ toDashboard: true });
                console.log(error);
            });

    }

   

    render() {
        const role = localStorage.getItem('currentUser')
        this.state.role = role;
        const isAdmin = this.state.role ==='"admin"';
        if (this.state.toDashboard === true) {
            return <Redirect to='/' />
        }
        return (
            <div>
                 <Sidebar/>
                <div id="wrapper">
               
                    <div id="content-wrapper">
                        <div className="container-fluid">
                            <ol className="breadcrumb">
                               
                                <li className="breadcrumb-item active">Booking Details</li>
                        
                            </ol>
                            <div className="card mb-3">
                                <div className="card-header"><i className="fas fa-table"></i>
                                    &nbsp;&nbsp;Booking List
                                </div>
                                <div className="card-body">
                                    <table className="table table-bordered">
                                        <thead>
                                        <tr>
                                            <th>Booking Id</th>
                                            <th>Deposit Amount</th>
                                            <th>Start Date</th>
                                            <th>End Date</th>
                                            <th>Charges</th>
                                            
                                            <th>Total Amount</th>
                                            <th>Parking Id</th>
                                            <th>Status</th>
                                         
                                        </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.vehical.map((vehical , index)=>
                                                <tr>
                                                    <td>{index + 1}</td>
                                                    <td>{vehical.deposit}</td>
                                                    <td>{vehical.startDate}</td>
                                                    <td>{vehical.fromDate}</td>
                                                    <td>{vehical.rent}</td>
                                                    <td>{vehical.deposit+vehical.rent}</td>
                                                    <td>{vehical.vechicalId}</td>
                                                    <td>Success</td>
                                          
                                                 
                                                </tr>)
                                            }
                                        </tbody>
                                    </table>
                                    
                 <Header/>
                                </div>
                             
                            </div>
                        </div>
                 
                    </div>
                </div>
            </div>
        );
    }
}
