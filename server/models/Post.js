const { Schema, model } = require("mongoose");

const postSchema = new Schema({
  body: {
    type: String,
    required: "Empty posts cannot be made",
  },
  user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
  },
  postCreated: {
      type: Date,
      default: Date.now
  },
  isPrivate: Boolean,
});

const Post = model('Post', postSchema)

module.exports = Post;
