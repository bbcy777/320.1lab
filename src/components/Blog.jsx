import React from 'react'

function Blog({content}) {
  return (
    <article>
        <h5>{content.date}</h5>
        <h3>{content.title}</h3>
        <img src={content.image} alt={content.alt} />
        <p>{content.blogContent}</p>
        {/* <hr /> */}
    </article>
  )
}

export default Blog