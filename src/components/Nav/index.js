import React from "react"
import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <div>
            
            <div>
                <nav className="uk-navbar-container" data-uk-navbar>
                    <a href="/" className="uk-navbar-brand">
                        {/*FIXME: This is a placeholder for an eventual logo */}
                        <img style={{width:"4em", height:"auto"}}src="logo192.png" alt="Home" />
                    </a>
                    <div className="uk-navbar-left">
                        <ul className="uk-navbar-nav">
                            <li>
                                <Link to="/">About</Link>
                            </li>
                            <li>
                                <Link to="/portfolio">Portfolio</Link>
                            </li>
                            <li>
                                <Link to="/blog">Blog</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Nav