import React from 'react'
import PhotoPlaceholder from './PhotoPlaceholder';

export default function SideBar({photos, openImage}) {
  return (
    <div className="main-content">
    <div className="content">
      {photos.map((image, index) => (
          <PhotoPlaceholder image={image} index={index} key={image.src} openImage = {openImage}/>
      ))}
    </div>
  </div>
  )
}
