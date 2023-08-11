import React from "react";
import { Carousel } from 'react-responsive-carousel';
import './HomeSlider.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function HomeSlider({ data=[] }) {
  return (
    <div className="container text-center" style={{ marginTop: '10px' }}>
      <div className="row card-row">
        <Carousel
          showThumbs={false}
          autoPlay={true}
         // interval={1000}
          infiniteLoop={true}
          showArrows={true}
          showStatus={true}
          showIndicators={true}
          centerMode={true}
          centerSlidePercentage={25}
        >
          {data.map((item) => (
            <div className="col card-column" key={item._id} style={{ marginTop: '40px' }}>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={item.image}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">
                    {item.post}
                  </p>
                  <a href="/readblog" className="btn btn-primary">
                    Read More..
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
