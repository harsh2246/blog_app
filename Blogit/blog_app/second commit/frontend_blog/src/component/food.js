import React, { useState, useEffect } from "react";
import Afternav from "./AfterNav";
import Feedback from './feedback';
import Footer from './footer';
import axios from "axios";
import NavBar from "./Navbar";
import { Link } from "react-router-dom";

export default function Foodmain() {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:5000/mangal/random-blog-category/Food", {
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
                src="https://www.dochipo.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/01/banner-1.png.webp"
                alt="food"
                style={{ marginTop: '10px', width: "100%", height: "auto" }}
            />
            <h1 style={{ padding: "30px 0 0 30px" }}>FOOD</h1>
            <p style={introTextStyle}>
                "Discover the Heartbeat of Cultures Through Food.
                Food is more than sustenance; it's a universal language that bridges cultures
                and kindles connections. At our website, we explore the world's rich tapestry
                of flavors, sharing tales of tradition, innovation, and the joy that comes with
                every shared meal. Join us as we journey through recipes, stories, and the
                significance of food in shaping our lives and societies."
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
