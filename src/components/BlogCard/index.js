import React from "react"
import { HashLink as Link } from 'react-router-hash-link'

const BlogCard = ({ article }) => {
  return (
    <Link to={`/article/${article.id}#article-page-title`} className="uk-link-reset">
      <div className="article-preview uk-card-default uk-card-hover">
        <div className="uk-card-media-top">
          <img
            className="card-image"
            src={article.Image[0].url}
            alt={article.alt}
          />
        
          <div className="uk-card-body">
            <p id="category" className="uk-text-uppercase">
              {article.category.Name}
            </p>
            <p id="title" className="uk-text-large">
              {article.Title}
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogCard