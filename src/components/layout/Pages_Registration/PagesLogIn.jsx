import React from 'react'
import './PageStyle.css';

export function PagesLogIn() {
  return (
    <div className='container_pages'>

      
      <div className='card_pages'>
        <div className='img_pages img-1'>
        </div>
        <div>
          <div className='text save'>
            <span className='text-1'>Log In / SigUp</span>
            <span className='text-2'>User</span>
          </div>
        </div>
      </div>

      <div className='card_pages'>
        <div className='img_pages'></div>
        <div>
          <div className='text save'>
            <span className='text-1'>Log In / SigUp</span>
            <span className='text-2'>Cafeterias</span>
          </div>   
        </div>
      </div>

      <div className='card_pages'>
        <div className='img_pages'></div>
        <div>
          <div className='text save'>
            <span className='text-1'>Log In / SigUp</span>
            <span className='text-2'>Fincas</span>
          </div> 
        </div>
      </div>
    </div>
  )
}
