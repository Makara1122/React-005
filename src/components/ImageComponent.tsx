import React from 'react'

export default function ImageComponent(props) {
  return (
    <div>
      <img src={props.src} alt={props.name} />
    </div>
  )
}
