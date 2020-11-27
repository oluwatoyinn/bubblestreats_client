import React from 'react'
import {products} from './ProductData'
import {Product} from './Product'

// Product as an object property
//    const Testing2 = (props) => {
//     return (
//         <React.Fragment>
//             {products.map((product)=>{
//                 return <Product key={product.id} product={product} ></Product>
//             })}
//         </React.Fragment>
//     )
// }

// using spread operator
const Testing2 = (props) => {
    return (
        <section className="booklist">
            {products.map((product)=>{ 
                return <Product key={product.id} {...product} ></Product>
            })}
        </section>
    )
}
  


export default Testing2;