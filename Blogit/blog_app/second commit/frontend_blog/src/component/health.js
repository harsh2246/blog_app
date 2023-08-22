import React, { useState, useEffect } from "react";
import Afternav from "./AfterNav";
import Footer from './footer';
import axios from "axios";
import NavBar from "./Navbar";
import { Link } from "react-router-dom";

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
                src="https://as1.ftcdn.net/v2/jpg/06/01/14/08/1000_F_601140820_MHVwhCH7pQ98A7OZUSdLxxxCuxFvm88o.jpg"
                alt="health"
                style={{ marginTop: '10px', width: "100%", height: "auto" }}
            />
            <h1 style={{ padding: "30px 0 0 30px" }}>HEALTH</h1>
            <p style={introTextStyle}>
                "Empowering Your Well-being: Your Journey to Health and Wellness.
                Welcome to our health sanctuary, a space dedicated to nurturing your mind, body, and spirit.
                From mindful living to fitness journeys, we're your companions on the path to optimal well-being.
                Join us as we unravel the secrets of a balanced life, share expert insights, and celebrate the small
                steps that lead to profound transformations. Your health is your greatest wealth, and we're here to
                guide you on this empowering voyage of self-care and vitality."
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
