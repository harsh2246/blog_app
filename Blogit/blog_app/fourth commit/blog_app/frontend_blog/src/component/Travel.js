import React, { useState, useEffect } from "react";
import Afternav from "./AfterNav";
import Feedback from './feedback';
import Footer from './footer';
import axios from "axios";
import NavBar from "./Navbar";
import { Link } from "react-router-dom";
import Testing from "./Testing";
export default function Travelmain() {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:5000/mangal/random-blog-category/Travel", {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            setData(response.data);
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
           <NavBar/>
            <img
                src="https://wallpapershome.com/images/pages/pic_h/4646.jpg"
                alt="travel"
                style={{ marginTop: '10px', width: "100%", padding: "30px", height: "auto" }}
            />
            <h1 style={{ padding: "30px 0 0 30px" }}>TRAVEL</h1>
            <p style={introTextStyle}>
                "Embark on Unforgettable Journeys: Discover the World Through Travel.
                Welcome to our travel hub, where we unlock the wonders of the world one destination at a time.
                From breathtaking landscapes to vibrant cultures, we're your passport to adventure and exploration.
                Join us as we traverse the globe, sharing tales of discovery, hidden gems, and the transformative
                power of travel. Get ready to pack your bags and immerse yourself in the beauty and diversity
                our planet has to offer."
            </p>
            <div className="container text-center" style={{ marginTop: '10px' }}>
                <div className="row card-row">
                {data.map((blog) => (

<div className="col card-column" key={blog._id} style={{ marginTop: '40px' }}>

    <Testing key={blog._id} item={blog} style={{width:40}} />

</div>

))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

const introTextStyle = {
    padding: "30px 40px 10px 40px",
    lineHeight: "1.5",
    fontSize: "18px",
};
