import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import UserDetails from './components/UserDetails'

function App() {
  const [userName, setUserName] = useState(0)

  return (
    <>
    <Header setUserName={setUserName} />
    <UserDetails username={userName}/>
    </>
  )
}

export default App
