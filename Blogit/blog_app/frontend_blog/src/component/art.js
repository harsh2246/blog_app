import React, { useState, useEffect } from "react";
import Afternav from "./AfterNav";
import Feedback from './feedback';
import Footer from './footer';
import axios from "axios";
import { Navbar } from "react-bootstrap";
import NavBar from "./Navbar";

export default function Artmain() {
    const [data, setData] = useState([]);
    const [cards, setCards] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:5000/mangal/random-blog-category/Art", {
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
                src="https://c4.wallpaperflare.com/wallpaper/1009/958/551/the-banner-saga-video-games-artwork-concept-art-wallpaper-preview.jpg"
                alt="art"
                style={{ marginTop: '80px', width: "100%" }}
            />
            <h1 style={{ padding: "30px 0 0 30px" }}>ART</h1>
            <p style={introTextStyle}>
                "Unveiling Creativity's Canvas: A Glimpse into the World of Art.
                Welcome to our art gallery, a virtual space where imagination knows no bounds.
                From vibrant brushstrokes to sculpted masterpieces, we're your guides to the diverse
                realm of artistic expression. Join us as we celebrate the works of renowned artists,
                share insights into different art forms, and delve into the stories behind captivating
                creations. Whether you're an art aficionado or just curious about the creative process,
                we invite you to immerse yourself in the colors, shapes, and emotions that make up
                the tapestry of art."
            </p>
            <div className="container text-center" style={{ marginTop: '10px' }}>
                <div className="row card-row">
                    {data.map((blog) => (
                        <div className="col card-column" key={blog._id} style={{ marginTop: '40px' }}>
                            <div className="card" style={{ width: "18rem" }}>
                                <img
                                    src={blog.image}
                                    className="card-img-top"
                                    alt={`Card ${blog._id}`}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{blog.title}</h5>
                                    <p className="card-text">
                                        {blog.post}
                                    </p>
                                    <a href="#" className="btn btn-primary">
                                        Read More..
                                    </a>
                                </div>
                            </div>
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
