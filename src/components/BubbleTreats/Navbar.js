import React from 'react'

const Navbar = ()=> { 
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" id="mainNav">
                <a className="navbar-brand" href="#">BubblesTreat</a>
                <button type="button" className="navbar-toggler"  data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation" >
                    <span className="toggler-icon">
                        <i className="fas fa-bars"></i>
                    </span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav text-capitalize mx-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">about</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">store</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">order</a>
                        </li>
                    </ul>

                    <div className="nav-info-items d-none d-lg-flex">
                        {/* single info */}
                        <div className="nav-info align-items-center d-flex justify-content-between mx-lg-5">
                            <span className="info-icon mx-lg-3">
                                <i className="fas fa-phone"></i>
                            </span>
                            <p className="mb-0">0813 678 4410</p>
                        </div>
                        {/* single info */} 
                        <div id="cart-info" className="nav-info align-items-center cart-info d-flex justify-content-between mx-lg-5">
                            <span className="cart-info__icon mr-lg-3">
                                <i className="fas fa-shopping-cart"></i>
                            </span>
                                <p className="mb-0 text-capitalize">
                                    <span id="item-count">2</span>
                                    item - $
                                    <span className="item-total">10.28</span>
                                </p>
                          
                        </div>
                    </div> 
                </div>
        </nav>
           
        </React.Fragment>
    )
}

export default Navbar