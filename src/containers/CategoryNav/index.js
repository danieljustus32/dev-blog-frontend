import React from "react"
import CategorySelect from "../../components/CategorySelect"
import Query from "../../components/Query"
import CATEGORIES_QUERY from "../../queries/category/categories"

const CategoryNav = () => {
  return (
    <Query query={CATEGORIES_QUERY}>
      {({ data: { categories }}) => {
        return <CategorySelect categories={categories} />
      }}
    </Query>
  )
}

export default CategoryNav