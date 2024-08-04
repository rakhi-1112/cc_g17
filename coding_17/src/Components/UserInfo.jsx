import React from 'react';

const UserInfo = () => {
  return (
    <>
      <div style={{ marginRight: "5em", backgroundColor: "#000000"}}>
        <button className="absolute right-48 top-1/2 transform -translate-y-1/2 rounded-full px-6 py-6"
          style={{ backgroundColor: "#D9D9D9", right: "20.2%" }}></button>
        <div className="absolute right-32 text" 
          style={{ color: "#666666", top: "35%", transform: "translateY(-30%)", right: "13%" }}>
          Signed in as
        </div>
        <div className="absolute right-32 text" 
          style={{ color: "#000000", top: "55%", transform: "translateY(-30%)", right: "13%" }}>
          Rakhi Kumari
        </div>
      </div>
      <button className="absolute right-3 top-1/2 transform -translate-y-1/2 px-4 py-2 text-white rounded-xl uppercase shadow-md"
        style={{ backgroundColor: "#333333", marginRight: "2.5em" }}>
        Logout
      </button>
    </>
  );
}

export default UserInfo;
