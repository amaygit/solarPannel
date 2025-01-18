import React from 'react'
import "./Logo.css"
import { PiSolarPanelFill } from 'react-icons/pi'
import { logos1 } from '../../assets'
const index = () => {
  return (
    <div className='logo'>
        {/* <PiSolarPanelFill  className='icon'/> */}
        <img src={logos1} alt="Logo" className="icon" />
        <h1 className='name'> 
        
             Supreme
            <span className='color__primary'>
                Product
            </span>
           
        </h1> 
        </div>
  )
}

export default index