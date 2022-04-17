import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import TitleComponent from "./title";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
export default class Login extends Component {

    state = {
        userName: '',
        password: '',
        redirect: false,
        authError: false,
        isLoading: false,
        location: {},
        userrole: ''
    };

    handleEmailChange = event => {
        this.setState({ userName: event.target.value });
    };
    handlePwdChange = event => {
        this.setState({ password: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ isLoading: true });
        const url = 'http://localhost:8090/userLogin';
        const userName = this.state.userName;
        const password = this.state.password;
        let obj = {
            'userName': userName,
            'password': password
        }
        axios.post(url, obj)
            .then(result => {
                console.log("result" + JSON.stringify(result));
                if (result.data.status == 'SUCCESS') {
                    this.state.userrole = result.data.userrole;
                    this.setState({ redirect: true, isLoading: false });
                    localStorage.setItem('isLoggedIn', true);
                    localStorage.setItem('user', JSON.stringify(result.data));
                    localStorage.setItem('currentUser', JSON.stringify(this.state.userrole));
                }
                else {
                    // console.log(error);
                    this.setState({ authError: true, isLoading: false });
                }
            })
            .catch(error => {
                console.log(error);
                this.setState({ authError: true, isLoading: false });
            });
    };

    renderRedirect = () => {
        console.log("this.state.userrole " + this.state.userrole);
        console.log("this.state.redirect " + this.state.redirect);
        if (this.state.redirect) {
            if (this.state.userrole === 'USER') {
                return <Redirect to='/booking-details' />
            } else {
                return <Redirect to='/index' />
            }

        }
    };

    render() {
        const isLoading = this.state.isLoading;
        // const validation =(e)=>{
        //     e.preventDefault();
        //     if(this.state.userName === "" || this.state.password === "")
        //     {
        //         // toast.error("fields cannot be empty")
        //         toast.error(' please fill all the fields!!!', {
        //             position: "bottom-left",
        //             autoClose: 2000,
        //             hideProgressBar: false,
        //             closeOnClick: true,
        //             pauseOnHover: true,
        //             draggable: true,
        //             progress: undefined,
                    
        //         });
        //         return ;
        //     }
        //     else
        //     {
        //        if(this.state.userrole==="USER")
        //        {
        //            window.location.href="/booking_details"
        //        }
        //        else{
        //            window.location.href="/index"
        //        }
        //     }
        // }
            
        return (

            <div className="container">

                <TitleComponent title="Car Rental"></TitleComponent>
                <div className="card card-login mx-auto mt-5">
                    <div className="card-header">Welcome To  Login</div>
                    <div className="card-body">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <div className="form-label-group">
                                    <label htmlFor="inputuserName">User Name</label>
                                    <input className={"form-control " + (this.state.authError ? 'is-invalid' : '')} id="inputuserName" placeholder="User Name" type="text" name="userName" onChange={this.handleEmailChange}/>

                                    <div className="invalid-feedback">
                                        Please provide a valid User Name.
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="form-label-group">
                                    <label htmlFor="inputPassword">Password</label>
                                    <input type="password" className={"form-control " + (this.state.authError ? 'is-invalid' : '')} id="inputPassword" placeholder="******" name="password" onChange={this.handlePwdChange}/>

                                    <div className="invalid-feedback">
                                        Please provide a valid Password.
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox" value="remember-me" />Remember Password
                                    </label>
                                </div>
                            </div>
                            <div className="form-group">
                                <button className="btn btn-primary btn-block" type="submit" disabled={this.state.isLoading ? true : false}>Login &nbsp;&nbsp;&nbsp;
                                    {isLoading ? (
                                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                    ) : (
                                        <span></span>
                                    )}
                                </button>
                                <ToastContainer toastStyle={{ backgroundColor: "black", color:"white" }} />
                            </div>
                        </form>
                        <div className="text-center">
                            <Link className="d-block small mt-3" to={'register'}>Register an Account</Link>
                            {/* <a className="d-block small" href="forgot-password.html">Forgot Password?</a> */}
                        </div>
                    </div>
                </div>
                {this.renderRedirect()}
            </div>
        );
    }
}


