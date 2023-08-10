import React, { useState, useEffect } from "react";

import axios from "axios";

import "./userlist.css";
import Footer from "./footer";
import NavBar from "./Navbar";
 

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

    axios.delete(`http://localhost:5000/mangal/delete-users/test@gmail.com`)

      .then(response => {

        console.log(response.data);

        setUsers(users.filter(user => user.Email !== Email));

      })

      .catch(error => {

        console.error("Error deleting user:", error);

      });

  };

 

    return (
        <div>
          <NavBar/>
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

                    <button onClick={() => handleDelete(user.Email)}>Delete</button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>
    <Footer/>
        </div>
      );

    }

 

export default UserList;