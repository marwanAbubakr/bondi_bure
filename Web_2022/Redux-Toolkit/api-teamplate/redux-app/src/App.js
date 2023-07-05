import './style/App.css'
import Headr from './components/Headr/headr'
import Sidbar from './components/Sidbar/sidbar'
import Form from './components/Form/form'
import { useState } from 'react'

function App() {
  return (
    <div className='App'>
      <Headr />
      <div className='main'>
        {/* to send data across props */}
        <Sidbar />
        <Form />
      </div>
    </div>
  )
}

export default App
