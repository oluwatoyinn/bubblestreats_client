import React from 'react'
import aboutUsImage from '../img/parfeitAUS.jpeg'

export function AboutUs(props) {
    
    return (
        <React.Fragment>
             <section className="about py-5" id="about">
                 <div className="container">
                     <div className="row">
                         <div className="col-10 mx-auto col-md-6 my-5">
                            <h1 className="text-capitalize">
                                about <strong className="banner-title">us</strong>
                            </h1>
                            <p className="my-4 text-muted w-75">
                                 Welcome to BubblesTreat(everything cakes and pastries), we are one
                                 step away and alaways available to make your wedding, birthday, 
                                 anniversary, gathering promising. We are always open 
                            </p>
                            <a href="#" className="btn btn-black text-uppercase">view more</a>
                         </div>
                         <div className="col-10 mx-auto col-md-6 my-5 align-self-center">
                            <div className="about-image-container">
                                <img src={aboutUsImage} alt="" className="img-fluid"/>
                            </div>
                        </div>
                     </div>
                 </div>

             </section>
        </React.Fragment>
    )
}

export default AboutUs
