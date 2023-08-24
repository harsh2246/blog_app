// import React, { Component } from 'react';

// import 'bootstrap/dist/css/bootstrap.css';

// import Button from 'react-bootstrap/Button';

// // import './myblogs.css';

// import {MdDelete} from 'react-icons/md';

// import {AiTwotoneEdit} from 'react-icons/ai';
// import NavBar from './Navbar';
// import Footer from './footer';

 

// export default class Myblogs extends Component {

//   render() {

//     const cardData = [

//         {

//           id: 1,

//           title: 'Science',

//           content:

//             'This is the content of card 1. It can contain any text or information you want.',

//           imageUrl:

//             'https://c4.wallpaperflare.com/wallpaper/967/867/776/abstract-brain-science-artwork-wallpaper-preview.jpg',

//           updatedAt: 'Last updated 3 mins ago',

//         },

//         {

//           id: 2,

//           title: 'Tech',

//           content:

//             'This is the content of card 2. It can contain any text or information you want.',

//           imageUrl:

//             'https://c4.wallpaperflare.com/wallpaper/313/134/489/space-computer-1920x1200-desktop-wallpaper-preview.jpg',

//           updatedAt: 'Last updated 5 mins ago',

//         },

//         {

//             id: 3,

//             title: 'Sports',

//             content:

//               'This is the content of card 2. It can contain any text or information you want.',

//             imageUrl:

//               'https://c4.wallpaperflare.com/wallpaper/747/472/920/football-star-cristiano-ronaldo-celebrity-wallpaper-preview.jpg',

//             updatedAt: 'Last updated 5 mins ago',

//           },

//           {

//             id: 4,

//             title: 'Food',

//             content:

//               'This is the content of card 2. It can contain any text or information you want.',

//             imageUrl:

//               'https://c4.wallpaperflare.com/wallpaper/234/543/684/food-pizza-wallpaper-preview.jpg',

//             updatedAt: 'Last updated 5 mins ago',

//           },

//           {

//             id: 5,

//             title: 'Computer',

//             content:

//               'This is the content of card 2. It can contain any text or information you want.',

//             imageUrl:

//               'https://c1.wallpaperflare.com/preview/427/745/192/notebook-natural-laptop-macbook.jpg',

//             updatedAt: 'Last updated 5 mins ago',

//           },

//         // Add more card data as needed

//       ];

//     return (
//         <div>
//             <NavBar/>
//         <div className='myblog' style={{marginTop:'30px'}}>
        
//         {cardData.map((card) => (

//           <div key={card.id} className="card mb-3 mx-auto" style={{ maxWidth: '1000px' }}>

//             <div className="row g-2">

//               <div className="col-md-4">

//                 <img

//                   src={card.imageUrl}

//                   className="img-fluid rounded-start"

//                   alt="..."

//                 />

//               </div>

//               <div className="col-md-8">

//                 <div className="card-body">

//                   <h5 className="card-title">{card.title}</h5>

//                   <p className="card-text">{card.content}</p>

//                   <small className="text-muted"><a href='#'>Read more</a></small>

//                   <p className="card-text">

//                     <small className="text-muted">{card.updatedAt}</small>

                   

//                   </p>

//                   <div className='d-flex justify-content-between align-items-center'>

//                   {/* <button className='btn btn-color-outline-info'>Edit</button> */}

//                   <Button className="mb-2 mr-2" variant="outline-primary"><AiTwotoneEdit/>Edit blog</Button>

 

//                   <Button className="mb-2 ml-2" variant="outline-danger"><MdDelete/>Delete</Button>

//                   </div>

//                 </div>

//               </div>

//             </div>

//           </div>

//         ))}

//       </div>
//         <Footer/>
//         </div>
//     );

   

//   }

// }

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
//import Modal from 'react-bootstrap/Modal';
import Modal from 'react-bootstrap/Modal';

import axios from 'axios';

export default function Myblog () {
    // const cardData = [
    //     {
    //       id: 1,
    //       title: 'Science',
    //       content:
    //         'This is the content of card 1. It can contain any text or information you want.',
    //       imageUrl:
    //         'https://c4.wallpaperflare.com/wallpaper/967/867/776/abstract-brain-science-artwork-wallpaper-preview.jpg',
    //       updatedAt: 'Last updated 3 mins ago',
    //     },
    //     {
    //       id: 2,
    //       title: 'Tech',
    //       content:
    //         'This is the content of card 2. It can contain any text or information you want.',
    //       imageUrl:
    //         'https://c4.wallpaperflare.com/wallpaper/313/134/489/space-computer-1920x1200-desktop-wallpaper-preview.jpg',
    //       updatedAt: 'Last updated 5 mins ago',
    //     },
    //     {
    //         id: 3,
    //         title: 'Sports',
    //         content:
    //           'This is the content of card 2. It can contain any text or information you want.',
    //         imageUrl:
    //           'https://c4.wallpaperflare.com/wallpaper/747/472/920/football-star-cristiano-ronaldo-celebrity-wallpaper-preview.jpg',
    //         updatedAt: 'Last updated 5 mins ago',
    //       },
    //       {
    //         id: 4,
    //         title: 'Food',
    //         content:
    //           'This is the content of card 2. It can contain any text or information you want.',
    //         imageUrl:
    //           'https://c4.wallpaperflare.com/wallpaper/234/543/684/food-pizza-wallpaper-preview.jpg',
    //         updatedAt: 'Last updated 5 mins ago',
    //       },
    //       {
    //         id: 5,
    //         title: 'Computer',
    //         content:
    //           'This is the content of card 2. It can contain any text or information you want.',
    //         imageUrl:
    //           'https://c1.wallpaperflare.com/preview/427/745/192/notebook-natural-laptop-macbook.jpg',
    //         updatedAt: 'Last updated 5 mins ago',
    //       },
    //     // Add more card data as needed
    //   ];

      const [cardData, setCardData] = useState([]); // State to store fetched data
      const [cardNew, setCardnew] = useState([]); 
      const { id } = useParams(); // Get the blog post ID from the URL
      const [title, setTitle] = useState("");
      const [content, setContent] = useState("");
      const [category, setCategory]=useState("");
      const [image,setImage]=useState("")
      const [showModal, setShowModal] = useState(false);
      const [cardToDelete, setCardToDelete] = useState({});


  useEffect(() => {
    // Fetch data from the API when the component mounts
    axios.get('http://localhost:5000/mangal/getblog')
      .then(response => {
        setCardData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  

 

  // const handleDelete = (id) => {
  //   window.alert("Sure you want to delete this blog?");
    // <div
    //   className="modal show"
    //   style={{ display: 'block', position: 'initial' }}
    // >
    //   <Modal.Dialog>
    //     <Modal.Header closeButton>
    //       <Modal.Title>Modal title</Modal.Title>
    //     </Modal.Header>

    //     <Modal.Body>
    //       <p>Modal body text goes here.</p>
    //     </Modal.Body>

    //     <Modal.Footer>
    //       <Button variant="secondary">Close</Button>
    //       <Button variant="primary">Save changes</Button>
    //     </Modal.Footer>
    //   </Modal.Dialog>
    // </div>
    // axios.delete(`http://localhost:5000/mangal/delete-blog/${id}`)
    //   .then((response) => {
    //     // Filter out the deleted entry from the cardData state
    //     setCardData(cardData.filter(card => card._id !== id));
    //     console.log('Document deleted successfully:', response.data);
    //   })
    //   .catch((error) => {
    //     console.error('Error deleting document:', error);
    //   });
//------------------------------
      // axios.delete(`http://localhost:5000/mangal/delete-allblog/${id}`)
      // .then((response) => {
      //   // Filter out the deleted entry from the cardData state
      //   setCardnew(cardNew.filter(item => item._id !== id));
      //   console.log('Document deleted successfully:', response.data);
      // })
      // .catch((error) => {
      //   console.error('Error deleting document:', error);
      // });

      // //---------------------------------
      // axios.delete(`http://localhost:5000/mangal/delete-newblogs/${id}`)
      // .then((response) => {
      //   // Filter out the deleted entry from the cardData state
      //   setCardData(cardData.filter(card => card._id !== id));
      //   console.log('Document deleted successfully:', response.data);
      // })
      // .catch((error) => {
      //   console.error('Error deleting document:', error);
      // });
  // };

  // const handleDelete = (id) => {
  //   window.alert("Sure you want to delete this blog?");
  
  //   // Send a DELETE request for each database you want to delete from
  //   axios.delete(`http://localhost:5000/mangal/delete-blog/${id}`)
  //     .then(response => {
  //       console.log('Document deleted successfully from database 1:', response.data);
  //       // Remove the deleted entry from the client-side state
  //       setCardData(cardData.filter(card => card._id !== id));
  //     })
  //     .catch(error => {
  //       console.error('Error deleting document from database 1:', error);
  //     });
  
  //   axios.delete(`http://localhost:5000/mangal/delete-allblog/${title}`)
  //     .then(response => {
  //       console.log('Document deleted successfully from database 2:', response.data);
  //       // Remove the deleted entry from the client-side state
  //       setCardnew(cardNew.filter(item => item.title !== title));
  //     })
  //     .catch(error => {
  //       console.error('Error deleting document from database 2:', error);
  //     });
      ///-------------------------------------------
  
    // Send more DELETE requests for other databases if needed
  // };
  
  // const handleSubmit = () => {
  //   axios
  //     .put(`http://localhost:5000/mangal/update-blog/${id}`, {
  //       title,
  //       content,
  //       category,
  //       imageUrl
  //     })
  //     .then(result => {
  //       console.log("Blog post updated:", result.data);
  //       // Navigate back to the blog post list or the edited post
  //     })
  //     .catch(error => {
  //       console.error("Error updating blog post:", error);
  //     });
  // };
  const handleDeleteFromDb1 = (id) => {
    axios.delete(`http://localhost:5000/mangal/delete-blog/${id}`)
      .then(response => {
        console.log('Document deleted successfully from database 1:', response.data);
        setCardData(cardData.filter(card => card._id !== id));
        handleDeleteConfirmed(id);
      })
      .catch(error => {
        console.error('Error deleting document from database 1:', error);
      });
  };

  const handleDeleteFromDb2 = (title) => {
    // Send a DELETE request to the second database
    axios.delete(`http://localhost:5000/mangal/delete-homeblog/${title}`)
      .then(response => {
        console.log('Document deleted successfully from database 2:', response.data);
        setCardData(cardData.filter(card => card.title !== title));
        handleDeleteConfirmed(id);
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
        handleDeleteConfirmed(id);
      })
      .catch(error => {
        console.error('Error deleting document from database 3:', error);
      });
  };

  const handleDelete = (id,title) => {
    // if (window.confirm('Are you sure you want to delete this blog?')) {
      setShowModal(true);
  setCardToDelete({ id, title });
    // }
  };
  
  const handleDeleteConfirmed = (id, title) => {
    // Call your delete API endpoints here
    handleDeleteFromDb1(id);
    handleDeleteFromDb2(title);
    handleDeleteFromDb3(title);
  
    // Close the modal after deletion
    setShowModal(false);
  };
  

  
  

  
  return (
    <div>
        <div>
        <NavBar/><br></br><br></br><br></br><br></br>
        <h1 style={{fontWeight:'600'}}>My Blogs!</h1>
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
                {/* <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <input
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          /> */}
              
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
                  {/* <Button
  className="mb-2 mr-2"
  variant="outline-primary"
  // onClick={handleSubmit}
>
  <AiTwotoneEdit />
  Edit blog
</Button> */}

                  <Button className="mb-2 ml-2" variant="outline-danger" onClick={() => handleDelete(card._id,card.title)}><MdDelete/>Delete</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
  <Modal.Header closeButton>
    <Modal.Title>Confirm Deletion</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    Are you sure you want to delete the blog with title: <strong>{cardToDelete.title}</strong>?
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
    <Button variant="danger" onClick={() => handleDeleteConfirmed(cardToDelete.id, cardToDelete.title)}>Delete</Button>
  </Modal.Footer>
</Modal>

       
        <Footer/>
        
    </div>
  )
}
