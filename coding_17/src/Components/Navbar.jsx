import React from 'react'
import CompanyBanner from './CompanyBanner'
import UserInfo from './UserInfo'

const Navbar = () => {
  return (
    <>
        <div className="relative flex flex-wrap px-0 py-25">
            <div className="relative w-screen flex items-center px-11 py-10 bg-white shadow-lg">
                  <CompanyBanner/>
                  <UserInfo/>

            </div>
        </div>
    </>
  )
}

export default Navbar