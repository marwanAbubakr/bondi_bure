import React from 'react'
import { useSelector } from 'react-redux'

const Headr = (props) => {
  /* here when i accept a props from parent components ... 
    frist / youe sholud to pas a props betwen paranses
    and when i return the data you wright props. "name of the props"
    */
  const { name } = useSelector((state) => state.user.userData)
  return (
    <div className='headr'>
      <h1>Coders Academy</h1>
      <p>
        hellow
        <span> {name}</span>
      </p>
    </div>
  )
}

export default Headr
