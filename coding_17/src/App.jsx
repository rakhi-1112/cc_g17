import { useState } from 'react'
import Navbar from './Components/Navbar'
import Slider from './Components/Slider'

function App() {
  const [color , setColor] = useState("#E2E2E2")

  return (
    <>
    <div className="w-full h-screen" style={{ backgroundColor: color }}>
      <Navbar/>
      <Slider/>
    </div>
    </>
  )
}

export default App
