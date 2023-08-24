import React, { useState, useEffect } from "react";

 

import axios from "axios";

import { Button } from "react-bootstrap";

import { Link } from "react-router-dom";

import "./userlist.css";

import Footer from "./footer";

import NavBar from "./Navbar";

import AdminNav from "./adminnav";

 

 

function UserList() {

 

  const [users, setUsers] = useState([]);

 

 

 

  useEffect(() => {

 

    axios.get("http://localhost:5000/mangal/get-users")

 

      .then(response => {

 

        console.log(response.data)

 

        setUsers(response.data);

 

      })

 

      .catch(error => {

 

        console.error("Error fetching data:", error);

 

      });

 

  }, []);

 

 

 

  const handleDelete = (Email) => {

 

    axios.delete(`http://localhost:5000/mangal/delete-users/${Email}`)

 

      .then(response => {

 

        console.log(response.data);

 

        setUsers(users.filter(user => user.Email !== Email));

 

      })

 

      .catch(error => {

 

        console.error("Error deleting user:", error);

 

      });

 

  };

  const handleToggleStatus = (email, isActive) => {

 

    const newStatus = !isActive;

 

    axios.put(`http://localhost:5000/mangal/toggle-status/${email}`, { isActive: newStatus })

 

        .then(response => {

 

            console.log(response.data);

 

            setUsers(users.map(user => user.Email === email ? { ...user, isActive: newStatus } : user));

 

        })

 

        .catch(error => {

 

            console.error("Error toggling status:", error);

 

        });

 

};

 

 

    return (

        <div>

          <AdminNav/>

        <div className="user-list-container" style={{marginTop:'30px',marginBottom:'30px'}}>

 

          <h2 className="user-list-header">User List</h2>

 

          <table className="user-list-table">

 

            <thead>

 

              <tr>

 

                <th>Name</th>

 

                <th>Email</th>

 

                <th>Phone Number</th>

 

                <th>Actions</th>

 

              </tr>

 

            </thead>

 

            <tbody>

 

              {users.map(user => (

 

                <tr key={user.id}>

 

                  <td>

 

                    {user.Name}

 

                  </td>

 

                  <td>

 

                    {user.Email}

 

                  </td>

 

                  <td>

 

                    {user.Phnumber}

 

                  </td>

 

                  <td>

 

                  <button onClick={() => handleToggleStatus(user.Email, user.isActive)}>

 

                        {user.isActive ? "Deactivate" : "Activate"}

 

                    </button>

 

 

 

                    <hr/>

 

                    <button onClick={() => handleDelete(user.Email)}>Delete</button>

 

                  </td>

 

                </tr>

 

              ))}

 

            </tbody>

 

          </table>

 

        </div>

        {/* <Link to = "/login" ><Button variant='outline-info' >Logout</Button></Link> */}

    <Footer/>

        </div>

      );

 

    }

 

 

 

export default UserList;