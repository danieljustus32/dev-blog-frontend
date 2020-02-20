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
        {categories.map((category) => {
          return (            
            <ListItem key={category.id}>
              <Link href={`/category/${category.id}`}>{category.name}</Link>
            </ListItem>
          )
        })}
      </List>
    </>
  )
}

export default CategorySelect
