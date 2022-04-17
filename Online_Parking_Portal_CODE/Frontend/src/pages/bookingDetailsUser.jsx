import React, { Component } from "react";
import Header from "../elements/header";
import Sidebar from "../elements/sidebar";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

export default class bookingDetailsUser extends Component {
  state = {
    vehical: [],
    toDashboard: false,
    isLoading: false,
    user: "",
    role: "",
  };

  constructor(props) {
    super(props);
    this.url = "http://localhost:8090/getVechical";
    this.user = localStorage.getItem("user");
    this.editParkingDetails=this.editParkingDetails.bind(this);
  }
  editParkingDetails(vechicalId)
  {
      this.props.history.push(`/edit-parkingDetails/${vechicalId}`);
  }

  componentDidMount() {
    axios
      .get(this.url)
      .then((response) => {
        const vehical = response.data;
        this.setState({ vehical });
      })
      .catch((error) => {
        this.setState({ toDashboard: true });
        console.log(error);
      });
  }

  handleClickDelete = (param) => (e) => {
    console.log(param);
  };

//   delete = (index) => {
//     console.log("index ==> "+index);
//    // console.log("event ==> "+JSON.stringify(e));//
//     let url = "http://localhost:8090/deleteVechical/"+index;    
//     let obj = {};    
//     axios.delete(url, obj)
//     //axios.get(this.url)
//         .then(response => {
//             const vehical = response.data;
//             console.log(vehical)
//             this.setState({ vehical });

//         })
//         .catch(error => {
//           this.setState({ toDashboard: true });
//             console.log(error);
//         });

// }

  render() {
    const role = localStorage.getItem("currentUser");
    this.state.role = role;
    const isAdmin = this.state.role === '"admin"';
    console.log("Dipak", isAdmin);
    if (this.state.toDashboard === true) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <div id="wrapper">
          <Sidebar />
          <div id="content-wrapper">
            <div className="container-fluid">
              <ol className="breadcrumb">
                <li className="breadcrumb-item active">Parking Details</li>
                {isAdmin && (
                  <li className="ml-auto">
                    <Link to={"add"}>Add Parking Slot</Link>
                  </li>
                )}
              </ol>
              <div className="card mb-3">
                <div className="card-header">
                  &nbsp;&nbsp; Parking Facility List
                </div>
                <div className="card-body">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Parking Id</th>
                        <th>Parking Type</th>
                        <th>Parking Slots</th>
                        <th>Parking Address</th>
                        <th>Parking Name</th>
                        <th>Contact Number</th>
                        <th>Deposit</th>
                        <th>Rent</th>
                        <th>Action</th>
                        <th>Action</th>


                        {/* <th>Deposite</th> */}
                        {!isAdmin && <th className="text-center">Action</th>}
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.vehical.map((vehical, index) => (
                        <tr>
                          <td>{index + 1}</td>
                          <td>{vehical.vechicalType}</td>
                          <td>{vehical.company}</td>
                          <td>{vehical.modelNo}</td>
                          <td>{vehical.mobNo}</td>
                          <td>{vehical.color}</td>
                          <td>{vehical.deposit}</td>
                          <td>{vehical.rent}</td>

                          {!isAdmin && (
                            <td className="text-center">
                              <Link
                                className="btn btn-sm btn-info"
                                to={{
                                  pathname: "edit",
                                  search: "?id=" + vehical.vechicalId,
                                }}
                              >
                                Book
                              </Link>
                            </td>
                            
                          )}
                           
                                  <td>                            
                             
                                  <button className='btn btn-primary btn-block' onClick={()=>this.editParkingDetails(vehical.vechicalId)} >Update</button>
                                 </td>

                                 {/* <td>
                                <button  className="btn btn-danger btn-block" type="submit" 
                                //disabled={user.status=="In-Active"}
                                  onClick={() => this.delete(vehical.vechicalId)} > Delete 
                                  </button>  
                                  </td>   */}
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
