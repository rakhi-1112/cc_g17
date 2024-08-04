import React from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { useLocation, useParams } from 'react-router-dom';
import './ComponentStyles/SliderButton.css'

const SliderButton = ({ content, route = "/"}) => {
  var active = false;
  if (route === useLocation().pathname)
    active = true;

  return (
    <>
      <div className="button" style={{ backgroundColor: active ? 'black' : 'white' }}>
        <Link to={route}>
          <div className="content" style={{ color: active? 'white' : 'black' }}>{content}</div>
        </Link>
      </div>
    </>
  )
}

export default SliderButton