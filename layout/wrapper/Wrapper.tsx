import React from 'react'
import dynamic from 'next/dynamic'

let Header=dynamic(()=>import('../header/Header'))
let Footer=dynamic(()=>import('../footer/Footer'))

const Wrapper = ({children}) => {
  return (
    <div>
        <Header/>
          {children}
        <Footer/>  
    </div>
  )
}

export default Wrapper