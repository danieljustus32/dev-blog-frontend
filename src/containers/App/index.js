import React from "react"
import { Switch, Route } from "react-router-dom"

import Nav from "../../components/Nav"
import About from "../../components/About"
import PortfolioContainer from "../Portfolio"
import ArticlesOverview from "../Articles"
import Article from "../Article"
import Category from "../Category"
import Footer from "../../components/Footer"

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/" component={About} exact />
        <Route path="/portfolio" component={PortfolioContainer} exact />
        <Route path="/blog" component={ArticlesOverview} exact />
        <Route path="/article/:id" component={Article} exact />
        <Route path="/category/:id" component={Category} exact />
      </Switch>
      <Footer />
    </div>
  )
}

export default App