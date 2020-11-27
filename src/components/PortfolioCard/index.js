import React from "react"

const PortfolioCard = ({ piece }) => {
    return (
      <a target="_blank" rel="noopener noreferrer" href={piece.Link} className="uk-link-reset">
        <div className="portfolio-card uk-card-default uk-card-hover">
          <div className="uk-card-media-top">
            <img
              className="card-image"
              src={piece.Image[0].url}
              alt={piece.Alt}
            />         
            <div className="uk-card-body">
              <p id="category" className="uk-text-large">
                {piece.Name}
              </p>
              <p id="title">
                {piece.Description}
              </p>
            </div>
          </div>
        </div>
      </a>
    )
  }

  export default PortfolioCard
  