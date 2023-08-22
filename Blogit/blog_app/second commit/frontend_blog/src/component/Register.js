import React, { useState } from "react";
import "./register.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Register() {
  const [User, setUser] = useState("");
  const [UserError, setUserError] = useState("");
  const [Email, setEmail] = useState("");
  const [Phnumber, setPhnumber] = useState("");
  const [Password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [passwordError, setPasswordError] = useState("");
//   const navigate = useNavigate();

//   // Regular expressions for validation
//   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//   const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
//   const phoneNumberRegex = /^\d{10}$/;

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Validate email, password, and phone number using regex
//     if (!emailRegex.test(Email)) {
//       alert("Invalid email address");
//       return;
//     }
//     if (!passwordRegex.test(Password)) {
//       alert(
//         "Password must contain at least 8 characters including at least one uppercase letter, one lowercase letter, and one digit"
//       );
//       return;
//     }
//     if (!phoneNumberRegex.test(Phnumber)) {
//       alert("Invalid phone number");
//       return;
//     }

//     console.log(
//       "name :",
//       User,
//       " email :",
//       Email,
//       " password :",
//       Password,
//       " phone :",
//       Phnumber,
//       "role:",
//       Role
//     );

//     axios
//       .post("http://localhost:5000/mangal/register", {
//         Name: User,
//         Email: Email,
//         Password: Password,
//         Phnumber: Phnumber,
//         // "Role":Role
//       })
//       .then((result) => {
//         console.log(result);
//         navigate("/login");
//       })
//       .catch((err) => console.log(err));
//   };

//   return (
//     <div className="body">
//       <form onSubmit={handleSubmit}>
//         <div className="wrapper">
//           <h1>Register</h1>
//           <div className="input-box">
//             <input
//               type="text"
//               placeholder="Username"
//               onChange={(e) => setUser(e.target.value)}
//               required
//             />
//           </div>
//           <div className="input-box">
//             <input
//               type="text"
//               placeholder="Email Id"
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="input-box">
//             <input
//               type="number"
//               placeholder="Phone Number"
//               onChange={(e) => setPhnumber(e.target.value)}
//               required
//             />
//           </div>
//           <div className="input-box">
//             <input
//               type="password"
//               placeholder="Create Password"
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           {/* <div className="input-box">
//             <input
//               type="password"
//               placeholder="Enter Admin Code"
//               onChange={(e) => setRole(e.target.value)}
//             />
//           </div> */}
//           {/* <Link to="/login"> */}
//             <button type="submit" className="btn">
//               Welcome!!!
//             </button>
//           {/* </Link> */}
//         </div>
//       </form>
//     </div>
//   );
// }
const navigate = useNavigate();
const isEmailValid = (email) => {
    // Regular expression to validate email format
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
};
const isPhoneNumberValid = (phoneNumber) => {
    // Regular expression to validate phone number format
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber);
};
const isPasswordValid = (password) => {
    // Check if password has a minimum length of 6 characters
    return password.length >= 6;
};
const validateForm = () => {
    let isValid = true;
    if (!isEmailValid(Email)) {
        setEmailError("Invalid email format");
        isValid = false;
    } else {
        setEmailError("");
    }
    if (!isPhoneNumberValid(Phnumber)) {
        setPhoneError("Invalid phone number format");
        isValid = false;
    } else {
        setPhoneError("");
    }
    if (!isPasswordValid(Password)) {
        setPasswordError("Password must have a minimum of 6 characters");
        isValid = false;
    } else {
        setPasswordError("");
    }
    return isValid;
};
const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
        return;
    }
    console.log("name :", User, " email :", Email, " password :", Password, " phone :", Phnumber);
    axios.post("http://localhost:5000/mangal/register", { "Name": User, "Email": Email, "Password": Password, "Phnumber": Phnumber  })
        .then(result => {
            console.log(result);

            if (result.data.error) {

                setErrorMessage(result.data.error);
            } else {
                navigate("/login");
            }
        })
        .catch(err => console.log(err));
}
return (
    <div className="body">
        <form onSubmit={handleSubmit}>
            <div className="wrapper">
                <h1>Register</h1>
                <div className="input-box">
                    <input type="text" placeholder="Username" onChange={(e) => setUser(e.target.value)} />
                    {!User && <p classname ="error-message"> Enter the username</p>}
                </div>
                <div className="input-box">
                    <input type="text" placeholder="Email Id" onChange={(e) => setEmail(e.target.value)} />
                    {emailError && <p className="error-message">{emailError}</p>}
                </div>
                <div className="input-box">
                    <input type="text" placeholder="Phone Number" onChange={(e) => setPhnumber(e.target.value)} />
                    {phoneError && <p className="error-message">{phoneError}</p>}
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Create Password" onChange={(e) => setPassword(e.target.value)} />
                    {passwordError && <p className="error-message">{passwordError}</p>}
                </div>
                <br/>
                <button type="submit" className="btn">Welcome!!!</button>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
            </div>
        </form>
    </div>
)
}