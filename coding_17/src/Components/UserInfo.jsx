import React from 'react'

const UserInfo = () => {
  return (
   
    <>
        
        <span className="absolute right-32 text" style={{ color: "#666666" }}>
            Signed in as
        </span>
        <button className="absolute right-4 top-1/2 transform -translate-y-1/2 px-4 py-2 text-white rounded-xl uppercase shadow-md"
            style={{ backgroundColor: "#333333" }}>
            Logout
        </button>
    </>
  )
}

export default UserInfo