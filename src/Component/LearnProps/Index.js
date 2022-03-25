import React from 'react'

export default function Index({id,title,url_img}) {
    
  return (
    <div key={id}>
        <h2>{title}</h2>
        <img src={url_img} alt={title} />
    </div>
  )
}
