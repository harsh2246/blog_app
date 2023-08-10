import React from "react";
import "./footer.css";
import x from "../logos/x.png";
import insta from "../logos/insta.png";
import fb from "../logos/fb.png";
import linkedin from "../logos/linkedin.png";

export default function Footer() {
    return (
        <div className="Footer">

            <div className="Footer_section">

                <div className="Footer_links">

                    <div className="Footer_links_headings">

                        <h4>For Bussiness</h4>

                        <a href="/employer">

                            <p>Employer</p>

                        </a>

                        <a href="/healthplan">

                            <p>healthplan</p>

                        </a>

                        <a href="/induvidual">

                            <p>Induvidual</p>

                        </a>

                    </div>

                    <div className="Footer_links_headings">

                        <h4>The Project</h4>

                        <a href="/employer">

                            <p>About</p>

                        </a>

                        <a href="/healthplan">

                            <p>Blog</p>

                        </a>

                        <a href="/induvidual">

                            <p>Jobs</p>

                        </a>

                    </div>

                    <div className="Footer_links_headings">

                        <h4>Learn More</h4>

                        <a href="/employer">

                            <p>Pricing</p>

                        </a>

                        <a href="/healthplan">

                            <p>Teams</p>

                        </a>

                        <a href="/induvidual">

                            <p>Creaters</p>

                        </a>

                    </div>
                    <div className="Footer_links_headings">
                        <h4>Social Media</h4>
                        <div className="socialmedia">
                            <p><img src={fb} alt=""></img></p>
                            <p><img src={insta} alt=""></img></p>
                            <p><img src={x} alt=""></img></p>
                            <p><img src={linkedin} alt=""></img></p>
                        </div>
                    </div>
                </div>

                <b><hr></hr></b>
                <div className="Footer_below">
                    <div className="Footer_copyright">
                        <p>
                            @{new Date().getFullYear} Blogit. All right reserved.
                        </p>
                    </div>
                    <div className="Footer_below_links">
                        <a href="/terms"><div><p>Terms &  Conditions</p></div></a>
                        <a href="/FAQ"><div><p>FAQ</p></div></a>
                        <a href="/contact"><div><p>Contact</p></div></a>
                    </div>
                </div>
            </div>
        </div>
    )
};