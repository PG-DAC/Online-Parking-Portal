import React, { Component } from "react";
import Header from "../elements/header";
import Sidebar from "../elements/sidebar";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

export default class Index extends Component {
  state = {
    payment: [],
    toDashboard: false,
    isLoading: false,
  };

  constructor(props) {
    super(props);
    this.url = "http://localhost:8090/getAllPayment";
    //this.token = localStorage.getItem('token');
  }

  componentDidMount() {
    axios
      .get(this.url)
      .then((response) => {
        const payment = response.data;
        console.log(payment);
        this.setState({ payment });
      })
      .catch((error) => {
        this.setState({ toDashboard: true });
        console.log(error);
      });
  }

  render() {
    if (this.state.toDashboard === true) {
      return <Redirect to="/user-list" />;
    }
    return (
      <div>
        <div id="wrapper">
          <Sidebar />
          <div id="content-wrapper">
            <div className="container-fluid">
              <ol className="breadcrumb">
                {/* <li className="breadcrumb-item">
                                    <Link to={'/index'} >Vehical Details</Link>
                                </li> */}
                <li className="breadcrumb-item active">Payment Details</li>
                {/* <li className="ml-auto"><Link to={'add'}>Add Vehical</Link></li> */}
              </ol>
              <div className="card mb-3">
                <div className="card-header">
                  <i className="fas fa-table"></i>
                  &nbsp;&nbsp;Paymnet List
                </div>
                <div className="card-body">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>User Id</th>
                        <th>Card No</th>

                        <th>Total Amount</th>
                        <th>Booking Id</th>
                        <th>Booking Date</th>
                        {/* <th>Action</th> */}
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.payment.map((payment, index) => (
                        <tr>
                          <td>{index + 1}</td>
                          <td>{payment.cardNo}</td>

                          <td>{payment.amount}</td>
                          <td>{payment.bookingId}</td>
                          <td>{payment.createdDate}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <Header />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
