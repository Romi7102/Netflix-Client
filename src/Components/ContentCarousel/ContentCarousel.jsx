import React from 'react'

const ContentCarousel = ({children}) => {
  return (
    <div>
        {children.map(c => ({c}))}
    </div>
  )
}

export default ContentCarousel