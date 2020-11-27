import React from "react"
import {
  Icon,
  Link,
  List,
  ListItem
} from "uikit-react"

const Footer = () => {
  return (
    <div id="footer">
      <List id="footer-social">
        <ListItem id="social-link-list">
          <Icon className="social-link" href="https://github.com/danieljustus32" options="github" />
          <Icon className="social-link" href="https://twitter.com/danieljustus32" options="twitter" />
        </ListItem>
      </List>
      <List id="footer-nav">
        <ListItem className="footer-navlink">
          <Link href="/">About Me</Link>
        </ListItem>
        <ListItem className="footer-navlink">
          <Link href="/portfolio">Portfolio</Link>
        </ListItem>
        <ListItem className="footer-navlink">
          <Link href="/blog">Blog</Link>
        </ListItem>
      </List>
    </div>
  )
}

export default Footer