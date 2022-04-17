import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import TitleComponent from "../pages/title";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.handleClickLogout = this.handleClickLogout.bind(this);
  }

  state = {
    toDashboard: false,
  };

  handleClickLogout() {
    localStorage.removeItem("token");
    localStorage.setItem("isLoggedIn", false);
    this.setState({ toDashboard: true });
  }

  render() {
    if (this.state.toDashboard === true) {
      return <Redirect to="/" />;
    }
    return (
      <div className="container-fluid nav_bg">
        <nav className="navbarzz ">
          <TitleComponent title="Login "></TitleComponent>

          <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0"></form>

          <ul className="navbar-nav">
            <li className="">
              <div style={{backgroundColor:"yellow", position:"absolute", right:150,
               bottom:5, right:25
            }}>
                <Link
                  to={"#"}
                  onClick={this.handleClickLogout}
                  className="btn btn-primary"
                  data-toggle="modal"
                  data-target="#logoutModal"
                >
                  Logout
                </Link>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
