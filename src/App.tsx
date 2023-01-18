import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import PrivacyPolicy from './components/PrivacyPolicy'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <PrivacyPolicy />
    </div>
  )
}

export default App
