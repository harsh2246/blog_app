const mongoose = require('mongoose');

const { Schema } = mongoose;

 

const BlogSchema = new Schema({

//   blogId: { type: String, required: true },

//   date: { type: Date, required: true },

  title: { type: String},

  category: { type: String},

//   author: { type: String, required: true },

  imageUrl: { type: String },

  content: { type: String},

});

 

module.exports = mongoose.model('NewBlog', BlogSchema);