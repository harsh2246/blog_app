import React from "react";

import "./readblog.css";
import NavBar from "./Navbar";
import Footer from "./footer";
import { useLocation } from 'react-router-dom';

export default function Readblog() {
    // const location = useLocation();
    // const { blogs } = location.state;
    // console.log("yours blogs:",blogs);
    return (
        <>
            {/* {console.log("blog data ", blogs)} */}
            <NavBar />
            <div className="blog-container" style={{marginTop:'100px'}}>
                <div className="blog-heading">
                    <p>Perficient Publishes 2022 Community Impact Report</p>
                </div>

                <div className="blog-user">
                    <img src="https://th.bing.com/th/id/R.f01d043d79853d475ca40da62fddd190?rik=YMty9WbI7EltHg&riu=http%3a%2f%2fww1.prweb.com%2fprfiles%2f2012%2f05%2f18%2f9522240%2fperficient_logo_jpg.jpg&ehk=VV%2fQMVwINymfJbM3khUKQGlsaNYRQBt2M%2fYSg8mEGa4%3d&risl=&pid=ImgRaw&r=0" alt="user profile"></img>
                    <p><a>Connor Stieferman </a></p>
                </div>

                <div className="blog-image">
                    <img src="https://th.bing.com/th/id/R.f01d043d79853d475ca40da62fddd190?rik=YMty9WbI7EltHg&riu=http%3a%2f%2fww1.prweb.com%2fprfiles%2f2012%2f05%2f18%2f9522240%2fperficient_logo_jpg.jpg&ehk=VV%2fQMVwINymfJbM3khUKQGlsaNYRQBt2M%2fYSg8mEGa4%3d&risl=&pid=ImgRaw&r=0" alt="Blog related image"></img>
                </div>

                <div className="blog-content">
                    <p>Perficient and Our Global Colleagues Are Making a Difference in Our Communities
Perficient and our colleagues have always been passionate about giving back and making the world a better place. With more than 7,500 colleagues and locations around the globe, we recognize that our opportunities to make a positive difference are immense. Across our company, you can find individual acts of kindness, coordinated team-based activities, and everything in between. That generosity has inspired the creation of a new resource to celebrate our efforts.

Our first-ever Community Impact Report is a collection of stories, activities, and results that captures just some of the differences we made in 2022. Individually and collectively, we’re committing our time, talent, and resources to building stronger and healthier communities. This Community Impact Report is designed to celebrate the many things we do to help our communities thrive.

Read the report now to learn more about our commitment to our communities.</p>
<div className="blog-image">
                    <img src="https://th.bing.com/th/id/OIP.CD94E-DctPTxqo83lW2cowHaE7?pid=ImgDet&rs=1" alt="Blog related image"></img>
                </div>
<p>
Guided by our two corporate giving pillars – advancing STEM education and improving health and wellbeing – the report details some of the ways we gave back in 2022. Read the report to learn how we:

Contributed nearly $200,000 to meaningful causes through our Perficient Gives Charitable Match Program;
Enabled more than 150 people to kick-start their careers in tech through the Perficient Bright Paths Program;
Fought food insecurity during Hunger Action Month with Feeding America;
Partnered with Make-A-Wish to surprise a child with a once-in-a-lifetime trip to Walt Disney World;
Our global teams gave back to their local communities in unique ways;
And much more!
READ MORE: See How Perficient is Making a Difference in Our Communities
With so much good happening across our global company, this report offers just a glimpse into the generosity found at Perficient. You can find even more acts of kindness and colleague insights on the Life at Perficient blog.

At Perficient, we believe that any act of kindness, no matter how big or how small, has the potential to make a difference. Together, we’re building a better world.


</p>
                </div>

            </div>
            <Footer />
        </>
    );

}