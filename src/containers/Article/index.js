import React from "react"
import { useParams } from "react-router"
import Query from "../../components/Query"
import ReactMarkdown from "react-markdown"
import Moment from "react-moment"

import ARTICLE_QUERY from "../../queries/article/article"

const Article = () => {
  let { id } = useParams()
  return (
    <Query query={ARTICLE_QUERY} id={id}>
      {({ data: { article } }) => {
        return (
          <div>
            <h1 id="article-page-title">{article.title}</h1>
            <div
              id="banner"
              className="uk-height-medium uk-flex uk-flex-center uk-flex-middle 
              uk-cover-background uk-light uk-padding"
            >
              <img src={process.env.NODE_ENV !== "production" ? process.env.REACT_APP_BACKEND_URL + article.image.url : article.image.url} alt={article.alt} />
            </div>
            <div className="uk-section">
              <div className="uk-container uk-container-small">
                <ReactMarkdown source={article.content} />
                <p>
                  <Moment format="MMM Do YYYY">{article.published_at}</Moment>
                </p>
              </div>
            </div>
          </div>
        )
      }}
    </Query>
  )
}

export default Article