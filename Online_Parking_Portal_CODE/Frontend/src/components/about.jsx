import React from 'react'
import '../assets/css/about.css'

const Aboutpage = (props) => {
    return (
        <div class="pt-5 pb-5" className="mainDiv">
            <div class="container">
                <div class="row">
                    <div class="section-head col-sm-12">
                        <h4 ><span>About</span> Us</h4>
                        <b><p style={{ color: "black" }}>We are in this field over the decade now our branches are there in various cities of India , we have around 250k customers who solve their problem on daily basis and we are in contact with indian gov to solve the issue of parking.</p></b>
                    </div>
                    <div class="col-lg-4 col-sm-6">
                        <div class="item" > <span class="icon feature_box_col_one">
                            <img src="https://www.forbes.com/advisor/wp-content/uploads/2020/10/parking-lot-e1603271819709.jpg" style={{ height: "80px", width: "80px", marginBottom: "15px", borderRadius: "20px" }} />
                        </span>
                            <h6 style={{ color: "black" }}>Pattern Parking</h6>
                           {/* <p style={{ color: "black" }}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor Aenean massa.</p> */}
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6">
                        <div class="item"> <span class="icon feature_box_col_two">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToLIATChLiSOYrXKMZDrXzLRfyOpegD135Dw&usqp=CAU" style={{ height: "80px", width: "80px", marginBottom: "15px", borderRadius: "20px" }} />
                        </span>
                            <h6 style={{ color: "black" }}>Parking Space</h6>
                            {/* <p style={{ color: "black" }}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor Aenean massa.</p> */}
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6">
                        <div class="item"> <span class="icon feature_box_col_three">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0b07voHq8LhLs4C6HxJ0DqX-u912qtzNRcQ&usqp=CAU" style={{ height: "80px", width: "80px", marginBottom: "15px", borderRadius: "20px" }} />
                        </span>
                            <h6 style={{ color: "black" }}>Security</h6>
                            {/* <p style={{ color: "black" }}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor Aenean massa.</p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Aboutpage;