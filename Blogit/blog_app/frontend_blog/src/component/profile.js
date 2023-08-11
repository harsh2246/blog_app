import React, { Component, useState} from 'react';

import axios from 'axios';

import Card from 'react-bootstrap/Card';

import Button from 'react-bootstrap/Button';

import FormSelect from 'react-bootstrap/FormSelect';

import 'bootstrap/dist/css/bootstrap.min.css';

import Form from 'react-bootstrap/Form';

import Dropdown from 'react-bootstrap/Dropdown';

import './profile.css';

import NavBar from './Navbar';
import { Link } from 'react-router-dom';
import Footer from './footer';

export default function Profile () {

  const [title, setTitle] = useState('');

  const [imageUrl, setImageUrl] = useState('');

  const [content, setContent] = useState('');

  const [category, setCategory] = useState('');

 

  const handleSubmit = (e) => {

    // console.log(title,category,content,imageUrl)

    e.preventDefault();

    axios.post('http://localhost:5000/mangal/create-blog', {

        title,

        content,

        category,

        imageUrl,

      })

      // .then((result) => console.log(result.json()))

      // .catch((err) => console.log(err));

      .then((response) => {

        console.log(response.data);

      })

      .catch((err) => {

        console.log(err);

      });

  };

    return (

        <div>

        <NavBar></NavBar>

        <div className='cards'style={{marginTop:'70px'}}>

        <Card className="profile-card">

        <Card.Img variant="top" src="https://icons-for-free.com/iconfiles/png/512/person+profile+user+icon-1320184018411209468.png" alt="User Image" />

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

      <div className='content'>

       <h1> NEW BLOG ! </h1>

       {/* <input type='textarea' placeholder=' Give your Heading to Blog ! '/>

       <input id='blog' type='text' placeholder=' Write your  Blog ! '/> */}

       <Form.Group controlId="blogs" >

            <Form.Label>Blog Title</Form.Label>

            <Form.Control as="textarea" rows={1} placeholder="Give heading to your blog" onChange={(e)=>setTitle(e.target.value)} /><br></br>

            <Form.Control as="textarea" rows={1} placeholder="URL" onChange={(e)=>setImageUrl(e.target.value)}/><br></br>

            <Form.Control as="textarea" rows={10} placeholder="Write your blogs" onChange={(e)=>setContent(e.target.value)} /><br></br>

            <Form.Select aria-label="Default select example" onChange={(e)=>setCategory(e.target.value)}>

                <option>Categories</option>

                 <option value="Food">Food</option>

                 <option value="Travel">Travel</option>

                 <option value="Technology">Technology</option>

                 <option value="Health">Health</option>

                 <option value="Art">Art</option>

                  <option value="Nature">Nature</option>

          </Form.Select><br></br>

            <Button variant="success" onClick={handleSubmit}  >Blogit</Button>

            <Link to = "/myblogs" ><Button variant='outline-info' >My blogs</Button></Link>

          </Form.Group><br></br>

         

         

            <br></br>

       

      </div>

      </div>

      <Footer></Footer>

      </div>

    )

  }