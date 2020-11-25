import React from "react"
import PortfolioCard from "../PortfolioCard"

const Portfolio = ({ pieces }) => {
  console.log(pieces)
  return (
    <div className="uk-child-width-1-2" data-uk-grid>
      <div>
        {pieces.map((piece) => {
            return <PortfolioCard key={`piece_${piece.id}`} piece={piece} />
        })}
      </div>
    </div>
  )
}

export default Portfolio