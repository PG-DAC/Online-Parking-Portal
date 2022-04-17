

import React, { Component } from "react";
import "./Homepage.css";
import web from "./home.png";
import cad1 from "./vision.png";
import cad2 from "./vendor.svg";
import cad3 from "./vehicle.svg";

import { NavLink } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <section className="main_headingmy-5  ">
          <div className=" mx-auto">
            <section id="header" className="d-flex align-items-center">
              <div className="container-fluid nav_bg">
                <div style={{
                  height: "68vh", width: "100%"
                  , display: "flex", flexDirection: "row"
                }}>
                  <div style={{ backgroundColor: "#ffe4c4", width: "65%", textAlign: "center" }}>
                    <h1 className="head">Welcome To The Home Page </h1>
                    <h3 className="head" style={{ textAlign: "revert",color:"red" }}>Park Easy</h3>

                    {/* button div starts */}
                    <div className="container">
                      <div className="row">
                        <div style={{ display: "flex", flexDirection: "row", width: "100%", justifyContent:"space-evenly"}}>
                          <button className="btn-change2" style={{ height: "55px", width: "45%", borderRadius:"15px"}}>
                            <NavLink to={"/login1"} className="nav-link">
                              <h4 style={{color:"black", fontWeight:"bold"}}>ADMIN</h4>
                            </NavLink>
                          </button>
                          <button className="btn-change2" style={{ height: "55px", width: "40%" ,borderRadius:"15px"}}>
                            <NavLink to={"/login1"} className="nav-link">
                              <h4 style={{color:"black", fontWeight:"bold"}}>USER</h4>
                            </NavLink>
                          </button>
                        </div>
                        <button className="btn-change2" style={{ height: "65px", width: "50%", margin:"auto", position:"relative", top:15 ,borderRadius:"15px"}}>
                            <NavLink to={"/register"} className="nav-link">
                              <h4 style={{color:"black", fontWeight:"bold"}}>SIGN UP</h4>
                            </NavLink>
                            </button>

                      </div>
                    </div>
                    {/* button div ends */}




                  </div>




                  {/* //image div starts */}
                  <div style={{justifyContent: "center", alignItems: "center", display: "flex", width: "40%" }}>
                    <div>
                      <img
                        src={web}
                        className="img-fluid animated"
                        alt="home img"
                        style={{
                          height: "50vh", width: "100%"
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>

        <section className="main_heading my-3 ">
          <div className="text-center">
            <h1>Our Vision</h1>
          </div>
          {/* rember here */}
          <div className="col-10 mx-auto" style={{backgroundColor:"#ffebcd"}}>
            <div className="row ">
              <div className="card-deck">
                <div className="card">
                  <img
                    className={"card-img-top"}
                    src={cad1}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      Easy To Find Ideal Parking Place
                    </h5>
                    <p className="card-text">
                      We are provinding a Online platform for Finding Ideal
                      parking place for your vehicle. Reducing your unwanted
                      efforts and brings a ease in your work.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <img
                    className="card-img-top"
                    src={cad3}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Parking For Every Type</h5>
                    <p className="card-text">
                      You can search parking irrespective of type of your
                      vehicle. From Two-Wheeler Scooter to Large Vehicle you can
                      search and Park every type of vehicle.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <img
                    className="card-img-top"
                    src={cad2}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      Future Scope With Broad Vision
                    </h5>
                    <p className="card-text">
                      In future we are promising to impliment the Vendor Role in
                      our system. To reach this Platform in every corner of
                      Metropolitian Cities of Our Counrty, and Support to
                      #AatmNirbharBharat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
