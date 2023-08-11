const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

// User Model
const User = require('./users');
const Blog= require('./blogs');
const NewBlog=require('./blog')
const BlogUser = require('./blog_users');
const UserModel=require('./user_model');
// READ Users
router.route('/').get((req, res) => {
  User.find()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

// router.post('/register', async (req, res) => {
//   try {
//     const { name, id, phone } = req.body;

//     // Create a new user document
//     const newUser = new User({
//       name,
//       id,
//       phone,
//       isActive: true, // Set the isActive status (you can adjust this as needed)
//       role: 'Customer', // Set the role (you can adjust this as needed)
//     });

//     // Save the new user document to the database
//     const result = await newUser.save();
//     res.status(201).json(result); // Return the inserted user as a JSON response
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });
router.get('/my', async (req, res) => {
  const userId = req.query.id; // Extract the id from the query parameter
  console.log("hey user id is " + userId);

  try {
    // Use the User model to find the user by the 'id' field
    const user = await User.findOne({ id: userId });
    if (!user) {
      // If the user with the provided 'id' is not found, return a 404 response
      return res.status(404).json({ error: 'User not found' });
    }
    // If the user is found, return the user data
    console.log(user)
    res.json(user);
  } catch (error) {
    // If there's an error while finding the user, return a 500 response with the error message
    res.status(500).json({ error: error.message });
  }
})
router.get('/fetchblogs', async (req, res) => {
  try {
    // Use the "blogs" model to find all blogs
    const allBlogs = await Blog.find();

    if (allBlogs.length === 0) {
      // If no blogs are found, return a 404 response
      return res.status(404).json({ error: 'No blogs found' });
    }

    // If blogs are found, return the list of blogs
    res.json(allBlogs);
  } catch (error) {
    // If there's an error while finding the blogs, return a 500 response with the error message
    res.status(500).json({ error: error.message });
  }
});
router.get('/random-blogs', async (req, res) => {
  console.log("api-hits")
  try {
    const randomBlogs = await Blog.aggregate([
      { $sample: { size: 4 } }
    ]);

    res.send(randomBlogs);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Fetch 8 random blogs for a specific category
router.get('/random-blog-category/:category', async (req, res) => {
  try {
    const { category } = req.params;
    console.log("Requested category:", category); // Add this line for debugging

    const randomBlogs = await Blog.aggregate([
      { $match: { category: category } },
      { $sample: { size: 8 } }
    ]);

    console.log("Random blogs:", randomBlogs); // Add this line for debugging

    res.send(randomBlogs);
  } catch (error) {
    console.error("Error:", error); // Add this line for debugging
    res.status(500).send(error);
  }
});
router.get('/blogs/:blogId', async (req, res) => {
  console.log("hit that api")
  const blogId = req.params.blogId;

  try {
    // Use your Blog model to find the blog by its ID
    const blog = await Blog.findOne({ blogId: blogId })

    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    res.json(blog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.get('/blogsbyuser/:id', async (req, res) => {//nishanth
  const userId = req.params.id;
  console.log("hey you hit this",userId)
  try {
    // Use the BlogUser model to find blogs by the 'blog_user' field
    const blogs = await BlogUser.find({ userid: userId });
    if (blogs.length === 0) {
      return res.status(404).json({ message: 'No blogs found for the user' });
    }
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
// router.post('/create-blog', async (req, res) => {
//   try {
//     console.log(req.body)
//     const { blogId, date, title, category, author, image, post,userid } = req.body;
    
//     // Create a new blog document
//     const newBlog = new BlogUser({
//       blogId,
//       date,
//       title,
//       category,
//       author,
//       image,
//       post,
//       userid
//     });
//     console.log(newBlog)
//     // Save the new blog document to the database
//     const result = await newBlog.save();
//     res.status(201).json(result); // Return the inserted blog as a JSON response
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });
router.post('/register',(req,res)=>{
  UserModel.create(req.body)
  .then(Users=>res.json(Users))
  .catch(err=>res.json(err))
  })
  
   
  
  router.post("/login",(req,res)=>{
  
      const{Email,Password,Role}=req.body
  
      UserModel.findOne({Email:Email})
  
      .then(Users =>{
  
          if(Users){
  
              if(Users.Password===Password){
  
                  if(Role=="codeadmin"){
  
                      res.json("Approved")
  
                  }
  
                  else{res.json("Success")}
  
              }else{
  
                  res.json("Incorrect Password")
  
              }
  
          }else{
  
              res.json("No Record Existed")
  
          }
  
      })
  
  })

  router.get("/get-users", (req, res) => {

    UserModel.find()

      .then(users => res.json(users))

      .catch(error => res.json(err))

      });

 

 

      router.delete("/delete-users/:email", (req, res) => {

        console.log(req.params.email)

        const userEmail = req.params.email; // Use req.params.email to get the email from the URL parameter

        UserModel.findOneAndDelete({ Email: userEmail }) // Find and delete by the email field

          .then(() => {

            res.json({ message: "User deleted successfully" });

          })

          .catch(error => {

            res.status(500).json({ message: "Error deleting user" });

          });

      });



      router.post('/create-blog', (req, res) => {

        const { title, content, category, imageUrl } = req.body;
    
     
    
        if (!title || !content || !category || !imageUrl) { // Check if imageUrl is provided
    
          return res.status(400).json({ error: 'Title, content, category, and imageUrl are required fields' });
    
        }
    
     
    
        NewBlog.create({ title, content, category, imageUrl }) // Include imageUrl
    
          .then((createdDocument) => {
    
            console.log('Document created:', createdDocument);
    
            res.status(201).json(createdDocument);
    
          })
    
          .catch((error) => {
    
            console.error('Error creating document:', error);
    
            res.status(500).json({ error: 'An error occurred while creating the document' });
    
          });
    
      });

      router.get('/getblog', (req, res) => {
        NewBlog.find()
          .then((data) => {
            console.log('data:', data);
            res.send(data);
          })
          .catch((error) => {
            console.log('error:', error);
            res.status(500).json({ error: 'An error occurred while retrieving data' });
          });
      });

      // router.delete('/deleteblog/:id', (req, res) => {
      //   NewBlog.findByIdAndRemove(req.params.id, (error, data) => {
      //     if (error) {
      //       return res.status(500).json({ error: 'An error occurred while deleting the document' });
      //     } else {
      //       res.status(200).json({
      //         msg: 'Document deleted successfully',
      //       });
      //     }
      //   });
      // });
      router.delete('/delete-blog/:id', (req, res) => {
        NewBlog.findByIdAndRemove(req.params.id)
          .then((data) => {
            if (!data) {
              return res.status(404).json({ error: 'Document not found' });
            }
            res.status(200).json({ message: 'Document deleted successfully' });
          })
          .catch((error) => {
            console.error('Error deleting document:', error);
            res.status(500).json({ error: 'An error occurred while deleting the document' });
          });
      });
      
      
      
    
     
    
     
    
    // Get all blogs
    
   
//localhost:5000/mangal/blogsbyuser/123
module.exports = router;
