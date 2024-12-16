import React from 'react'
import { Link } from 'react-router-dom'


// The below one in normal project comes from the backend and we dynamically creating links for adding routes.

const ProductDetails=[
  {id:1,title:"Product-1"},
  {id:2,title:"Product-2"},
  {id:3,title:"Product-3"},
];

const Product = () => {
  return (
    <>
      {ProductDetails.map((items)=>(
        <li key={items.id}><Link to={`/products/${items.title}`}>{items.title}</Link></li> //dyna,ic routing
      ))}
    </>
  )
}

export default Product