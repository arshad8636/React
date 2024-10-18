import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Register</h1>
    <input type='text'placeholder='Enter name'/><br></br><br></br>
    <input type='Email'placeholder='Enter Email'/><br></br><br></br>
    <input type='date'placeholder='Enter age'/><br></br><br></br>
    <input type='button'value='Submit'placeholder='Enter age'/>

  
    </>
)
}

export default App
