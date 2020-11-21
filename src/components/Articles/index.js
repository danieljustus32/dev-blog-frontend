import React from "react"
import BlogCard from "../BlogCard"

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
            return <BlogCard article={article} key={`article_${article.id}`} />
          })}
        </div>
        <div>
          {rightArticles.map((article) => {
            return <BlogCard article={article} key={`article_${article.id}`} />
          })}
        </div>
      </div>
    </>
  )
}

export default Articles