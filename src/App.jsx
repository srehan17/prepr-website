import './App.css'
import NavBar from './components/NavBar'
import Main from './components/Main'
import TabsContainer from './components/TabsContainer'
import { useState } from 'react'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
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
