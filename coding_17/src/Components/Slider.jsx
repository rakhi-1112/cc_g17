import React from 'react'
import './ComponentStyles/Slider.css'
import Bonds from './Bonds';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import SliderButton from './SliderButton';

const Slider = () => {
  return (
    <>
      <div>
        <div className="slider-container">
          <SliderButton content="Active Bonds" route="/bonds/active" />
          <SliderButton content="Maturing in next 5d" route="/bonds/next5" />
          <SliderButton content="Matured/Maturing in past/next 5d" route="/bonds/pastandnext5" />
          <SliderButton content="Assigned to me" route="/bonds/mine" />
          <SliderButton content="All Bonds" route="/bonds/all" />
        </div>
        
        <Routes>
          <Route exact path="/bonds" element={<Bonds filter="all_bonds" />} />
          <Route path="/bonds/active" element={<Bonds filter="active_bonds" />} />
          <Route path="/bonds/next5" element={<Bonds filter="next5_bonds" />} />
          <Route path="/bonds/pastandnext5" element={<Bonds filter="pastandnext5_bonds" />} />
          <Route path="/bonds/mine" element={<Bonds filter="my_bonds" />} />
          <Route path="/bonds/all" element={<Bonds filter="all_bonds" />} />
        </Routes>
      </div>
    </>
  )
}

export default Slider