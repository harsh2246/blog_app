// // import React, { useState } from "react";

// // import "./login.css";

// // import { useNavigate } from "react-router-dom";

// // import axios from "axios";
// // import { Link } from "react-router-dom";


// // export default function Login() {

// //     const [Email, setEmail] = useState()

// //     const [Password, setPassword] = useState()

// //     const [Role, setRole] = useState()

 

// //     const navigate = useNavigate();

 

// //     const handleSubmit = (e) => {

// //         e.preventDefault();

// //         console.log(" email :", Email, " password :", Password, "role:", Role);

// //         axios.post("http://localhost:5000/mangal/login", {"Email":Email,"Password":Password,"Role":Role})

// //             .then(result => { console.log(result);

// //                 if(result.data==="Success"){

// //                     navigate("/");

 

// //                 }

// //                 else if(result.data==="Approved"){

// //                     navigate("/userlist")

// //                 }
// //                 else{
// //                     window.alert('Invalid user!')
// //                 }

               

// //             })

// //             .catch(err => console.log(err))

// //     }

 

// //     return (

// //         <div className="body">

// //             <form onSubmit={handleSubmit}>

// //                 <div className="wrapper">

// //                     <h1>Login</h1>

// //                     <div className="input-box">

// //                         <input type="text" placeholder="Email Id" onChange={(e) => setEmail(e.target.value)} required />

// //                     </div>

// //                     <div className="input-box">

// //                         <input type="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} required />

// //                     </div>

// //                     <div className="input-box">

// //                         <input type="password" placeholder="Role" onChange={(e) => setRole(e.target.value)}/>

// //                     </div>

// //                     {/* <Link to="/Home"> */}

// //                         <button type="submit" className="btn">Login</button>

// //                     {/* </Link> */}

// //                     <div className="register-link">

// //                     <p>Don't have an account?</p>

// //                     <a href="/register">Register here</a>

// //                 </div>

// //                 </div>

 

// //             </form>

// //         </div>

// //     )

// // }

// import React, { useState } from "react";

 

// import "./login.css";

 

// import { useNavigate } from "react-router-dom";

 

// import axios from "axios";

// import { Link } from "react-router-dom";

 

 

// export default function Login() {

 

//     const [Email, setEmail] = useState()

 

//     const [Password, setPassword] = useState()

 

//     //const [Role, setRole] = useState()

 

 

 

//     const navigate = useNavigate();

 

 

 

//     // const handleSubmit = (e) => {

 

//     //     e.preventDefault();

 

//     //     console.log(" email :", Email, " password :", Password, "role:", Role);

 

//     //     axios.post("http://localhost:5000/mangal/login", {"Email":Email,"Password":Password,"Role":Role})

 

//     //         .then(result => { console.log(result);

 

//     //             if(result.data==="Success"){

 

//     //                 navigate("/");

 

 

 

//     //             }

 

//     //             else if(result.data==="Approved"){

 

//     //                 navigate("/userlist")

 

//     //             }

//     //             else{

//     //                 window.alert('Invalid user!')

//     //             }

 

               

 

//     //         })

 

//     //         .catch(err => console.log(err))

 

//     // }

 

//     const handleSubmit = (e) => {

//         e.preventDefault();

       

//         const data = {

//             Email: Email,     // Make sure Email is defined before this point

//             Password: Password  // Make sure Password is defined before this point

//         };

   

//         axios.post("http://localhost:5000/mangal/login", data)

//         .then((res) => {

//         console.log(res)

//         console.log(res.data)

//         sessionStorage.setItem("id",res.data)

//     navigate("/");

// }

//         )

//         .catch(err => console.log(err.message))

//     }

   

 

//     return (

 

//         <div className="body">

 

//             <form onSubmit={handleSubmit}>

 

//                 <div className="wrapper">

 

//                     <h1>Login</h1>

 

//                     <div className="input-box">

 

//                         <input type="text" placeholder="Email Id" onChange={(e) => setEmail(e.target.value)} required />

 

//                     </div>

 

//                     <div className="input-box">

 

//                         <input type="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} required />

 

//                     </div>

 

//                     {/* <div className="input-box">

 

//                         <input type="password" placeholder="Role" onChange={(e) => setRole(e.target.value)}/>

 

//                     </div> */}

 

//                     {/* <Link to="/Home"> */}

 

//                         <button type="submit" className="btn">Login</button>

 

//                     {/* </Link> */}

 

//                     <div className="register-link">

 

//                     <p>Don't have an account?</p>

 

//                     <a href="/register">Register here</a>

 

//                 </div>

 

//                 </div>

 

 

 

//             </form>

 

//         </div>

 

//     )

 

// }








import React, { useState } from "react";

import "../src/component/register.css";

import {Link, useNavigate } from "react-router-dom";

import axios from "axios";
import "./login.css"

 

 

export default function Login() {

    const [Email, setEmail] = useState()

    const [Password, setPassword] = useState()

    const [loginMessage,setLoginMessage] = useState()

 

    const navigate = useNavigate();

 

    const handleSubmit = (e) => {

        e.preventDefault();

        console.log(" email :", Email, " password :", Password);

        axios.post("http://localhost:5000/mangal/login", { Email, Password })

        .then(response => {

            if (response.data === "Success") {

                navigate("/home");

            } else if (response.data === "Admin") {

                navigate("/admin");

            } else {

                setLoginMessage(response.data);

            }

        })

        .catch(error => {

            console.error("Error logging in:", error);

        });

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

                    <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />

                </div>

                <button type="submit" className="btn">Login</button>

                {loginMessage && <p className="login-message">{loginMessage}</p>}

                <p>Don't have an account? <Link to="/register">Register</Link></p>

            </div>

        </form>

    </div>

)

}