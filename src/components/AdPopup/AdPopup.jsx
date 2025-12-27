import React from 'react'
import './AdPopup.css'

export default function AdPopup({ onClose }){
  return (
    <div className="ad-backdrop">
      <div className="ad-card">
        <img src="/assets/Ads/christmass.jpg" alt="ad" />
        {/* <img src="/assets/Ads/AD2.jpeg" alt="ad" /> */}
        <span className='christmas-text'>Merry Christmas from VOZOLEGY!</span>
        <button className="ad-close" onClick={onClose}>SHOP NOW 🎁</button>
      </div>
    </div>
  )
}
