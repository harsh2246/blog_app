const mongoose = require('mongoose');

const { Schema } = mongoose;


const CommentSchema = new Schema({

  username: { type: String },

  comment: { type: String }

}, { _id: false });

 

const BlogSchema = new Schema({

//   blogId: { type: String, required: true },

//   date: { type: Date, required: true },

  title: { type: String},

  category: { type: String},

//   author: { type: String, required: true },
comments_users: [CommentSchema], 

  image: { type: String },

  content: { type: String},

});

 

module.exports = mongoose.model('NewBlog', BlogSchema);