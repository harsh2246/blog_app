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

import React,{useEffect,useState} from 'react'
import NavBar from './Navbar'
import Footer from './footer'
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
//import './myblogs.css';
import {MdDelete} from 'react-icons/md';
import {AiTwotoneEdit} from 'react-icons/ai';
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
  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/mangal/delete-blog/${id}`)
      .then((response) => {
        // Filter out the deleted entry from the cardData state
        setCardData(cardData.filter(card => card._id !== id));
        console.log('Document deleted successfully:', response.data);
      })
      .catch((error) => {
        console.error('Error deleting document:', error);
      });
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
                  src={card.imageUrl}
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{card.title}</h5>
                  <small>{card.category}</small>
                  <p className="card-text">{card.content}</p>
                  <small className='text-muted'><a href='/readblog'>Read more</a></small>
                  
                      
                  <p className="card-text">
                    <small className="text-muted">{card.updatedAt}</small>
                    
                  </p>
                  <div className='d-flex justify-content-between align-items-center'>
                  {/* <button className='btn btn-color-outline-info'>Edit</button> */}
                  {/* <Button className="mb-2 mr-2" variant="outline-primary" ><AiTwotoneEdit/>Edit blog</Button>  */}

                  <Button className="mb-2 ml-2" variant="outline-danger" onClick={() => handleDelete(card._id)}><MdDelete/>Delete</Button>
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
