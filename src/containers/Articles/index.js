import React from "react"
import Articles from "../../components/Articles"
import CategorySelect from "../../components/CategorySelect"
import Query from "../../components/Query"
import ARTICLES_QUERY from "../../queries/articles/articles"
import CATEGORIES_QUERY from "../../queries/category/categories"

const Home = () => {
    return (
        <>
            <Query query={CATEGORIES_QUERY}>
                {({ data: { categories }}) => {
                    return <CategorySelect categories={categories} />
                }}
            </Query>
            <div className="uk-section">
                <div className="uk-container uk-container-large">
                    <h1>My Blog</h1>
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

export default Home