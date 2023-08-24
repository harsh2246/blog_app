// const mongoose = require('mongoose');
// const { Schema } = mongoose;

// const BlogSchema = new Schema({
//  // blogId: { type: String, required: true },
//   //date: { type: String, required: true },
//   title: { type: String, required: true },
//   category: { type: String, required: true },
//   //author: { type: String, required: true },
//   image: { type: String, required: true },
//   content: { type: String, required: true }
// });

// module.exports = mongoose.model('Blog', BlogSchema);

const mongoose = require('mongoose');

const { Schema } = mongoose;

 

const CommentSchema = new Schema({

  username: { type: String },

  comment: { type: String }

}, { _id: false });

 

const BlogSchema = new Schema({

  // blogId: { type: String, required: true },

  // date: { type: String, required: true },

  title: { type: String, required: true },

  category: { type: String, required: true },

  comments_users: [CommentSchema], // Array of comment objects (optional)

  // author: { type: String, required: true },

  image: { type: String, required: true },

  post: { type: String, required: true },

});

 

module.exports = mongoose.model('Blog', BlogSchema);