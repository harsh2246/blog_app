import React, { useState } from "react";

import "./admin.css";

import Card from 'react-bootstrap/Card';
import NavBar from "./Navbar";
import Button from 'react-bootstrap/Button';
import Footer from "./footer";

 

const Admin = () => {

  const initialData = [

    { id: 1, name: "John Doe", email:"jhondoe@gmail.com",phonenumber:345678765 },

    { id: 2, name: "Jane Smith", email: "janesmith@gmail.com",phonenumber:3245678765 },

    { id: 1, name: "John Doe", email:"jhondoe@gmail.com",phonenumber:345678765 },

    { id: 2, name: "Jane Smith", email: "janesmith@gmail.com",phonenumber:3245678765 },

    { id: 1, name: "John Doe", email:"jhondoe@gmail.com",phonenumber:345678765 },

    { id: 2, name: "Jane Smith", email: "janesmith@gmail.com",phonenumber:3245678765 },

    { id: 1, name: "John Doe", email:"jhondoe@gmail.com",phonenumber:345678765 },

    { id: 2, name: "Jane Smith", email: "janesmith@gmail.com",phonenumber:3245678765 },

    { id: 1, name: "John Doe", email:"jhondoe@gmail.com",phonenumber:345678765 },

    { id: 2, name: "Jane Smith", email: "janesmith@gmail.com",phonenumber:3245678765 },

 

  ];

 

  const [data, setData] = useState(initialData);

 

  const handleDelete = (id) => {

    const updatedData = data.filter((item) => item.id !== id);

    setData(updatedData);

  };

 

  return (

    <div>
    <NavBar></NavBar>
        <h1>Admin Page</h1>

    <div className='cards'>

        <Card className="profile-card">

        <Card.Img className="profile-img" variant="top" src="https://icons-for-free.com/iconfiles/png/512/person+profile+user+icon-1320184018411209468.png" alt="User Image" />

        <Card.Body>

          <Card.Title>Nithiyaraj</Card.Title>

          <Card.Text className='info'>

            Email Id:nithiyaraj@gmail.com

            <br />

            Phone No: 8610231485 <br/>

            Password : Nithi12345

          </Card.Text>

          <Button variant="primary">Edit Profile</Button>

        </Card.Body>

      </Card>

    <div className="admin-container">

      <table className="admin-table">

        <thead>

          <tr>

            <th>ID</th>

            <th>Name</th>

            <th>Email</th>

            <th>Phone Number</th>

            <th>Actions</th>

          </tr>

        </thead>

        <tbody>

          {data.map((item) => (

            <tr key={item.id}>

              <td>{item.id}</td>

              <td>{item.name}</td>

              <td>{item.email}</td>

              <td>{item.phonenumber}</td>

              <td>

                <button onClick={() => handleDelete(item.id)}>Delete</button>

                <button>Edit</button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

    </div>
<Footer></Footer>
    </div>

  );

};

 

export default Admin;