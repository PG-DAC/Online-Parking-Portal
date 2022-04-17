import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
      isAdmin: false,
      role: "",
    };
  }

  render() {
    const role = localStorage.getItem("currentUser");
    this.state.role = role;
    const isAdmin = this.state.role === '"admin"';
    //const isAdmin = true;
    console.log("Akshay", isAdmin);

    return (
        <section className="main_heading my-2  ">
       
        <div className="col-10 mx-auto  ">
          <div className="row ">
      <div id="wrapper">
        <ul className="">
          
            {isAdmin && (
              <li className="">
              <Link to={"/user-list"} className="nav-link active">
                <i className="fas fa-fw fa-user"></i>
                <span>&nbsp; User Details</span>
              </Link>
              </li>
            )}
         
          {isAdmin && (
            <li className="nav-item">
              <Link to={"/index"} className="nav-link active">
                <i className="fas fa-fw fa-car"></i>
                <span>&nbsp; Booking Details</span>
              </Link>
            </li>
          )}
          <li className="nav-item">
            <Link to={"/booking-details"} className="nav-link active">
              <i className="fas fa-fw fa-book"></i>
              <span>&nbsp; Parking Details </span>
            </Link>
          </li>
          {isAdmin && (
            <li className="nav-item">
              <Link to={"/list-payment"} className="nav-link active">
                <i className="fas fa-fw fa-address-card"></i>
                <span>&nbsp; Admin Payment Details</span>
              </Link>
            </li>
          )}
        </ul>
      </div>
      </div>
      </div>
      </section>
    );
  }
}
