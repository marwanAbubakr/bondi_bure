import React from 'react'
import { useSelector } from 'react-redux'
// import { a } from 'react-router-dom'
const Sidbar = () => {
  const { name } = useSelector((state) => state.user.userData)
  return (
    <div className='sidbar'>
      <ul>
        <li>
          <a to='/'>home</a>
        </li>
        <li>
          <a to='/'>about</a>
        </li>
        <li>
          <a to='/'>contact</a>
        </li>
        <li>
          <a to='/'>blog</a>
        </li>
        <li>
          <a to='/'>{name}</a>
        </li>
      </ul>
    </div>
  )
}

export default Sidbar
