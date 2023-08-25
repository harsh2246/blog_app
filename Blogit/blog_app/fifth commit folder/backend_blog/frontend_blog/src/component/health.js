import React, { useState, useEffect } from "react";
import Afternav from "./AfterNav";
import Footer from './footer';
import axios from "axios";
import NavBar from "./Navbar";
import { Link } from "react-router-dom";
import Testing from "./Testing";
import health from "../logos/health.png"
export default function HealthMain() {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:5000/mangal/random-blog-category/Health", {
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
                src={health}
                style={{ marginTop: '80px', width: "100%", height: "300px"}}
            />
            <h1 style={{ padding: "30px 0 0 30px" ,fontWeight: 'bold' , fontFamily:"lora" }}>HEALTH</h1>
            <p style={introTextStyle}>
                "Empowering Your Well-being: Your Journey to Health and Wellness.
                Welcome to our health sanctuary, a space dedicated to nurturing your mind, body, and spirit.
                From mindful living to fitness journeys, we're your companions on the path to optimal well-being.
                Join us as we unravel the secrets of a balanced life, share expert insights, and celebrate the small
                steps that lead to profound transformations. Your health is your greatest wealth, and we're here to
                guide you on this empowering voyage of self-care and vitality."
            </p>
            <div className="container text-center" style={{ marginTop: '10px' }}>
                <div className="row card-row" style={{marginLeft:'40px',marginBottom:'20px'}}>
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
    marginLeft:"40px",
    fontFamily: 'Arial, sans-serif', // Specify the desired font family
    fontSize: '18px',               // Specify the desired font size
    lineHeight: '1.5',              // Specify the desired line height
    color: '#333',                  // Specify the desired text color
    fontStyle: 'italic',    
          // Specify the desired font style
  };
