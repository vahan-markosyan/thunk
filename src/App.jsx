import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Users } from './features/users/users'
import { AddUser } from './features/users/addUser'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Users/>
      <AddUser/>
    </>
  )
}

export default App
