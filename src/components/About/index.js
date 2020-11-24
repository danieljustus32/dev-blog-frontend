import React, { useEffect } from "react"
import AboutMeHeaderComponent from "./AboutMeHeaderComponent"
import AOS from "aos"
import "aos/dist/aos.css"

const About = () => {
  useEffect(() => {
    AOS.init()
  }, [])
  
  return (
    <div className="page-content">
      <AboutMeHeaderComponent />  
      <div className="bio-card bio-card-left uk-card-default uk-card-hover" data-aos="flip-left" data-aos-anchor-placement="top-center">
        <div className="uk-card-body">
          <p className="bio-card-title uk-text-bold uk-text-uppercase">
            Education
          </p>
          <hr/>
          <ul>
            <li>
              Began learning to code in Flatiron School NY's bootcamp program
            </li>
            <li>
              Transitioned to WGU's School of IT in 2018
            </li>
            <li>
              Currently pursuing B.S IT in Software Development
            </li>
            <li>
              On track to graduate in 2021
            </li>
          </ul>
        </div>
      </div>
      <div className="bio-card bio-card-right uk-card-default uk-card-hover" data-aos="flip-right" data-aos-anchor-placement="top-center">
        <div className="uk-card-body">
          <p className="bio-card-title uk-text-bold uk-text-uppercase">
            Certifications
          </p>
          <hr/>
          <ul>
            <li>
              CompTIA A+ and Project+
            </li>
            <li>
              ITIL 4 Foundation
            </li>
            <li>
              CIW Advanced Javascript and CSS3 Expert and Site Development Associate
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About