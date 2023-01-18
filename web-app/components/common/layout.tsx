import React from 'react'
import NavBar from './navbar'
import Footer from './footer'

function Layout({children}: any) {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout