import React,{useEffect,useState} from 'react';

import {Link } from 'react-router-dom';

import NavBar from './Navbar'

import Footer from './footer'

import 'bootstrap/dist/css/bootstrap.css';

import Button from 'react-bootstrap/Button';

//import './myblogs.css';

import {MdDelete} from 'react-icons/md';

import {AiTwotoneEdit} from 'react-icons/ai';

import { useParams } from "react-router-dom";

import Modal from 'react-bootstrap/Modal';

 

import axios from 'axios';

import AdminNav from './adminnav';

 

export default function Bloglist() {

    const [cardData,setCardData]=useState([])

    useEffect(() => {

        // Fetch data from the API when the component mounts

        axios.get('http://localhost:5000/mangal/fetchblogs')

          .then(response => {

            setCardData(response.data);

          })

          .catch(error => {

            console.error('Error fetching data:', error);

          });

      }, []);

 

      // const handleDelete = (id) => {

      //   axios.delete(`http://localhost:5000/mangal/delete-bloglist/${id}`)

      //     .then(response => {

      //       console.log('Document deleted successfully from database 1:', response.data);

      //       setCardData(cardData.filter(card => card._id !== id));

      //     })

      //     .catch(error => {

      //       console.error('Error deleting document from database 1:', error);

      //     });

      const handleDeleteFromDb2 = (title) => {

        // Send a DELETE request to the second database

        axios.delete(`http://localhost:5000/mangal/delete-homeblog/${title}`)

          .then(response => {

            console.log('Document deleted successfully from database 2:', response.data);

            setCardData(cardData.filter(card => card.title !== title));

            // handleDeleteConfirmed(id);

          })

          .catch(error => {

            console.error('Error deleting document from database 2:', error);

          });

      };

   

      const handleDeleteFromDb3 = (title) => {

        // Send a DELETE request to the second database

        axios.delete(`http://localhost:5000/mangal/delete-whatsnewblog/${title}`)

          .then(response => {

            console.log('Document deleted successfully from database 3:', response.data);

            setCardData(cardData.filter(card => card.title !== title));

            // handleDeleteConfirmed(id);

          })

          .catch(error => {

            console.error('Error deleting document from database 3:', error);

          });

      };

 

      const handleDelete=(id,title)=>{

        handleDeleteFromDb2(title);

    handleDeleteFromDb3(title);

 

      }

     

  return (

    <div>

       

        <div>

        <AdminNav/><br></br><br></br>

        <h1 style={{fontWeight:'600'}}>All Blogs</h1>

        </div>

        <div className='myblog'>

        {cardData.map((card) => (

          <div key={card.id} className="card mb-3 mx-auto" style={{ maxWidth: '1000px' }}>

            <div className="row g-2">

              <div className="col-md-4">

               

                <img

                  src={card.image}

                  className="img-fluid rounded-start"

                  alt="..."

                />

               

              </div>

              <div className="col-md-8">

                <div className="card-body">

               

             

                  <h5 className="card-title">{card.title}</h5>

                  <small>{card.category}</small><br></br>

                  {/* <p className="card-text">{card.content}</p> */}

                  {/* <small className='text-muted'><a href={`/readblog /:${card._id}`} >Read more</a></small> */}

                  <Link to={`/readblog/${card._id}`}>Read more</Link>

                     

                  <p className="card-text">

                    <small className="text-muted">{new Date(card.updatedAt).toDateString}</small>

                    <span className='card-date'>{new Date(card.createdAt).toDateString}</span>

                  </p>

                  <div className='d-flex justify-content-between align-items-center'>

                  {/* <button className='btn btn-color-outline-info'>Edit</button> */}

                  {/* <Button className="mb-2 mr-2" variant="outline-primary" onClick={()=>handleSubmit(card._id)}><AiTwotoneEdit/>Edit blog</Button>  */}

                 

 

                  <Button className="mb-2 ml-2" variant="outline-danger" onClick={() => handleDelete(card._id,card.title)}><MdDelete/>Delete</Button>

                  </div>

                </div>

              </div>

            </div>

          </div>

        ))}

      </div>

       

        <Footer/>

       

    </div>

  )

}