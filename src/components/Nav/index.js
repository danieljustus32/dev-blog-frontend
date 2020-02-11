import React from "react"
import NavQuery from "../NavQuery"
import { Link } from "react-router-dom"

import CATEGORIES_QUERY from "../../queries/category/categories"

const Nav = () => {
    return (
        <div>
            <NavQuery query={CATEGORIES_QUERY} id={null}>
                {({ data: { categories } }) => {
                    return (
                        <div>
                            <nav className="uk-navbar-container" data-uk-navbar>
                                <div className="uk-navbar-left">
                                    <ul className="uk-navbar-nav">
                                        <li>
                                            <Link to="/">Home</Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="uk-navbar-right">
                                    <ul className="uk-navbar-nav">
                                        {categories.map((category, i) => {
                                            return (
                                                <li key={category.id}>
                                                    <Link
                                                    to={`/category/${category.id}`}
                                                    className="uk-link-reset"
                                                    >
                                                        {category.name}
                                                    </Link>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    )
                }}
            </NavQuery>
        </div>
    )
}

export default Nav