import React from "react";
import '../Components/App.css';
import emailLogo from '../images/green-email-icon-23.jpg';
export default function footerbar() {
  return (
    <div class="bg-light pt-5 mt-5">
        <div class="container">
            <div class="row">
                
                <div class="col-sm-6 col-md-3">
                    <div class="widget-title">
                        <h3 class="mb-4 fs-5 text-secondary text-uppercase">About Ewaste</h3>
                    </div>
                    <ul>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Blog</a></li>
                        <li><a href="/">Contact</a></li>
                        <li><a href="/">E waste Laws</a></li>
                    </ul>
                </div>
                <div class="col-sm-6 col-md-3">
                    <div class="widget-title">
                        <h3 class="mb-4 fs-5 text-secondary text-uppercase">What We do</h3>
                    </div>
                    <ul>
                        <li><a href="/">Collection</a></li>
                        <li><a href="/">Sorting</a></li>
                        <li><a href="/">Send to E waste clinic</a></li>
                        <li><a href="/">Tracking</a></li>
                        
                    </ul>
                </div>
                <div class="col-sm-6 col-md-3">
                    <div class="widget-title">
                        <h3 class="mb-4 fs-5 text-secondary text-uppercase">Newsletter signup</h3>
                    </div>
                    <form class="row row-cols-lg-auto g-3 align-items-center">
                        <div class="col-12">
                            <label class="visually-hidden">Email</label>
                            <div class="input-group">
                                <div class="input-group-text"><img src={emailLogo} alt="" height={35} /> <i class="bi bi-envelope"></i></div>
                                <input type="text" class="form-control" placeholder="Email Id"/>
                            </div>
                        </div>
                        <div class="col-12">
                            <button type="submit" class="btn btn-success w-100">Submit</button>
                        </div>
                    </form>
                </div>
            <div class="col-sm-6 col-md-3">
                    <div class="widget-title">
                        <h3 class="mb-4 fs-5 text-secondary text-uppercase">Customer support</h3>
                    </div>
                    <h4 class="text-success">+91-12345-67890</h4>
                </div>
            </div>
        </div>
        <div class="col-12">
            <p class="text-center text-white py-1 mt-1 bg-secondary">© No Copyright 2033 . Save Earth  Save.</p>
        </div>
    </div>
  );
}
