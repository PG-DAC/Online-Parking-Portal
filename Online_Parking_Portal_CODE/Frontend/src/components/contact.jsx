import React from 'react'
import { BsFillTelephoneOutboundFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md';
import { ImEarth } from 'react-icons/im';
import { IoLocationSharp } from 'react-icons/io5';
// import '../assets/css/contact.css'
const contact = () => {
    return (
        <div style={{backgroundColor:"#ffebcd"}}>
            <h3 style={{ padding: "15px 15px", color:"blue" }}><b>
                <marquee behavior="scroll" direction="right" scrollamount="18">For any Query Contact</marquee>
                </b></h3>

            <marquee scrolldirection="left" scrollamount="20">
                <b><p style={{ fontSize: "20px", color: "red" }}>We Are Here Your Service 24 Hrs</p></b>
            </marquee>

            <div style={{ height: "100%", width: "60%", margin: "auto", marginBottom: "55px" , border:"5px solid black" }}>

                {/* Phone */}
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", backgroundColor: "white" }}>


                    <BsFillTelephoneOutboundFill style={{ height: "20px", width: "30px", color: "blue" }} />
                    <span style={{
                        fontSize: "20px", marginLeft: "5px", color:"black"
                    }}>
                        <b>Phone :-</b>
                    </span>
                </div>
                <div style={{ margin: "5px 45px", display: "flex", justifyContent: "space-evenly", flexDirection: "column" }}>
                    <b><span style={{ padding: "3px" }}>{'+91-9898989898'}</span></b>
                    <b><span style={{ padding: "3px" }}>{'+91-7676767676'}</span></b>
                </div>
                <hr
                    style={{
                        backgroundColor: "lightgray",
                        height: 1,
                        width: "100%"
                    }}
                />
                {/* email */}
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", backgroundColor: "white" }}>

                    <MdEmail style={{ height: "20px", width: "30px", color: "blue" }} />
                    <span style={{
                        fontSize: "20px", marginLeft: "5px"
                    }}>
                        <b>Email :-</b>
                    </span>
                </div>
                {/* inner email */}
                <div style={{ margin: "5px 45px", display: "flex", justifyContent: "space-evenly", flexDirection: "column" }}>
                    <b><span style={{ padding: "3px" }}>{'cdacnetcom24@gmail.com'}</span>
                    </b>
                </div>
                {/* inner email ends */}
                <hr
                    style={{
                        backgroundColor: "lightgray",
                        height: 1,
                        width: "100%"
                    }}
                />
                {/* website */}
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", backgroundColor: "white" }}>

                    <ImEarth style={{ height: "20px", width: "30px", color: "blue" }} />
                    <span style={{
                        fontSize: "20px", marginLeft: "5px"
                    }}>
                        <b>Website :-</b>
                    </span>
                </div>
                {/* inner website */}
                <div style={{ margin: "5px 45px", display: "flex", justifyContent: "space-evenly", flexDirection: "column" }}>
                    <b><span style={{ padding: "3px" }}>{'www.onlineparking.com'}</span></b>
                </div>
                <hr
                    style={{
                        backgroundColor: "lightgray",
                        height: 1,
                        width: "100%"
                    }}
                />
                {/* inner website ends */}
                {/* location */}
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", backgroundColor: "white" }}>

                    <IoLocationSharp style={{ height: "20px", width: "30px", color: "blue" }} />
                    <span style={{
                        fontSize: "20px", marginLeft: "5px"
                    }}>
                        <b>Location :-</b>
                    </span>
                </div>
                {/* inner location */}
                <div style={{ margin: "5px 45px", display: "flex", justifyContent: "space-evenly", flexDirection: "column" }}>
                    <b> <span style={{ padding: "3px" }}>{'Software IT Park IT-23, Sitapura Industrial Area, EPIP, Opposite RIICO Office, Near Globe Circle, Jaipur, Rajasthan-302022'}
                        {'   '}
                    </span>
                        <a style={{ paddingLeft: "5px" }} href="https://goo.gl/maps/eubn7fNbxRYSTQMt6">See On Google</a>
                    </b>

                </div>
            </div>
        </div>
    )
}

export default contact