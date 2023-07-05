import React from 'react'
import Producta from './products'
const Home = () => {
  return (
    <div className='hero'>
      <div className='card bg-dark text-white border-0'>
        <img
          src='/assets/bg.jpg'
          className='card-img'
          alt='bg'
          height='550px'
        />
        <div className='card-img-overlay d-flex flex-column justify-content-center'>
          <div className='container'>
            <h5 className='card-title display-3 fw-bloder mb-0'>
              NEW SEASON ARRIVALS
            </h5>
            <p className='card-text lead fa-2'>CHECK OUT ALL THE TRENDES</p>
          </div>
        </div>
      </div>
      <Producta />
    </div>
  )
}

export default Home
