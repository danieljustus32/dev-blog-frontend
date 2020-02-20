import React from "react"
import Card from "../Card"

const Articles = ({ articles }) => {
  articles.reverse()
  const leftArticlesCount = Math.ceil(articles.length / 2)
  const leftArticles = articles.slice(0, leftArticlesCount)
  const rightArticles = articles.slice(leftArticlesCount, articles.length)

  return (
    <>
      <div className="uk-child-width-1-2" data-uk-grid>
        <div>
          {leftArticles.map((article) => {
            return <Card article={article} key={`article_${article.id}`} />
          })}
        </div>
        <div>
          <div className="uk-child-width-2-10@m uk-grid-match" data-uk-grid>
            {rightArticles.map((article) => {
              return <Card article={article} key={`article_${article.id}`} />
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Articles