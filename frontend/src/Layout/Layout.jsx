import React from 'react';
import Header from "./Header.jsx";
const Layout = ({children}) => {
  return (
    <div style={{'maxHeight':'100vh','overflow-y':'scroll'}}>
      <Header/>
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout