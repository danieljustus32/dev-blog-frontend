import React from "react"
import { Link } from "react-router-dom"


const CategorySelect = ({categories}) => {
    return (
        <div>
            {categories.map((category) => {
                return (
                    <ul>
                        <li>
                            <Link to={`/category/${category.id}`} >
                                {category.name}
                            </Link>
                        </li>
                    </ul>
                )
            })}
        </div>
    )
}

export default CategorySelect
