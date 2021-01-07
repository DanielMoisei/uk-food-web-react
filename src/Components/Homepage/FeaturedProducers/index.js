import React, {useState, useEffect} from "react"
import Firebase from "../../../Firebase.js"
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import "./style.css"
import leftArrow from "./Resources/leftArrow.svg"
import rightArrow from "./Resources/rightArrow.svg"
import ProducerPage from "../../ProducerPage"
import {  BrowserRouter as Router,  Switch, Route,  Link  } from "react-router-dom";

function FeaturedProducers(props) {

  useEffect(() => {
    Firebase.updateState("Producers", props.setAllProducers);
  }, []);

  return (
    <div className="producers-section-container content">

      <h1 id="producers-section-title">Featured producers</h1>

      <Carousel
        slidesPerPage={4}
        slidesPerScroll={4}
        infinite
        arrowLeft={<img className="slides-arrow" src={leftArrow} alt="arrow" />}
        arrowRight={<img className="slides-arrow" src={rightArrow} alt="arrow" />}
        addArrowClickHandler
        className="producers-container"
      >

          {props.allProducers.map(producer => {
            if (producer.id <= 5) {
            return (
              <div
                key={producer.id}
                onClick={() => Firebase.updateStateWithProducts(producer.id, props.setRelProducts, props.relProducts)}
                onClick={() => props.setFocusProducer(producer)}
                className="producer-div-style"
              >
                <img src={producer.logoLarge} alt="" />
                <h2>{producer.name}</h2>
              </div>
            )}
          })}

      </Carousel>

    </div>
  )
}

export default FeaturedProducers
