import React, { useEffect, useState } from "react"
import AboutMeHeaderComponent from "./AboutMeHeaderComponent"
import AboutMeHeaderComponentMid from "./AboutMeHeaderComponentMid"
import AOS from "aos"
import "aos/dist/aos.css"
import AboutMeHeaderComponentSmall from "./AboutMeHeaderComponentSmall"

const About = () => {
  useEffect(() => {
    AOS.init()
  }, [])

  const [isDesktop, setDesktop] = useState(window.innerWidth > 1024)
  const [isTablet, setTablet] = useState(window.innerWidth <= 1024 && window.innerWidth > 567)

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1024)
    setTablet(window.innerWidth <= 1024 && window.innerWidth > 567)
  }

  useEffect(() => {
    window.addEventListener("resize", updateMedia)
    return () => window.removeEventListener("resize", updateMedia)
  })

  return (
    <div className="page-content">
      { isDesktop &&
        <AboutMeHeaderComponent />
      }
      { isTablet &&
        <AboutMeHeaderComponentMid />  
      } 
      { (!isDesktop && !isTablet) &&
        <AboutMeHeaderComponentSmall />
      }
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