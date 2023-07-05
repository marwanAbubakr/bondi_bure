import React from 'react'
import Img from '../imgs/3.jpg'
export default function ProductItem(props) {
  const { product } = props

  return (
    <div className='card'>
      <img src={Img} className='card-img-top' alt='...' />
      <div className='card-body'>
        <h5 className='card-title'>{props.name}</h5>
        <p className='card-text'>price 100$</p>
        <a href='#' className='btn btn-primary'>
          Details
        </a>
      </div>
    </div>
  )
}
