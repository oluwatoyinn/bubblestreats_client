import React from 'react'

export const Product = (props) =>{
    const {img, title,author} =props
    return(
        <article className="book" >
            <img src={img}/>
            <h1>{title}</h1> 
            <h4>{author}</h4> 
        </article>
    )
}