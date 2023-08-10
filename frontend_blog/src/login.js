import React, { useState } from "react";

import "./login.css";

import { useNavigate } from "react-router-dom";

import axios from "axios";

 

 

export default function Login() {

    const [Email, setEmail] = useState()

    const [Password, setPassword] = useState()

    const [Role, setRole] = useState()

 

    const navigate = useNavigate();

 

    const handleSubmit = (e) => {

        e.preventDefault();

        console.log(" email :", Email, " password :", Password, "role:", Role);

        axios.post("http://localhost:5000/mangal/login", {"Email":Email,"Password":Password,"Role":Role})

            .then(result => { console.log(result);

                if(result.data==="Success"){

                    navigate("/");

 

                }

                else if(result.data==="Approved"){

                    navigate("/userlist")

                }

               

            })

            .catch(err => console.log(err))

    }

 

    return (

        <div className="body">

            <form onSubmit={handleSubmit}>

                <div className="wrapper">

                    <h1>Login</h1>

                    <div className="input-box">

                        <input type="text" placeholder="Email Id" onChange={(e) => setEmail(e.target.value)} required />

                    </div>

                    <div className="input-box">

                        <input type="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} required />

                    </div>

                    <div className="input-box">

                        <input type="password" placeholder="Role" onChange={(e) => setRole(e.target.value)}/>

                    </div>

                    {/* <Link to="/home"> */}

                        <button type="submit" className="btn">Login</button>

                    {/* </Link> */}

                    <div className="register-link">

                    <p>Don't have an account?</p>

                    <a href="/register">Register here</a>

                </div>

                </div>

 

            </form>

        </div>

    )

}