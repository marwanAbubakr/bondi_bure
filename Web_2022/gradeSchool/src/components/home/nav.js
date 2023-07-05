import React from 'react'
const NavBar = () => {
  return (
    <nav className='navbar navbar-expand-md navbar-light bg-dark text-white pl-lg-5 pr-lg-5 sticky-top position-fixed w-100'>
      <a
        className='navbar-brand font-weight-bold logo-nav text-white pl-lg-3'
        href='#'
      >
        <span className='main-color'>GRAD</span> SCHOOL
      </a>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNav'
        aria-controls='navbarNav'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div
        className='justify-content-end collapse navbar-collapse pr-lg-3 '
        id='navbarNav'
      >
        <ul className='navbar-nav'>
          <li className='nav-item active'>
            <a className='nav-link ' href='#'>
              Home <span className='sr-only'>(current)</span>
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link  ' href='#'>
              Features
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link  ' href='#'>
              Pricing
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link disabled ' href='#'>
              Disabled
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link disabled  mr-2' href='#'>
              Disabled
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
