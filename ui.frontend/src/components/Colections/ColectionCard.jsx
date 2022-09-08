import React from 'react'

require('./Colections.css')

export const ColectionCard = ({ alt, src }) => {
  return (
    <div>
      <div className='div-float'>
        <div id="line"></div>
        <h1 className="typetitle">{alt}</h1>
      </div>
      <img className='img-card' src={src} alt={alt} />
    </div>
  )
}
