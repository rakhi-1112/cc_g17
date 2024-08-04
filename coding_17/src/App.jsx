import { useState } from 'react'
import Navbar from './Components/Navbar'

function App() {
  const [color , setColor] = useState("#E2E2E2")

  return (
    <>
    <div className="w-full h-screen" style={{ backgroundColor: color }}>
      <Navbar/>
    </div>
    </>
  )
}

export default App
