import './App.css'
import NavBar from './components/NavBar'
import Main from './components/Main'
import TabsContainer from './components/TabsContainer'
import { useState } from 'react'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  const changeMode = () => { }

  return (
    <div className={darkMode ? 'light-mode' : 'dark-mode'}>
      <div className='darkModeButtonDiv'>
        <button onClick={() => setDarkMode(!darkMode)}>Dark Mode</button>
      </div>
      <NavBar />
      <Main />
      <TabsContainer />
    </div>
  )
}

export default App
