import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Cart from './pages/Cart'
import Product from './pages/Product'
function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <a className='navbar-brand' href='#'>
            CatsStore
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>

          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item active'>
                <Link className='nav-link' to='/'>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/products'>
                  Products
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/cart'>
                  Cart
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/products' element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
