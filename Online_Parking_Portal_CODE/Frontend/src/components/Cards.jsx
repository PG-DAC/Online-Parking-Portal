import React, { Component } from 'react';
import "./card-style.css";
 import Card from "./CardUI";
import img1 from "./user.svg";
import img2 from "./vendor.svg";
import img3 from "./admin.svg";

 class Cards extends Component{
     render(){
         return(
             <div className="container-fluid d-flex justify-content-center">
                 <div className="row">
                     <div className="col-md-4">
                         <Card imgsrc={img1} title="User"/>
                     </div>
                     <div className="col-md-4">
                     <Card imgsrc={img2} title="Vendor"/>
                     </div>
                     <div className="col-md-4">
                     <Card imgsrc={img3} title="Admin"/>
                     </div>
                 </div>
             </div>
         );
 }
}
export default Cards;
