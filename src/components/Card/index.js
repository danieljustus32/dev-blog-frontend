import React from "react"
import { HashLink as Link } from 'react-router-hash-link'

const Card = ({ article }) => {
  return (
    <Link to={`/article/${article.id}#article-page-title`} className="uk-link-reset">
      <div className="article-preview uk-card-default uk-card-hover">
        <div className="uk-card-media-top">
          <img
            className="card-image"
            src={
              (process.env.NODE_ENV !== "development")
              ? (article.image.url)
              : (process.env.REACT_APP_BACKEND_URL + article.image.url)
            }
            alt={article.alt}
          />
        </div>
        <div className="uk-card-body">
          <p id="category" className="uk-text-uppercase">
            {article.category.name}
          </p>
          <p id="title" className="uk-text-large">
            {article.title}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default Card