import React, { useState, useEffect } from "react";
import Afternav from "./AfterNav";
import Feedback from './feedback';
import Footer from './footer';
import axios from "axios";

export default function TechnologyMain() {
    const [data, setData] = useState([]);
    const [cards, setCards] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:5000/mangal/random-blog-category/Technology", {
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
            <Afternav />
            <img
                src="https://img.freepik.com/free-vector/glowing-blue-cuircuit-lines-diagram_1017-33018.jpg?w=1060&t=st=1691575830~exp=1691576430~hmac=dbae124125e9a1028d2462ac16bc4401be2aa5d1ace6d4aa873376f99f041958"
                alt="technology"
                style={{ marginTop: '10px', width: "100%", height: "400px" }}
            />
            <h1 style={{ padding: "30px 0 0 30px" }}>TECHNOLOGY</h1>
            <p style={introTextStyle}>
                "Unveiling Tomorrow's World: Navigating the Landscape of Technology.
                Welcome to our tech haven, where we decode the digital age and its innovations.
                From cutting-edge gadgets to revolutionary breakthroughs, we're your guide through the
                labyrinth of technology. Join us as we unravel the mysteries of code, circuitry, and
                the transformative impact of tech on our lives. Whether you're a tech enthusiast or
                just curious about the future, we invite you to plug in and explore the realms of
                possibility that technology brings."
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
