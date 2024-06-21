import React from 'react'

function Blog({content}) {
  return (
    <div>
        <h5>{content.date}</h5>
        <h3>{content.title}</h3>
        <img src={content.image} alt='' />
        <p>{content.blogContent}</p>
        <hr />
    </div>
  )
}

export default Blog