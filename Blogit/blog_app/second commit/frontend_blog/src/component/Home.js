import React from 'react';
import NavBar from './Navbar';
import Slide from './slides';
import Footer from './footer';
import HomeSlider from './HomeSlider';

import Feedback from './feedback';
import Afternav from './AfterNav';
import axios from "axios"
import { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Whatsnew from './whatsnew';
export default function Home() {
  console.log("logss")
  const [userActive, setUserActive] = useState(false)
  const [data, setData] = useState([])
  const [blogs, setblogs] = useState({})
  const navigate = useNavigate();
  const fetchBlogbyid= async()=>{

    try {
      const response =  await axios.get("http://localhost:5000/mangal/blogs/b1a27234-4d8d-4c8c-92d8-41f16949924e", {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const res= await response.data;
      if(res) {
      console.log("new res",res)
      setblogs(res);
      console.log("response data ",response.data);
      navigateToBlogDetail();
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  const navigateToBlogDetail = () => {
    // navigate('/readblog', { state: { blogs } });
  };
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/mangal/random-blogs", {
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
    fetchData(); // Fetch data when the component mounts
  }, []); 
  console.log("blogs: ",blogs);
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' ,marginTop:'80px'}}>
      {/* <button onClick={() => fetchBlogbyid()}>
        harsh
      </button> */}
      {/* {userActive ? <Afternav /> : <NavBar />} */}
      <NavBar/>

      <Slide />

      <div style={welcomeSectionStyle}>
        <h1>Welcome to Our Blog Portal</h1>
        <p>
          Explore the World of Ideas: Your Gateway to Engaging Blogs. Welcome to
          our virtual realm, where words come alive and thoughts find their
          voice. Here, we curate a diverse collection of insightful blogs that
          span a multitude of topics, each offering a unique perspective and a
          wealth of knowledge.
        </p>
        {/* Rest of the welcome text */}
      </div>

      <div style={sliderSectionStyle}>
        <h3>What's New!!</h3>
        {/* <HomeSlider data={data} /> */}
       <Whatsnew/>
      </div>

      <div style={sliderSectionStyle}>
        <h3>Most Popular</h3>
        <HomeSlider data={data} />
      </div>

      <div style={sliderSectionStyle}>
        <h3>Most Liked</h3>
        <HomeSlider data={data} />
      </div>

      <div style={feedbackSectionStyle}>
        <h3 style={{ fontSize: '28px', marginBottom: '20px' }}>Reviews</h3>
        <Feedback style={feedbackCarouselStyle} />
      </div>

      <div style={{ padding: '40px 0' }}>
        {/* Add spacing between feedback and footer */}
      </div>

      <Footer />
    </div>
  );
}

const welcomeSectionStyle = {
  padding: "40px 0",
  textAlign: "center",
  backgroundColor: "#fff",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
  margin: "20px",
};

const sliderSectionStyle = {
  padding: "40px 0",
  backgroundColor: "#f8f8f8",
  margin: "20px",
};

const feedbackSectionStyle = {
  padding: "40px 0",
  textAlign: "center",
  backgroundColor: "#fff",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
  margin: "20px",
};

const feedbackCarouselStyle = {
  // Adjust carousel size here
  maxWidth: '800px', // Adjust as needed
  margin: '0 auto', // Center the carousel
};

