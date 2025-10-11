import React from 'react'
import './AdPopup.css'

export default function AdPopup({ onClose }){
  return (
    <div className="ad-backdrop">
      <div className="ad-card">
        <img src="/assets/Ads/AD.webp" alt="ad" />
        <button className="ad-close" onClick={onClose}>Cancel</button>
      </div>
    </div>
  )
}
