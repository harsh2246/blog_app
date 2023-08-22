import React, { useState, useEffect } from "react";
import Afternav from "./AfterNav";
import Footer from './footer';
import axios from "axios";
import NavBar from "./Navbar";
import { Link } from "react-router-dom";

export default function NatureMain() {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:5000/mangal/random-blog-category/Nature", {
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
                src="https://c4.wallpaperflare.com/wallpaper/150/736/62/nature-sea-beach-sunset-wallpaper-preview.jpg"
                alt="nature"
                style={{ marginTop: '80px', width: "100%", height: "500px" }}
            />
            <h1 style={{ padding: "30px 0 0 30px" }}>NATURE</h1>
            <p style={introTextStyle}>
                "Immerse Yourself in the Beauty of Nature: A Journey into the Wild.
                Welcome to our nature haven, a digital escape into the heart of the natural world.
                From majestic mountains to serene oceans, we're your window to the breathtaking landscapes
                that Earth offers. Join us as we explore the wonders of biodiversity, environmental conservation,
                and the intricate dance of ecosystems. Whether you're an outdoor enthusiast or simply seeking tranquility,
                we invite you to connect with the awe-inspiring beauty and serenity of nature."
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
                                    {/* <p className="card-text">
                                        {blog.post}
                                    </p> */}
                                    {/* <a href="#" className="btn btn-primary">
                                        Read More..
                                    </a> */}
                                    <Link to={`/random-blogs/${blog._id}`}>Read more</Link>
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
