import React from "react"
import PortfolioCard from "../PortfolioCard"

const Portfolio = ({ pieces }) => {
  return (
    <div>
      {pieces.map((piece) => {
          return <PortfolioCard key={`piece_${piece.id}`} piece={piece} />
      })}
    </div>
  )
}

export default Portfolio