import React, {useState, useContext} from "react"
import {Link} from "react-router-dom"

import {DataContext} from "../../../dataContext.js"

import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'
import leftArrow from "./Resources/leftArrow.svg"
import rightArrow from "./Resources/rightArrow.svg"

import "./style.css"

function NameCard(props) {

  const {relProducer} = useContext(DataContext)
  const product = props.thisProduct

  const [focusImage, setFocusImage] = useState(product.images[0])

  return (
    <div id="main-product-card">

      <div id="image-car">
        <img src={focusImage} alt="" />
        <Carousel
          slidesPerPage={5}
          slidesPerScroll={5}
          arrowLeft={<img id="arrow-left" src={leftArrow} alt="arrow" />}
          arrowRight={<img id="arrow-right" src={rightArrow} alt="arrow" />}
          addArrowClickHandler
          className="car"
        >

            {product.images.map(image => <img key={image} className="car-image" onClick={() => setFocusImage(image)} src={image} alt="" />)}

        </Carousel>
      </div>

      <div id="main-card-text">

        <div id="main-info">
          <h1>{product.name}</h1>
          <div id="fav-row">
            <h2>Producer: <Link to={"/producer/" + relProducer.name}>{relProducer.name}</Link></h2>
            <img src={product.isFavourite ?
              "https://res.cloudinary.com/dbtu3hb0f/image/upload/v1611164917/starGreen_vh0tgd.png" :
              "https://res.cloudinary.com/dbtu3hb0f/image/upload/v1611164917/starGray_xm5y3y.png"}
              alt="isFav"
            />
          </div>
          <h3>£{product.price}</h3>
        </div>

        <div id="main-description">
          <h2>Description</h2>
          <p>{product.description}</p>
        </div>

      </div>

    </div>
  )
}

export default NameCard
