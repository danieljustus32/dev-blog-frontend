import React from "react"
import {
  List,
  ListItem,
  Link
} from "uikit-react"

const CategorySelect = ({categories}) => {
  return (
    <>
      <List type="divider">
        <h4>Categories</h4>
        {categories.map((category) => {
          return (            
            <ListItem key={category.id}>
              <Link className="category-link" href={`/category/${category.id}`}>{category.Name}</Link>
            </ListItem>
          )
        })}
      </List>
    </>
  )
}

export default CategorySelect
