import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Home from "./components/home.component";
import About from "./components/about";
import Contact from "./components/contact";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Index from "./pages/index";
import AddPage from "./pages/add";
import EditPage from "./pages/edit";
import Register from "./pages/register";
import NotFound from "./pages/notfound";
import FileUploadPage from "./pages/fileupload";
import BookingDetails from "./pages/bookingdetails";
import AddPayment from "./pages/addPayment";
import PaymentList from "./pages/adminPaymentList";
import userList from "./pages/userList";
import BookingById from "./pages/bookingbyId";

import "./Navbar.css";
import update from './pages/update';
import Services from './pages/Services';
import bookingDetailsUser from './pages/bookingDetailsUser';
import loadingScreen from './pages/loadingScreen';
import footerScreen from './pages/footerScreen';


class App extends Component {

    render() {
        return (
            <div className="container-fluid nav_bg" >
                <nav class="navbar navbar-dark navbar-expand-sm ">
                    <div class="container">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#Navbar">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <a class="navbar-brand mr-auto" href="/"><b>Park-Easy</b></a>
                        <div class="collapse navbar-collapse" id="Navbar">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item active"><a class="nav-link" href="/"><span class="fa fa-home fa-lg"></span> Home</a></li>
                                <li class="nav-item active"><a class="nav-link" href="/About"><span class="fa fa-info fa-lg"></span> About</a></li>
                                <li class="nav-item active"><a class="nav-link" href="/Contact"><span class="fa fa-address-card fa-lg"></span> Contact</a></li>
                                <li class="nav-item active"><a class="nav-link" href="/Services"><span class="fa fa-address-card fa-lg"></span>Our Services</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <Switch>
                    <Route exact path={["/"]} component={Home} />
                    <Route exact path={["/splash"]} component={loadingScreen} />
                    <Route exact path='/login1' component={Login} />
                    <Route path='/dashboard' component={Dashboard} />
                    <Route path='/booking-details' component={BookingDetails} />
                    <Route path='/register' component={Register} />
                    <Route path='/add' component={AddPage} />
                    <Route path='/edit/' component={EditPage} />
                    <Route path='/bookingbyid/' component={BookingById} />
                    <Route path='/index' component={Index} />
                    <Route path='/add-payment/' component={AddPayment} />
                    <Route path='/list-payment' component={PaymentList} />
                    <Route path='/user-list' component={userList} />
                    <Route path='/fileupload/' component={FileUploadPage} />
                    <Route path='/About' component={About} />
                    <Route path='/Contact' component={Contact} />
                    <Route path='/Services' component={Services} />
                    <Route path='/bookingDetailsUser' component={bookingDetailsUser} />

                    <Route path='/edit-parkingDetails/:id' component={update} />
                    <Route path='*' component={NotFound} />
                    <Route path='/footer' component={footerScreen} />
                </Switch>
                <div>
                    {/* FOOTER */}
                <footer className="section footer-classNameic context-light bg-image"       
                 style={{background: "#e0ffff", margin:"5px 5px"}}
                 >
                <div className="container">
                    <div className="row row-30">
                        <div className="col-md-4 col-xl-5">
                            <div className="pr-xl-4"><a className="brand" href="index.html">
                                <img className="brand-logo-light" src="images/agency/logo-inverse-140x37.png" alt="" width="140" height="37" srcset="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8ORfxj83-YKJfEnAB80QYy2GeILh276CdPg&usqp=CAU"/></a>
                                <p>We are an award-winning creative agency, dedicated to the best result in parking system , promotion, business consulting, and marketing.</p>
                                {/* <!-- Rights--> */}
                                <p className="rights"><span>©  </span><span className="copyright-year">2022</span><span> </span><span>Waves</span><span>. </span><span>All Rights Reserved.</span></p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <h5>Contacts</h5>
                            <dl className="contact-list">
                                <dt>Address:</dt>
                                <dd>798 South Park Avenue, Jaipur, Raj</dd>
                            </dl>
                            <dl className="contact-list">
                                <dt>email:</dt>
                                <dd><a href="mailto:#">dkstudioin@gmail.com</a></dd>
                            </dl>
                            <dl className="contact-list">
                                <dt>phones:</dt>
                                <dd><a href="tel:#">https://karosearch.com</a> <span>or</span> <a href="tel:#">https://karosearch.com</a>
                                </dd>
                            </dl>
                        </div>
                        <div className="col-md-4 col-xl-3">
                            <h5>Links</h5>
                            <ul className="nav-list">
                                <li><a href="#">About</a></li>
                                <li><a href="#">Projects</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Contacts</a></li>
                                <li><a href="#">Pricing</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row no-gutters social-container">
                    <div className="col"><a className="social-inner" href="#"><span className="icon mdi mdi-facebook"></span><span>Facebook</span></a></div>
                    <div className="col"><a className="social-inner" href="#"><span className="icon mdi mdi-instagram"></span><span>instagram</span></a></div>
                    <div className="col"><a className="social-inner" href="#"><span className="icon mdi mdi-twitter"></span><span>twitter</span></a></div>
                    <div className="col"><a className="social-inner" href="#"><span className="icon mdi mdi-youtube-play"></span><span>google</span></a></div>
                </div>
            </footer>
                </div>
            </div>

        );
    }
}

export default App;
