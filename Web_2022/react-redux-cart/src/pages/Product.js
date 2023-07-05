import React, { useState } from 'react'
import ProductItem from '../components/productItme'
import ApiProducts from '../api/product'

const Product = () => {
  const [api, setApi] = useState(ApiProducts)
  return (
    <div>
      <h1>products</h1>
      <div className='row'>
        {api.map((product) => {
          ;<div className='col-4'>
            <ProductItem product={product} />
          </div>
        })}
      </div>
    </div>
  )
}

export default Product
