import React from 'react'
import { useParams } from 'react-router-dom'

//useParams is used for taking parameter from url.
//For dynamic routing
const ProductItem = () => {
    const params=useParams();

  return (
    <div>{params.productId}</div>
  )
}

export default ProductItem