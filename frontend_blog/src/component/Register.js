import React, { useState } from "react";

import "./register.css";

import { useNavigate } from "react-router-dom";

import axios from "axios";

 

 

export default function Register() {

    const [User, setUser] = useState()

    const [Email, setEmail] = useState()

    const [Phnumber, setPhnumber] = useState()

    const [Password, setPassword] = useState()

    const [Role,setRole] = useState()

 

    const navigate = useNavigate();

 

    const handleSubmit = (e) => {

        e.preventDefault();

        console.log("name :", User, " email :", Email, " password :", Password, " phone :", Phnumber , "role:",Role);

        axios.post("http://localhost:5000/mangal/register", {"Name":User,"Email":Email,"Password":Password,"Phnumber":Phnumber,

        // "Role":Role

    })

            .then(result => { console.log(result);

                navigate("/login");

            })

            .catch(err => console.log(err))

    }

 

    return (

        <div className="body">

            <form onSubmit={handleSubmit}>

                <div className="wrapper">

                    <h1>Register</h1>

                    <div className="input-box">

                        <input type="text" placeholder="Username" onChange={(e) => setUser(e.target.value)} required />

                    </div>

                    <div className="input-box">

                        <input type="text" placeholder="Email Id" onChange={(e) => setEmail(e.target.value)} required />

                    </div>

                    <div className="input-box">

                        <input type="number" placeholder="Phone Number" onChange={(e) => setPhnumber(e.target.value)} required />

                    </div>

                    <div className="input-box">

                        <input type="password" placeholder="Create Password" onChange={(e) => setPassword(e.target.value)} required />

                    </div>

                    {/* <div className="input-box">

                        <input type="password" placeholder="Enter Admin Code" onChange={(e) => setRole(e.target.value)} />

                    </div> */}

                    {/* <Link to="/home"> */}

                        <button type="submit" className="btn">Welcome!!!</button>

                    {/* </Link> */}

                </div>

            </form>

        </div>

    )

}