import React from 'react'

export const Hero = ({ title, background }) => {
  return (
    <div
      className='c-hero'
      style={{
        backgroundImage: background
          ? `url(${background})`
          : `url(${process.env.PUBLIC_URL}/header.png)`,
      }}
    >
      <div className='o-container'>
        <div className='o-grid'>
          <h1 className='c-hero__title'>{title}</h1>
        </div>
      </div>
    </div>
  )
}
