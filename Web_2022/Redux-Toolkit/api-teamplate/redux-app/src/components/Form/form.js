import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { addUser } from '../../redux/api'
import { addUser } from '../../redux/userSlice'
const Form = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [state, setState] = useState('')
  const ref = useRef(null)
  const dispatch = useDispatch()

  function UpdateState() {
    // update init value of input
    const inputValue = ref.current.value
    // change State to new value
    setState(inputValue)
    // to get new value of input and make chage on props.setName with new value
    setName(inputValue)
  }
  // to clear value of input
  const handleClick = () => {
    state !== '' ? setState('') : console.log('no')
  }

  const { loading, error } = useSelector((state) => state.user)

  const handleSubmit = (e) => {
    e.preventDefault()
    // old method
    console.log(name)
    console.log('name')
    dispatch(addUser({ name, email }, dispatch))
    // dispatch(addUser({ name, email }))
  }
  return (
    <form className='form' onSubmit={handleSubmit}>
      <div className='form-groub'>
        <input
          ref={ref}
          value={state}
          type='text'
          placeholder='enter name'
          // this modern method to update valeu of props
          onChange={() => UpdateState()}
          onClick={() => handleClick()}
        />
      </div>
      <div className='form-groub'>
        <input
          type='text'
          placeholder='enter email'
          // this another method to show data acrross the props
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      {loading ? (
        'Loading...'
      ) : (
        <div className='form-groub'>
          <input type='submit' placeholder='add user' />
        </div>
      )}
      {error && loading === false && 'you have a error'}
      {/* <p>
        your email:
        if isChanged === treu !? show the email 
        <span> {email}</span>
      </p> */}
    </form>
  )
}

export default Form
