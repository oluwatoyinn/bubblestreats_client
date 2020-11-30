import React from 'react'

// services
import img1 from '../img/services/cake.jpg'
import img2 from '../img/services/doughnut.png'
import img3 from '../img/services/parfait.png'

const services=[
    {image:img1, title:'cake', detail:'Cake is a form of sweet food made from flour, sugar, and other ingredients, that is usually baked' },
    {image:img2, title:'doughnut', detail:'Doughnut is a type of fried dough confection or dessert food usually deep fried from a flour dough' },
    {image:img3, title:'parfait', detail:'Frozen dessert made from a base of sugar syrup, egg, and cream,contains enough fat, sugar, alcohol' }

]

 function Services(props) {

    

    return (
        <React.Fragment>
            <section id="services" className="services py-5">
                <div className="container">
                    <div className="row">
                        {services.map((service)=>{
                            return(
                                <div className="col-md-4 text-center my-3">
                                    <img src={service.image} className="service-image" alt="" />
                                    <h6 className="text-uppercase my-3 service-title"> {service.title} </h6>
                                    <p className="w-75 mx-auto text-left service-text"> {service.detail} </p>
                                </div> 
                            )  
                        })}
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
export default Services