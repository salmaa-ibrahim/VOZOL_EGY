import React from 'react'
import './PromoBanner.css'

export default function PromoBanner({ text }){
  return (
    <section className="promo-banner" aria-hidden>
      <div className="promo-inner">
        <h2>{text}</h2>
      </div>
    </section>
  )
}
