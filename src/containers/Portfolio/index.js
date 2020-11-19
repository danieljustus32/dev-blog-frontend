import React from "react"
import Portfolio from "../../components/Portfolio"
import Query from "../../components/Query"
import PORTFOLIO_QUERY from "../../queries/portfolio/portfolio"

const PortfolioContainer = () => {
  return (
    <>
      <div className="uk-section" id="articles-list">
        <div className="uk-container uk-container-large">
          <h1 className="page-title">Portfolio</h1>
          <Query query={PORTFOLIO_QUERY}>
            {({ data: { portfolioPieces }}) => {
                return <Portfolio pieces={portfolioPieces} />
            }}
          </Query>
        </div>
      </div>
    </>
  )
}

export default PortfolioContainer