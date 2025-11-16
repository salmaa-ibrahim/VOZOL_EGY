import React from 'react'
import './AgeGate.css'

export default function AgeGate({ onAccept }){
  return (
    <div className="agegate-backdrop">
      <div className="agegate-card">
        <h2>Welcome to VOZOL-EGY</h2>
        <p>Are you 18 years or older?</p>
        <div className="agegate-actions">
          <button className="btn-primary" onClick={onAccept}>Yes, enter</button>
          <button className="btn" onClick={()=> window.location.href='https://www.google.com'}>Leave</button>
        </div>
      </div>
    </div>
  )
}
