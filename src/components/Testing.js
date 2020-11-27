import React from 'react'

const img = 'https://ovastore.netlify.app/product/product2.jpg'
const title ='I love this image to the mooon'
const author ='Ben Alade'
const img2 ="/product2.jpg"

const Testing = (props) => {
    console.log(props)
 
    return (
        <React.Fragment>
            <article className="book">
                <img src={img2}/>
                <h1>{title}</h1> 
                <h4>{author}</h4>
                {/* <p> {props.job} </p> */}
                <p> {props.title} </p> 
                {props.children}
                <p> {props.amount} </p> 

            </article>         
        </React.Fragment>
    )
}

export default Testing;