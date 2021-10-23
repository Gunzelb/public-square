const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const postSchema = new Schema({
  postText: {
    type: String,
    trim: true,
    required: "Empty posts cannot be made",
  },

  postAuthor: {
    type: String,
    required: true,
    trim: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },

  private: Boolean,

  comments: [
    {
      commentText: {
        type: String,
        required: "Empty comments cannot be made",
        minlength: 1,
      },
      commentAuthor: {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    },
  ],
});

const Post = model("Post", postSchema);

module.exports = Post;
