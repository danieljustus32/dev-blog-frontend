import React from "react"

const Portfolio = ({ pieces }) => {
  console.log(pieces)
  return (
    <div className="uk-child-width-1-2" data-uk-grid>
      <div>
        {pieces.map((piece) => {
          return <h1 key={`piece_${piece.id}`} >{piece.Name}</h1>
        })}
      </div>
    </div>
  )
}

export default Portfolio