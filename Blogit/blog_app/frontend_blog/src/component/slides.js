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
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={4}
        src='https://w0.peakpx.com/wallpaper/43/30/HD-wallpaper-travel-couple-lifestyle.jpg'
        alt='...'
        style={{ maxHeight: '400px', objectFit: 'cover' }}
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={5}
        src='https://wallpaper-house.com/data/out/12/wallpaper2you_581782.jpg'
        alt='...'
        style={{ maxHeight: '400px', objectFit: 'cover' }}
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={6}
        src='https://wallpaperaccess.com/full/1209478.jpg'
        alt='...'
        style={{ maxHeight: '400px', objectFit: 'cover' }}
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={7}
        src='https://wallpaperaccess.com/full/43696.jpg'
        alt='...'
        style={{ maxHeight: '400px', objectFit: 'cover' }}
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={8}
        src='https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?cs=srgb&dl=pexels-pixabay-46798.jpg&fm=jpg'
        alt='...'
        style={{ maxHeight: '400px', objectFit: 'cover' }}
      />
    </MDBCarousel>
    </div>
    )
}