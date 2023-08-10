import React from "react";
import {
    MDBCarousel,
    MDBCarouselItem,
  } from 'mdb-react-ui-kit';
import "./slide.css"

export default function Slide(){
    return(


<div className="slider-container">
      <MDBCarousel showControls dealy={3000}>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src='https://mdbootstrap.com/img/new/slides/041.jpg'
        alt='...'
        style={{ maxHeight: '400px', objectFit: 'cover' }}
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='https://mdbootstrap.com/img/new/slides/042.jpg'
        alt='...'
        style={{ maxHeight: '400px', objectFit: 'cover' }}
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://mdbootstrap.com/img/new/slides/043.jpg'
        alt='...'
        style={{ maxHeight: '400px', objectFit: 'cover' }}
      />
    </MDBCarousel>
    </div>
    )
}