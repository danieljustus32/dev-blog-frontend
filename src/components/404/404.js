/**
 *
 * This file was generated with Adobe XD React Exporter
 * Exporter for Adobe XD is written by: Johannes Pichler <j.pichler@webpixels.at>
 *
 **/

import React from "react";
import { Button } from "uikit-react"
import ConfusedDog from "./404.svg"

const NotFound = () => (
  <div className="page-content">
    <div className="uk-section">
      <div className="uk-container uk-container-large">
        <h1 className="page-title">Page Not Found</h1>
        <a href="https://djustus.dev" id="not-found-button-container">
          <Button id="not-found-button">Back to Home</Button>
        </a>
        <img id="confused-dog"src={ConfusedDog} alt="A dog with a confused look on his face"/>
      </div>
    </div>
  </div>
);

export default NotFound;
