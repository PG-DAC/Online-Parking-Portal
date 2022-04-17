import React, { Component } from 'react'
import Header from "../elements/header";
import Sidebar from "../elements/sidebar";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import ParkingService from '../services/ParkingService';
 class update extends Component {
   constructor(props)
   {
  super(props)
  this.state = {
    id:this.props.match.params.id,
    message:'',
    vechicalType:'',
    company:'',
    modelNo:'',
    mobNo:'',
    color:'',
    imagePath:'',
    deposit:'',
    rent:'',
    vechicalstatus:'',
    status:'',
    redirect: false,
    toDashboard: false,
    isLoading: false,
   }
  //  this.changevechicalTypeHandler= this.changevechicalTypeHandle.bind(this);
  //  this.changecompanyHandler= tt5rjuhis.changecompanyHandler.bind(this);
  //  this.changemodelNoHandler= this.changemodelNoHandler.bind(this);
  //  this.changemobNoHandler= this.changemobNoHandler.bind(this);
  //  this.changecolorHandler= this.changecolorHandler.bind(this);
  //  this.changedepositHandler= this.changedepositHandler.bind(this);
  //  this.changerentHandler= this.changerentHandler.bind(this);
this.updatePrkingData=this.updatePrkingData.bind(this);
  };
componentDidMount(){
  ParkingService.vechicalById(this.state.id).then((res)=>{
    let parkingInfo=res.data;
   console.log(JSON.stringify(parkingInfo))
    this.setState({
      vechicalType:parkingInfo.vechicalType,
      company:parkingInfo.company,
      modelNo:parkingInfo.modelNo,
      mobNo:parkingInfo.mobNo,
      color:parkingInfo.color,
      deposit:parkingInfo.deposit,
      rent:parkingInfo.rent,
      status:parkingInfo.status,
      vechicalId:parkingInfo.vechicalId,
      message:parkingInfo.message,
      imagePath:parkingInfo.imagePath,
      vechicalstatus:parkingInfo.vechicalstatus
  })
  })
}
updatePrkingData=(e)=>
{
  e.preventDefault();
  let parkingInfo={
    vechicalType:this.state.vechicalType,
    company:this.state.company,
    modelNo:this.state.modelNo,
    mobNo:this.state.mobNo,
    color:this.state.color,
    deposit:this.state.deposit,
    rent:this.state.rent,
    status:this.state.status,
    vechicalId:this.state.vechicalId,
    message:this.state.message,
    imagePath:this.state.imagePath,
    vechicalstatus:this.state.vechicalstatus
  };
     console.log('ParkingInfo: '+JSON.stringify(parkingInfo));
   
     ParkingService.updatePrkingData(parkingInfo,this.props.match.params.id).then(res=>
     {
       // here is the catch
     console.log('ParkingInfo: '+JSON.stringify(parkingInfo,this.props.match.params.id));

       this.props.history.push('/booking-details');
       
    })
}
changevechicalTypeHandler=(event)=>
{
  this.setState({vechicalType:event.target.value});
}
changecompanyHandler=(event)=>
{
  this.setState({company:event.target.value});
}
changemodelNoHandler=(event)=>
{
  this.setState({modelNo:event.target.value});
}
changemobNoHandler=(event)=>
{
  this.setState({mobNo:event.target.value});
}
changecolorHandler=(event)=>
{
  this.setState({color:event.target.value});
}
changedepositHandler=(event)=>
{
  this.setState({deposit:event.target.value});
}
changerentHandler=(event)=>
{
  this.setState({rent:event.target.value});
}
changestatusHandler=(event)=>
{
  this.setState({status:event.target.value});
}
changevechicalIdHandler=(event)=>
{
  this.setState({status:event.target.value});
}
changemessageHandler=(event)=>
{
  this.setState({status:event.target.value});
}
changeimagePathHandler=(event)=>
{
  this.setState({status:event.target.value});
}
changevechicalstatusHandler=(event)=>
{
  this.setState({status:event.target.value});
}

// updateParking11 = (event) => {
//     event.preventDefault();
//     this.setState({ isLoading: true });
//     const url = "http://localhost:8090/saveVechical";
//     const vechicalType = document.getElementById("vechicalType").value;
//     const company = document.getElementById("company").value;
//     const modelNo = document.getElementById("modelNo").value;
//     const mobNo = document.getElementById("mobNo").value;
//     const color = document.getElementById("color").value;
//     const imagePath = document.getElementById("imagePath").value;
//     const deposit = document.getElementById("deposit").value;
//     const rent = document.getElementById("rent").value;

//     let saveObj = {
//       vechicalType: vechicalType,
//       company: company,
//       modelNo: modelNo,
//       mobNo: mobNo,
//       color: color,
//       imagePath: imagePath,
//       deposit: deposit,
//       rent: rent,

//       status: "Active",
//     };

//     console.log(saveObj);
//     axios
//       .post(url, saveObj)
//       .then((result) => {
//         if (result.data.status) {
//           this.setState({ redirect: true, isLoading: false });
//         }
//       })
//       .catch((error) => {
//         this.setState({ toDashboard: true });
//         console.log(error);
//       });
//   };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/booking-details" />;
    }
  };

  render() {
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
                  <form onSubmit={this.updateParking}>
                    <div className="form-group">
                      <div className="form-row">
                        <div className="col-md-6">
                          <div className="form-label-group">
                            <label htmlFor="vechicalType">Parking Type</label>
                            <input
                              type="text"
                              id="vechicalType"
                              className="form-control"
                              required="required"
                              autoFocus="autofocus"
                              value={this.state.vechicalType}
                              onChange={this.changevechicalTypeHandler}
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
                              value={this.state.company}
                              required="required"
                              onChange={this.changecompanyHandler}
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
                              value={this.state.modelNo}
                              required="required"
                              onChange={this.changemodelNoHandler}
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
                              value={this.state.color}
                              onChange={this.changecolorHandler}
                              required="required"
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
                              value={this.state.mobNo}
                              onChange={this.changemobNoHandler}
                              required="required"
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
                              //value={this.state.imagePath}
                              placeholder="Add Image"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="form-row">
                        <div className="col-md-6">
                          <div className="form-label-group">
                            <label htmlFor="deposit">
                              Enter Deposit Amount
                            </label>
                            <input
                              type="number"
                              id="deposit"
                              className="form-control"
                              value={this.state.deposit}
                              onChange={this.changedepositHandler}
                              required="required"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-label-group">
                            <label htmlFor="rent">Enter Rent</label>
                            <input
                              type="number"
                              id="rent"
                              className="form-control"
                              value={this.state.rent}
                              onChange={this.changerentHandler}
                              required="required"
                            />
                          </div>
                        </div>
                    
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="form-row">
                        <div className="col-md-6"></div>
                      </div>
                    </div>
                    {/* <button
                      className="btn btn-primary btn-block"
                      type="submit"
                      disabled={this.state.isLoading ? true : false}
                    >
                      Save &nbsp;&nbsp;&nbsp;
                      {isLoading ? (
                        <span
                          className="spinner-border spinner-border-sm"
                          role="status"
                          aria-hidden="true"
                        ></span>
                      ) : (
                        <span></span>
                      )}
                    </button> */}

                    <button className='btn btn-success btn-block' onClick={this.updatePrkingData}>
                     Save
                    </button>
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
export default update