import React, { Component } from 'react';
import Header from "../elements/header";
import Sidebar from "../elements/sidebar";
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios';

export default class Index extends Component {
    state = {
        user: [],
        toDashboard: false,
        isLoading: false,
        role:''
    };

    constructor(props) {
        super(props);
        this.url = 'http://localhost:8090/getAllUser';
        //this.token = localStorage.getItem('token');
    }

    componentDidMount() {
        axios.get(this.url)
            .then(response => {
                const user = response.data;
                console.log(user)
                this.setState({ user });
            })
            .catch(error => {
                this.setState({ toDashboard: true });
                console.log(error);
            });
    }

    
    inActive = (index) => {
        console.log("index ==> "+index);
       // console.log("event ==> "+JSON.stringify(e));
        let url = "http://localhost:8090/InActiveUser/"+index;    
        let obj = {};    
        axios.post(url, obj)
        //axios.get(this.url)
            .then(response => {
                const user = response.data;
                console.log(user)
                this.setState({ user });
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
             
                <div id="wrapper">
                    <Sidebar/>
                    <div id="content-wrapper">
                        <div className="container-fluid">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item active">User Details</li>
                            </ol>
                            <div className="card mb-3">
                                <div className="card-header"><i className="fas fa-table"></i>
                                    &nbsp;&nbsp;User List
                                </div>
                                <div className="card-body">
                                    <table className="table table-bordered">
                                        <thead>
                                        <tr>
                                            <th>User Id</th>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>User Name</th>
                                            <th>Vehicle Reg. No</th>
                                            <th>Adhar Card No</th>
                                       
                                            <th>Contact No.</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                             
                                        </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.user.map((user , index)=>
                                           // const _status = user.status =="In-Active"?"Active":"In-Active";
                                                <tr>
                                                    <td>{index + 1}</td>
                                                    <td>{user.firstName}</td>
                                                    <td>{user.lastName}</td>
                                                    <td>{user.userName}</td>
                                                    <td>{user.licenseNo}</td>
                                                    <td>{user.adharNo}</td>
                                                    <td>{user.mobNo}</td>
                                                    <td>{user.status}</td>
                                                    <td>
                                                    <button  className="btn btn-primary btn-block" type="submit" 
                                                    //disabled={user.status=="In-Active"}
                                                    onClick={() => this.inActive(index+1)} > In-Active/Active  </button>                                  
                                                    </td>
                                                </tr>
                                        
                                                )
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
