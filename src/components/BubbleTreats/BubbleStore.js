import React from 'react'
import img_1 from '../img/cake_1.jpeg'
import img_2 from '../img/cake_2.jpeg'
import img_3 from '../img/cake_3.jpeg'
import img_4 from '../img/cake_4.jpeg'
import img_5 from '../img/cake5.jpeg'
import img_6 from '../img/chinchin1.jpeg'
import img_7 from '../img/chips1.jpeg'
import img_8 from '../img/parfeit.jpeg'
import img_9 from '../img/chops.jpeg'
import img_10 from '../img/dougnut1.jpeg'


const store=[
    {image:img_1, price:'10,000', title:'Birthday Cake'},
    {image:img_2, price:'25,000', title:'Wedding Cake'},
    {image:img_8, price:'500', title:'parfait'},
    {image:img_3, price:'500', title:'Anniversary'},
    {image:img_5, price:'500', title:'chops'},
    {image:img_4, price:'500', title:'Birthday'},
    {image:img_7, price:'500', title:'chips'},
    {image:img_10, price:'500', title:'Birthday'},
    {image:img_6, price:'500', title:'chinchin'},
    {image:img_9, price:'500', title:'dougnut'},
]

export function Bubblestore(props) {
    

    return (
        <React.Fragment>
            <section id="store">
                <div className="container">
                    <div className="row">
                        <div className="col-10 mx-auto col-sm-6 text-center">
                            <h1 className="text-capitalize">our <strong className="banner-title">store</strong></h1>
                        </div>
                    </div>
                    {/* filter buttons */}
                    <div className="row">
                        <div className="col-lg-8 mx-auto d-flex justify-content-around sort-btn flex-wrap">
                            <a href="#" className="btn btn-black text-uppercase filter-btn m-2" data-filter="all">all</a>
                            <a href="#" className="btn btn-black text-uppercase filter-btn m-2" data-filter="all">sweet</a>
                            <a href="#" className="btn btn-black text-uppercase filter-btn m-2" data-filter="all">doughnuts</a>
                            <a href="#" className="btn btn-black text-uppercase filter-btn m-2" data-filter="all">cakes</a>
                            <a href="#" className="btn btn-black text-uppercase filter-btn m-2" data-filter="all">chips</a>
                        </div>
                    </div>
                    {/* search button */}
                    <div className="row">
                        <div className="col-10 mx-auto col-md-6">
                            <form>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text search-box" id="search-icon">
                                            <i className="fas fa-search"></i>
                                        </span>
                                    </div>
                                    <input type="text" className="form-control" id="search-item" placeholder="bubblestreat..."/>
                                </div>
                            </form>
                        </div>
                    </div>
                    {/* store items */}
                    <div className="row store-items" id="store-items">
                        {/* single items */}

                        {store.map((store)=>{
                            return(
                                <div className="col-10 col-sm-6 col-lg-4 mx-auto my-3 store-item sweets" data-item="sweets">
                                    <div className="card single-item">
                                        <div className="img-container">
                                            <img src={store.image} className="card-img-top store-image" alt=""/>
                                            <span className="store_icon">
                                                <i className="fas fa-shopping-cart"></i>
                                            </span> 
                                        </div>
                                        <div className="card-body">
                                            <div className="card-text d-flex justify-content-between text-capitalize">
                                                <h5 className="item-name">{store.title}</h5>
                                                <h5 className="store-value"># <strong id="item-price" className="font-weight-bold"> {store.price} </strong></h5>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                            )
                        })}
                        {/* end singke item */}
                    </div> 
                </div>
            </section>
            
        </React.Fragment>
    )
}
