import React from "react"
import { 
  Link,
  ListItem,
  Offcanvas,
  OffcanvasContainer,
  Navbar,
  NavbarContainer,
  NavbarSticky,
  Section,
} from "uikit-react"
import { useLocation } from "react-router-dom"
import CategoryNav from "../../containers/CategoryNav"

const Nav = () => {
  let location = useLocation()
  console.log(location.pathname)
  return (
    <OffcanvasContainer>
      <Section>
        <NavbarSticky options="animation: uk-animation-slide-top; cls-inactive: uk-navbar-transparent uk-light; top: 556;">
          <NavbarContainer>
            <Navbar>
              <ListItem>
                <Link className="navlink" href="/">
                  About
                </Link>
              </ListItem>
              <ListItem>
                <Link className="navlink" href="/portfolio">
                  Portfolio
                </Link>
              </ListItem>
              <ListItem>
                <Link className="navlink" href="/blog">
                  Blog
                </Link>
              </ListItem>
            </Navbar>
            <Navbar right="true">
              <ListItem>                          
                <Link className="navlink" toggleOptions="target: #menu;" href="#">
                  Categories
                </Link>
              </ListItem>
            </Navbar>
          </NavbarContainer>
        </NavbarSticky>
        <Offcanvas id="menu" options="overlay: true; flip: true">
          <CategoryNav />
        </Offcanvas>
      </Section>
    </OffcanvasContainer>
  )
}

export default Nav