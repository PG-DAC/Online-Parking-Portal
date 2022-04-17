import React, { Component } from "react";
import Header from "../elements/header";
import Sidebar from "../elements/sidebar";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

export default class AddPage extends Component {
  state = {
    redirect: false,
    toDashboard: false,
    isLoading: false,
    vechicalType:"",
    company:"",
    modelNo:"",
    mobNo:"",
    color:"",
    imagePath:"",
    //deposit:"",
    rent:"",
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ isLoading: true });
    const url = "http://localhost:8090/saveVechical";
    const vechicalType = document.getElementById("vechicalType").value;
    const company = document.getElementById("company").value;
    const modelNo = document.getElementById("modelNo").value;
    const mobNo = document.getElementById("mobNo").value;
    const color = document.getElementById("color").value;
    const imagePath = document.getElementById("imagePath").value;
    const deposit =500//document.getElementById("deposit").value;
    const rent = document.getElementById("rent").value;

    let saveObj = {
      vechicalType: vechicalType,
      company: company,
      modelNo: modelNo,
      mobNo: mobNo,
      color: color,
      imagePath: imagePath,
      deposit: deposit,
      rent: rent,

      status: "Active",
    };

    console.log(saveObj);
    axios
      .post(url, saveObj)
      .then((result) => {
        if (result.data.status) {
          this.setState({ redirect: true, isLoading: false });
        }
      })
      .catch((error) => {
        this.setState({ toDashboard: true });
        console.log(error);
      });
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/booking-details" />;
    }
  };

  render() {

    // const validation = (e) =>{
     
    //     e.preventDefault() ;
        // console.log(this.state.vechicalType)
        // console.log(this.state.company)
     
        // if(this.state.vechicalType===""||this.state.company===""||this.state.modelNo===""||
        // this.state.mobNo===""||this.state.color===""||this.state.imagePath===""||
        // this.state.rent==="")
        // {
        //   toast.error(' please fill all the fields!!!', {
        //   });
        //   //window.location.href="/booking-details"
        
        //  return;
        // }
        // else
        // {
        //   window.location.href="/booking-details"
        // }
        
    
    const isLoading = this.state.isLoading;
    if (this.state.toDashboard === true) {
      return <Redirect to="/booking-details" />;
    }
    return (
      <div>
        <div id="wrapper">
          <div id="content-wrapper">
            <div className="container-fluid">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to={"/index"}>Parking Details</Link>
                </li>
                <li className="breadcrumb-item active">Add</li>
              </ol>
            </div>
            <div className="container-fluid">
              <div className="card mx-auto">
                <div className="card-header"> Add Parking Slot</div>
                <div className="card-body">
                  <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                      <div className="form-row">
                        <div className="col-md-6">
                          <div className="form-label-group">
                            <label htmlFor="vechicalType">Parking Type</label>
                            <input
                              type="text"
                              id="vechicalType"
                              className="form-control"
                              placeholder="Enter Parking type"
                              required="required"
                              autoFocus="autofocus"
                              name="type"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-label-group">
                            <label htmlFor="company">
                              Enter No Of Slots Available
                            </label>
                            <input
                              type="Number"
                              id="company"
                              className="form-control"
                              placeholder="No Of Slots Available"
                              required="required"
                              name="slots"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="form-row">
                        <div className="col-md-6">
                          <div className="form-label-group">
                            <label htmlFor="modelNo">Parking Address</label>
                            <input
                              type="text"
                              id="modelNo"
                              className="form-control"
                              placeholder="Address"
                              required="required"
                              name="address"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-label-group">
                            <label htmlFor="color">Contact Details</label>
                            <input
                              type="number"
                              id="color"
                              className="form-control"
                              placeholder="Enter Contact Details"
                              required="required"
                              name="details"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="form-row">
                        <div className="col-md-6">
                          <div className="form-label-group">
                            <label htmlFor="mobNo">Parking Name</label>
                            <input
                              type="text"
                              id="mobNo"
                              className="form-control"
                              placeholder="Enter Name"
                              required="required"
                              name="parname"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-label-group">
                            <label htmlFor="imagePath">
                              Upload Parking Image
                            </label>
                            <input
                              type="file"
                              id="imagePath"
                              className="form-control"
                              placeholder="Add Image"
                              name="parimg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="form-row">
                        <div className="col-md-6">
                          {/* <div className="form-label-group">
                            <label htmlFor="deposit">
                              Enter Deposit Amount
                            </label>
                            <input
                              type="number"
                              id="deposit"
                              className="form-control"
                              placeholder="Enter Deposite"
                              required="required"
                              name="deposit"
                            />
                          </div> */}
                           <div className="form-label-group">
                            <label htmlFor="rent">Enter Rent</label>
                            <input
                              type="number"
                              id="rent"
                              className="form-control"
                              placeholder="Enter Rent"
                              required="required"
                              name="rent"

                            />
                          </div>
                        </div>
                        {/* <div className="col-md-6">
                          <div className="form-label-group">
                            <label htmlFor="rent">Enter Rent</label>
                            <input
                              type="number"
                              id="rent"
                              className="form-control"
                              placeholder="Enter Rent"
                              required="required"
                              name="rent"

                            />
                          </div>
                        </div> */}
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="form-row">
                        <div className="col-md-6"></div>
                      </div>
                    </div>
                    <button
                     // onClick={validation}
                      className="btn btn-primary btn-block"
                      type="submit"
                      disabled={this.state.isLoading ? true : false}
                    >
                      Add Parking Slot &nbsp;&nbsp;&nbsp;
                      {isLoading ? (
                        <span
                          className="spinner-border spinner-border-sm"
                          role="status"
                          aria-hidden="true"
                        ></span>
                      ) : (
                        <span></span>
                      )}
                    </button>
                    <ToastContainer/>
                  </form>
                  <Header />
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
