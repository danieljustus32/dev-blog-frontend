import React from "react"
import Articles from "../../components/Articles"
import Query from "../../components/Query"
import ARTICLES_QUERY from "../../queries/articles/articles"

const ArticlesOverview = () => {
  return (
    <>
      <div className="uk-section" id="articles-list">
        <div className="uk-container uk-container-large">
          <h1 className="page-title">My Blog</h1>
          <Query query={ARTICLES_QUERY}>
            {({ data: { articles }}) => {
              return <Articles articles={articles} />
            }}
          </Query>
        </div>
      </div>
    </>
  )
}

export default ArticlesOverview