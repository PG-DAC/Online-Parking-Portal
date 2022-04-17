import React, { Component } from "react";
import Header from "../elements/header";
import Sidebar from "../elements/sidebar";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

export default class Index extends Component {
  state = {
    vehical: {},
    toDashboard: false,
    isLoading: false,
    role: "",
    id: "",
  };

  constructor(props) {
    super(props);

    //this.token = localStorage.getItem('token');
  }

  componentDidMount() {
    this.state.id = localStorage.getItem("bookingId");
    this.url = `http://localhost:8090/getBookingById/${this.state.id}`;
    axios
      .get(this.url)
      .then((response) => {
        const vehical = response.data;
        console.log(vehical);
        this.setState({ vehical });
      })
      .catch((error) => {
        this.setState({ toDashboard: true });
        console.log(error);
      });
  }

  render() {
    const role = localStorage.getItem("currentUser");
    this.state.role = role;
    const isAdmin = this.state.role === '"admin"';
    if (this.state.toDashboard === true) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <Header />
        <div id="wrapper">
          <Sidebar />
          <div id="content-wrapper">
            <div className="container-fluid">
              <ol className="breadcrumb">
                <li className="breadcrumb-item active">
                  Make Payment for Booking
                </li>
              </ol>
              <div className="card mb-3">
                <div className="card-header">
                  <i className="fas fa-table"></i>
                  &nbsp;&nbsp;Make Payment for Booking
                </div>
                <div className="card-body">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Deposit</th>
                        <th>StartDate</th>
                        <th>FromDate</th>
                        <th>Rent</th>
                        <th>Status</th>
                        <th>TotalAmount</th>
                        <th>UserName</th>
                        <th>Vehical Number</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{this.state.vehical.deposit}</td>
                        <td>{this.state.vehical.startDate}</td>
                        <td>{this.state.vehical.fromDate}</td>
                        <td>{this.state.vehical.rent}</td>
                        <td>{this.state.vehical.status}</td>
                        <td>{this.state.vehical.totalAmount}</td>
                        <td>{this.state.vehical.vehicalModel}</td>
                        <td>{this.state.vehical.userName}</td>

                        <td className="text-center">
                          <Link
                            className="btn btn-sm btn-info"
                            to={{
                              pathname: "add-payment",
                              search: "?id=" + this.state.vehical.bookingId,
                            }}
                          >
                            Make Payment
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
