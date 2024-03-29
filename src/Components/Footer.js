import React from 'react'
import './Footer.css';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className='footer_class'>
            <footer id="footer" class="text-white d-flex-column text-center" style={{ backgroundColor: '#212121' }}>
                <hr class="mt-0" />
                {/* <!--Social buttons--> */}
                <div class="text-center" >
                    <h4>You can find us at</h4>
                    <ul class="list-unstyled list-inline">
                        <li class="list-inline-item">
                            <a href="#!" class="sbtn btn-large mx-1" title="Facebook">
                                <i class="fab fa-facebook-square fa-2x"></i>
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a href="#!" class="sbtn btn-large mx-1" title="Linkedin">
                                <i class="fab fa-linkedin fa-2x"></i>
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a href="#!" class="sbtn btn-large mx-1" title="Twitter">
                                <i class="fab fa-twitter-square fa-2x"></i>
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a href="#!" class="sbtn btn-large mx-1" title="Youtube">
                                <i class="fab fa-youtube-square fa-2x"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <hr class="mb-0" />
                {/* <!--Footer Links--> */}
                <div class="container text-left text-md-center">
                    <div class="row">
                        {/* <!--First column--> */}
                        <div class="col-md-3 mx-auto shfooter">
                            <h5 class="my-2 font-weight-bold d-none d-md-block">Product</h5>
                            <div class="d-md-none title" data-target="#Product" data-toggle="collapse">
                                <div class="mt-3 font-weight-bold">Product
                                    <div class="float-right navbar-toggler">
                                        <i class="fas fa-angle-down"></i>
                                        <i class="fas fa-angle-up"></i>
                                    </div>
                                </div>
                            </div>
                            <ul class="list-unstyled collapse" id="Product">
                                <li><a href="#">Create Websites</a></li>
                                <li><a href="#">Secure Cloud Hosting</a></li>
                                <li><a href="#">Engage Your Audience</a></li>
                                <li><a href="#">Website Support</a></li>
                            </ul>
                        </div>
                        {/* <!--/.First column--> */}
                        <hr class="clearfix w-100 d-md-none mb-0" />
                        {/* <!--Second column--> */}
                        <div class="col-md-3 mx-auto shfooter">
                            <h5 class="my-2 font-weight-bold d-none d-md-block">Company</h5>
                            <div class="d-md-none title" data-target="#Company" data-toggle="collapse">
                                <div class="mt-3 font-weight-bold">Company
                                    <div class="float-right navbar-toggler">
                                        <i class="fas fa-angle-down"></i>
                                        <i class="fas fa-angle-up"></i>
                                    </div>
                                </div>
                            </div>
                            <ul class="list-unstyled collapse" id="Company">
                                <li><Link to='/aboutus' >About Us</Link></li>
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">Support</a></li>
                                <li><a href="#">Pricing</a></li>
                                <li><a href="#">FAQ</a></li>
                            </ul>
                        </div>
                        {/* <!--/.Second column--> */}
                        <hr class="clearfix w-100 d-md-none mb-0" />
                        {/* <!--Third column--> */}
                        <div class="col-md-3 mx-auto shfooter">
                            <h5 class="my-2 font-weight-bold d-none d-md-block">Resources</h5>
                            <div class="d-md-none title" data-target="#Resources" data-toggle="collapse">
                                <div class="mt-3 font-weight-bold">Resources
                                    <div class="float-right navbar-toggler">
                                        <i class="fas fa-angle-down"></i>
                                        <i class="fas fa-angle-up"></i>
                                    </div>
                                </div>
                            </div>
                            <ul class="list-unstyled collapse" id="Resources">
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">eBooks</a></li>
                                <li><a href="#">Whitepapers</a></li>
                                <li><a href="#">Comparison Guide</a></li>
                                <li><a href="#">Website Grader</a></li>
                            </ul>
                        </div>
                        {/* <!--/.Third column--> */}
                        <hr class="clearfix w-100 d-md-none mb-0" />
                        {/* <!--Fourth column--> */}
                        <div class="col-md-3 mx-auto shfooter">
                            <h5 class="my-2 font-weight-bold d-none d-md-block">Get Help</h5>
                            <div class="d-md-none title" data-target="#Get-Help" data-toggle="collapse">
                                <div class="mt-3 font-weight-bold">Get Help
                                    <div class="float-right navbar-toggler">
                                        <i class="fas fa-angle-down"></i>
                                        <i class="fas fa-angle-up"></i>
                                    </div>
                                </div>
                            </div>
                            <ul class="list-unstyled collapse" id="Get-Help">
                                <li><a href="#" target="_blank">Help Center</a></li>
                                <li><Link to='/contact' >Contact Us</Link></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms</a></li>
                                <li><Link to='/' >Login</Link></li>
                            </ul>
                        </div>
                        {/* <!--/.Fourth column--> */}
                    </div>
                </div>
                {/* <!--/.Footer Links--> */}
                <hr class="mb-0" />
                {/* <!--Copyright--> */}
                <div class="py-3 text-center">
                    Copyright @ 2023
                    <script>
                        document.write(new Date().getFullYear())
                    </script> <a href="#"></a>
                </div>
                {/* <!--/.Copyright--></hr> */}
            </footer>
            {/* <h5 class="resize"><i class="fas fa-angle-double-left"></i>Resize screen to see magic<i class="fas fa-angle-double-right"></i></h5> */}
        </div>
    );
}

export default Footer