import React from 'react';
import { Link } from 'react-router-dom';

import './Property.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap';


const Property = () => {
  return (
    <div>
        
        {/* <!-- Property List Start --> */}
        <div className="container-xxl py-5">
            <div className="container7">
                <div className="row g-0 gx-5 align-items-end">
                    <div className="col-lg-12">
                        <div className="text-start mx-auto mb-5 wow slideInLeft" data-wow-delay="0.1s">
                            <h1 className="mb-8">Featured Projects</h1>
                            <p className="mb-9">Find Your Dream Home From Our Newly Added Properties</p>
                        </div>
                    </div>
                    
                </div>
                <div className="tab-content">
                    <div id="tab-1" className="tab-pane fade show p-0 active">
                        <div className="row g-4">
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="property-item rounded overflow-hidden">
                                    <div className="position-relative overflow-hidden">
                                        <Link to="/risesportsvillas"><img className="img-fluid" src="images/slider1.jpg" alt=""/></Link>
                                        <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sell</div>
                                        <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Appartment</div>
                                    </div>
                                    <div className="p-2 pb-0">
                                        <a className="d-block main_heading" href=""> Rise Sports Villa </a>
                                        <div className="para_new"><i className="fa fa-map-marker-alt text-primary me-2"></i>Greater Noida West</div>
                                    </div>

                                        <div className="divide">
                                            <div className="left_part"> 3 BED + ATTIC / MAIDS ROOM </div>
                                            <div className="second_part"> 4 BED + ATTIC / MAIDS ROOM </div>
                                        </div>

                                    <div className="d-flex border-top">
                                        <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2"></i>2495 Sqft</small>
                                        <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2"></i>3/4 Bed</small>
                                        <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                                    </div>
                                </div>
                            </div>

                            {/* Second Images */}
                            
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="property-item rounded overflow-hidden">
                                    <div className="position-relative overflow-hidden">
                                        <a href=""><img className="img-fluid" src="images/slider2.jpg" alt=""/></a>
                                        <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sell</div>
                                        <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Appartment</div>
                                    </div>
                                    <div className="p-2 pb-0">
                                        <a className="d-block main_heading" href=""> Rise Forest Floor </a>
                                        <div className="para_new"><i className="fa fa-map-marker-alt text-primary me-2"></i>Greater Noida West</div>
                                    </div>

                                        <div className="divide">
                                            <div className="left_part"> 3 BED + 2 TOILETS</div>
                                            <div className="second_part"> 3 BED + 3 TOILETS </div>
                                        </div>

                                    <div className="d-flex border-top">
                                        <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2"></i>1475 Sqft</small>
                                        <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                                        <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2"></i>2/3 TOILETS</small>
                                    </div>
                                </div>
                            </div>


                            {/* Third Images  */}
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="property-item rounded overflow-hidden">
                                    <div className="position-relative overflow-hidden">
                                        <a href=""><img className="img-fluid" src="images/slider3.jpg" alt=""/></a>
                                        <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">Sold Out</div>
                                        <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Appartment</div>
                                    </div>
                                    <div className="p-2 pb-0">
                                        <a className="d-block main_heading" href=""> Commercial Space </a>
                                        <div className="para_new"><i className="fa fa-map-marker-alt text-primary me-2"></i>Greater Noida West</div>
                                    </div>

                                        <div className="divide">
                                            <div className="left_part"> PALM STREET </div>
                                            <div className="second_part"> MADISON SQUARE </div>
                                        </div>

                                    <div className="d-flex border-top">
                                        <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2"></i>1000 Sqft</small>
                                        <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                                        <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                                    </div>
                                </div>
                            </div>

                            {/* Fourth Images  */}
                            
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="property-item rounded overflow-hidden">
                                    <div className="position-relative overflow-hidden">
                                        <a href=""><img className="img-fluid" src="images/slider1.jpg" alt=""/></a>
                                        <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sell</div>
                                        <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Appartment</div>
                                    </div>
                                    <div className="p-2 pb-0">
                                        <a className="d-block main_heading" href=""> Rise Golf Villa </a>
                                        <div className="para_new"><i className="fa fa-map-marker-alt text-primary me-2"></i>Greater Noida West</div>
                                    </div>

                                        <div className="divide">
                                            <div className="left_part"> 3 BED + ATTIC / MAIDS ROOM </div>
                                            <div className="second_part"> 4 BED + ATTIC / MAIDS ROOM </div>
                                        </div>

                                    <div className="d-flex border-top">
                                        <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2"></i>2495 Sqft</small>
                                        <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2"></i>3/4 Bed</small>
                                        <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>
                    <div id="tab-2" className="tab-pane fade show p-0">
                        <div className="row g-4">
                            <div className="col-lg-4 col-md-6">
                                <div className="property-item rounded overflow-hidden">
                                    <div className="position-relative overflow-hidden">
                                        <a href=""><img className="img-fluid" src="img/property-1.jpg" alt=""/></a>
                                        <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sell</div>
                                        <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Appartment</div>
                                    </div>
                                    <div className="p-4 pb-0">
                                        <h5 className="text-primary mb-3">$12,345</h5>
                                        <a className="d-block h5 mb-2" href="">Golden Urban House For Sell</a>
                                        <p><i className="fa fa-map-marker-alt text-primary me-2"></i>123 Street, New York, USA</p>
                                    </div>
                                    <div className="d-flex border-top">
                                        <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2"></i>1000 Sqft</small>
                                        <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                                        <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="property-item rounded overflow-hidden">
                                    <div className="position-relative overflow-hidden">
                                        <a href=""><img className="img-fluid" src="img/property-2.jpg" alt=""/></a>
                                        <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Rent</div>
                                        <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Villa</div>
                                    </div>
                                    <div className="p-4 pb-0">
                                        <h5 className="text-primary mb-3">$12,345</h5>
                                        <a className="d-block h5 mb-2" href="">Golden Urban House For Sell</a>
                                        <p><i className="fa fa-map-marker-alt text-primary me-2"></i>123 Street, New York, USA</p>
                                    </div>
                                    <div className="d-flex border-top">
                                        <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2"></i>1000 Sqft</small>
                                        <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                                        <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="property-item rounded overflow-hidden">
                                    <div className="position-relative overflow-hidden">
                                        <a href=""><img className="img-fluid" src="img/property-3.jpg" alt=""/></a>
                                        <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sell</div>
                                        <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Office</div>
                                    </div>
                                    <div className="p-4 pb-0">
                                        <h5 className="text-primary mb-3">$12,345</h5>
                                        <a className="d-block h5 mb-2" href="">Golden Urban House For Sell</a>
                                        <p><i className="fa fa-map-marker-alt text-primary me-2"></i>123 Street, New York, USA</p>
                                    </div>
                                    <div className="d-flex border-top">
                                        <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2"></i>1000 Sqft</small>
                                        <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                                        <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="property-item rounded overflow-hidden">
                                    <div className="position-relative overflow-hidden">
                                        <a href=""><img className="img-fluid" src="img/property-4.jpg" alt=""/></a>
                                        <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Rent</div>
                                        <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Building</div>
                                    </div>
                                    <div className="p-4 pb-0">
                                        <h5 className="text-primary mb-3">$12,345</h5>
                                        <a className="d-block h5 mb-2" href="">Golden Urban House For Sell</a>
                                        <p><i className="fa fa-map-marker-alt text-primary me-2"></i>123 Street, New York, USA</p>
                                    </div>
                                    <div className="d-flex border-top">
                                        <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2"></i>1000 Sqft</small>
                                        <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                                        <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="property-item rounded overflow-hidden">
                                    <div className="position-relative overflow-hidden">
                                        <a href=""><img className="img-fluid" src="img/property-5.jpg" alt=""/></a>
                                        <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sell</div>
                                        <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Home</div>
                                    </div>
                                    <div className="p-4 pb-0">
                                        <h5 className="text-primary mb-3">$12,345</h5>
                                        <a className="d-block h5 mb-2" href="">Golden Urban House For Sell</a>
                                        <p><i className="fa fa-map-marker-alt text-primary me-2"></i>123 Street, New York, USA</p>
                                    </div>
                                    <div className="d-flex border-top">
                                        <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2"></i>1000 Sqft</small>
                                        <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                                        <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="property-item rounded overflow-hidden">
                                    <div className="position-relative overflow-hidden">
                                        <a href=""><img className="img-fluid" src="img/property-6.jpg" alt=""/></a>
                                        <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Rent</div>
                                        <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Shop</div>
                                    </div>
                                    <div className="p-4 pb-0">
                                        <h5 className="text-primary mb-3">$12,345</h5>
                                        <a className="d-block h5 mb-2" href="">Golden Urban House For Sell</a>
                                        <p><i className="fa fa-map-marker-alt text-primary me-2"></i>123 Street, New York, USA</p>
                                    </div>
                                    <div className="d-flex border-top">
                                        <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2"></i>1000 Sqft</small>
                                        <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                                        <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 text-center">
                                <a className="btn btn-primary py-3 px-5" href="">Browse More Property</a>
                            </div>
                        </div>
                    </div>
                    <div id="tab-3" className="tab-pane fade show p-0">
                        <div className="row g-4">
                            <div className="col-lg-4 col-md-6">
                                <div className="property-item rounded overflow-hidden">
                                    <div className="position-relative overflow-hidden">
                                        <a href=""><img className="img-fluid" src="img/property-1.jpg" alt=""/></a>
                                        <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sell</div>
                                        <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Appartment</div>
                                    </div>
                                    <div className="p-4 pb-0">
                                        <h5 className="text-primary mb-3">$12,345</h5>
                                        <a className="d-block h5 mb-2" href="">Golden Urban House For Sell</a>
                                        <p><i className="fa fa-map-marker-alt text-primary me-2"></i>123 Street, New York, USA</p>
                                    </div>
                                    <div className="d-flex border-top">
                                        <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2"></i>1000 Sqft</small>
                                        <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                                        <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="property-item rounded overflow-hidden">
                                    <div className="position-relative overflow-hidden">
                                        <a href=""><img className="img-fluid" src="img/property-2.jpg" alt=""/></a>
                                        <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Rent</div>
                                        <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Villa</div>
                                    </div>
                                    <div className="p-4 pb-0">
                                        <h5 className="text-primary mb-3">$12,345</h5>
                                        <a className="d-block h5 mb-2" href="">Golden Urban House For Sell</a>
                                        <p><i className="fa fa-map-marker-alt text-primary me-2"></i>123 Street, New York, USA</p>
                                    </div>
                                    <div className="d-flex border-top">
                                        <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2"></i>1000 Sqft</small>
                                        <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                                        <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="property-item rounded overflow-hidden">
                                    <div className="position-relative overflow-hidden">
                                        <Link to="/"><img className="img-fluid" src="img/property-3.jpg" alt=""/></Link>
                                        <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sell</div>
                                        <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Office</div>
                                    </div>
                                    <div className="p-4 pb-0">
                                        <h5 className="text-primary mb-3">$12,345</h5>
                                        <Link className="d-block h5 mb-2" to="/">Golden Urban House For Sell</Link>
                                        <p><i className="fa fa-map-marker-alt text-primary me-2"></i>123 Street, New York, USA</p>
                                    </div>
                                    <div className="d-flex border-top">
                                        <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2"></i>1000 Sqft</small>
                                        <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                                        <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="property-item rounded overflow-hidden">
                                    <div className="position-relative overflow-hidden">
                                        <Link to="/"><img className="img-fluid" src="img/property-4.jpg" alt=""/></Link>
                                        <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Rent</div>
                                        <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Building</div>
                                    </div>
                                    <div className="p-4 pb-0">
                                        <h5 className="text-primary mb-3">$12,345</h5>
                                        <Link className="d-block h5 mb-2" to="/">Golden Urban House For Sell</Link>
                                        <p><i className="fa fa-map-marker-alt text-primary me-2"></i>123 Street, New York, USA</p>
                                    </div>
                                    <div className="d-flex border-top">
                                        <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2"></i>1000 Sqft</small>
                                        <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                                        <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="property-item rounded overflow-hidden">
                                    <div className="position-relative overflow-hidden">
                                        <Link to="/"><img className="img-fluid" src="img/property-5.jpg" alt=""/></Link>
                                        <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sell</div>
                                        <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Home</div>
                                    </div>
                                    <div className="p-4 pb-0">
                                        <h5 className="text-primary mb-3">$12,345</h5>
                                        <Link className="d-block h5 mb-2" to="/">Golden Urban House For Sell</Link>
                                        <p><i className="fa fa-map-marker-alt text-primary me-2"></i>123 Street, New York, USA</p>
                                    </div>
                                    <div className="d-flex border-top">
                                        <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2"></i>1000 Sqft</small>
                                        <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                                        <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="property-item rounded overflow-hidden">
                                    <div className="position-relative overflow-hidden">
                                        <Link to="/"><img className="img-fluid" src="img/property-6.jpg" alt=""/></Link>
                                        <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Rent</div>
                                        <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Shop</div>
                                    </div>
                                    <div className="p-4 pb-0">
                                        <h5 className="text-primary mb-3">$12,345</h5>
                                        <Link className="d-block h5 mb-2" to="/">Golden Urban House For Sell</Link>
                                        <p><i className="fa fa-map-marker-alt text-primary me-2"></i>123 Street, New York, USA</p>
                                    </div>
                                    <div className="d-flex border-top">
                                        <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2"></i>1000 Sqft</small>
                                        <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                                        <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 text-center">
                                <Link className="btn btn-primary py-3 px-5" href="">Browse More Property</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Property List End --> */}


    </div>
  )
}

export default Property