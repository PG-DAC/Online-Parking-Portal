import React, { Component } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Link, Redirect } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

export default class Register extends Component {

    state = {
        firstName: '',
        lastName: '',
        email: '',
        mobNo: '',
        vehicalNo: '',
        adharNo: '',
        userName: '',
        password: '',
        // userRole: '',
        redirect: false,
        authError: false,
        isLoading: false,
    };

    handleEmailChange = event => {
        this.setState({ email: event.target.value });
    };
    handlePwdChange = event => {
        this.setState({ password: event.target.value });
    };
    handleFirstNameChange = event => {
        this.setState({ firstName: event.target.value });
    };

    handleLastNameChange = event => {
        this.setState({ lastName: event.target.value });
    };

    handleMobileChange = event => {
        this.setState({ mobNo: event.target.value })
    }

    handleVehicalChange = event => {
        this.setState({ vehicalNo: event.target.value })
    }
    handleUserNameChange = event => {
        this.setState({ userName: event.target.value })
    }

    handleAdharChange = event => {
        this.setState({ adharNo: event.target.value })
    }

    handleuserRoleChange = event => {
        this.setState({ userRole: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ isLoading: true });
        const url = 'http://localhost:8090/register';

        let regObj = {
            "firstName": this.state.firstName,
            "lastName": this.state.lastName,
            "email": this.state.email,
            "mobNo": this.state.mobNo,
            "vehicalNo": this.state.vehicalNo,
            "adharNo": this.state.adharNo,
            "userName": this.state.userName,
            "password": this.state.password,
            "userRole": this.state.userRole,
        }
        axios.post(url, regObj)
            .then(result => {
                this.setState({ isLoading: false });
                if (result.data.status !== 'fail') {
                    this.setState({ redirect: true, authError: true });
                } else {
                    this.setState({ redirect: false, authError: true });
                }
            })
            .catch(error => {
                console.log(error);
                this.setState({ authError: true, isLoading: false });
            });
    };

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to="/login1" />
        }
    };

    render() {
        const validation = (e) => {
            e.preventDefault();
            if (this.state.firstName===""||this.state.lastName===""||this.state.adharNo===""||this.state.email===""||this.state.mobNo===""||this.state.vehicalNo===""||this.state.userRole===""||this.state.userName===""||
            this.state.password===""
            ) 
            {
                toast.error(' please fill all the fields!!!', {
                });
                return;
            }
            else
            {
                // this.renderRedirect() ;
            let nameval = /^[A-Za-z]/
            let emailVal = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
            let passVal = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
            let mobileval = /^([+]\d{2})? \d{10}$/
            let adharval = /^(\d{12}|\d{16})$/
            let vehicleno = /^[A-Z]{2}[ -][0-9]{1,2}(?: [A-Z])?(?: [A-Z]*)? [0-9]{4}$/
            let usernameval = /^(?=.{6,12}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/

            
            if (emailVal.test(this.state.email) === false) {
                toast.error('Please enter valid email', {
                    position: "bottom-left",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                return ;
            }
           
            if (nameval.test(this.state.firstName || this.state.lastName) === false) {
                toast.error('Please enter valid name', {
                    position: "bottom-left",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                return;
            }
            if (passVal.test(this.state.password) === false) {
                toast.error('Please enter valid password', {
                    position: "bottom-left",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                return;
            }
            if (mobileval.test(this.state.mobNo) === false) {
                toast.error('Please enter valid mobile No', {
                    position: "bottom-left",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                return;
            }
            if (adharval.test(this.state.adharNo) === false) {
                toast.error('Please enter valid aadharNo', {
                    position: "bottom-left",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                return;
            }
            if (usernameval.test(this.state.userName) === false) {
                toast.error('Please enter valid userName', {
                    position: "bottom-left",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                return ;
            }
            else
            {
                window.location.href="/login1"
            }

         }
    }
       
        const isLoading = this.state.isLoading;
        return (
            <div className="container">
                <div className="card card-login mx-auto mt-5">
                    <div className="card-header">Welcome To User Registeration</div>
                    <div className="card-body">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <div className="form-label-group">
                                    <label htmlFor="inputfirstName">First Name</label>
                                    <input type="text" id="inputfirstName" className="form-control" placeholder="First Name" name="firstName" required onChange={this.handleFirstNameChange} />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="form-label-group">
                                    <label htmlFor="inputLastName">Last Name</label>
                                    <input type="text" id="inputLastName" className="form-control" placeholder="Last Name" name="lastName"required onChange={this.handleLastNameChange} />
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="form-label-group">
                                    <label htmlFor="inputEmail">Email Address</label>
                                    <input id="inputEmail" className={"form-control " + (this.state.authError ? 'is-invalid' : '')} placeholder="Email Address" type="email" name="email" onChange={this.handleEmailChange} />
                                    <div className="invalid-feedback">
                                        Please provide a valid Email.
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="form-label-group">
                                    <label htmlFor="mobNo">Mobile Number</label>
                                    <input type="text" id="mobNo" className="form-control" placeholder="Mobile Number" required name="mobNo" onChange={this.handleMobileChange} />

                                </div>
                            </div>
                            <div className="form-group">
                                <div className="form-label-group">
                                    <label htmlFor="vehicalNo">Vehicle Number</label>
                                    <input type="text" id="vehicalNo" className="form-control" placeholder="Vehicle Reg. No." name="vehicalNo" required onChange={this.handleVehicalChange} />

                                </div>
                            </div>
                            <div className="form-group">
                                <div className="form-label-group">
                                    <label htmlFor="adharNo">Adhar Number</label>
                                    <input type="text" id="adharNo" className="form-control" placeholder="Adhar Card No." name="adharNo" required onChange={this.handleAdharChange} />

                                </div>
                            </div>
                            <div className="form-group">
                                <div className="form-label-group">
                                    <label htmlFor="userName">User Name</label>
                                    <input type="text" id="userName" className="form-control" placeholder="User Name" name="userName" required onChange={this.handleUserNameChange} />

                                </div>
                            </div>
                            <div className="form-group">
                                <div className="form-label-group">
                                    <label htmlFor="inputPassword">Password</label>
                                    <input type="password" className="form-control" id="inputPassword" placeholder="******" name="password" required autocomplete="on" onChange={this.handlePwdChange} />

                                </div>
                            </div>

                            <div className="form-group">
                                <div className="form-label-group">
                                    <label htmlFor="inputuserRole">Role</label>
                                    <input type="text" className="form-control" id="inputuserRole" placeholder="admin/user" 
                                    name="userRole" required onChange={this.handleuserRoleChange} 
                                    // value={thi}
                                    />

                                </div>
                            </div>


                            <div className="form-group">
                                <button className="btn btn-primary btn-block" type="submit" disabled={this.state.isLoading ? true : false}>Register &nbsp;&nbsp;&nbsp;
                                    {isLoading ? (
                                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                    ) : (
                                        <span></span>
                                    )}
                                </button>
                                <ToastContainer toastStyle={{ backgroundColor: "black", color:"white" }}/>
                            </div>
                        </form>
                        <div className="text-center">
                            <Link className="d-block small mt-3" to={"/login1"}>Login Your Account</Link>
                            <Link className="d-block small" to={'#'}>Forgot Password?</Link>
                        </div>
                    </div>
                </div>
                {this.renderRedirect()}
            </div>
        );
    }
}


