import React from 'react'
import Navbars from '../../shared/navbar/Navbars'
import Footer from '../../shared/footer/Footer'

export default function Layout({children}) {
  return (
    <div>
        <Navbars/>
            <div className='sm:py-28  box-border font-serif'>
                {children}
            </div>
        <Footer/>
    </div>
  )
}
