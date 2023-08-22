import './readwhatsnew.css';
import React, { useEffect, useState } from 'react';

import axios from 'axios';
import NavBar from "./Navbar";
import Footer from "./footer";
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';


export default function Readwhatsnew() {
    const [blogDetails, setBlogDetails] = useState({});
    const { id } = useParams();
    useEffect(() => {
      axios.get(`http://localhost:5000/mangal/random-whatsnew/${id}`)
        .then(response => {
          setBlogDetails(response.data);
        })
        .catch(error => {
          console.error('Error fetching blog details:', error);
        });
    }, [id]);
  return (
    <div> <NavBar /><br></br><br></br><br></br>
    <div className="blog-container">
        <div className="blog-image"><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <img src={blogDetails.image} alt="Blog related image"></img>
        </div>
        <div className="blog-content">
            <div className="blog-heading">
                <h1>{blogDetails.title}</h1>
            </div>
    
            <div className="blog-user">
                <img src={blogDetails.image} alt="user profile"></img>
                <p><a>{blogDetails.category}</a></p>
            </div>
    
            <div className="scrollable-content">
                <p>{blogDetails.content}</p>
            </div>
            <div className="scrollable-content">
                <p>{blogDetails.post}</p>
            </div>
        </div>
    </div>
    <Footer /></div>
  )
}
