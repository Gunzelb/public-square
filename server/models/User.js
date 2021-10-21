const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  firstName: {
    type: String,
    trim: true,
    required: "First Name is Required",
  },

  lastName: {
    type: String,
    trim: true,
    required: "Last Name is Required",
  },

  username: {
    type: String,
    required: true,
    trim: true,
    unique: "An account with this username already exists",
  },

  email: {
    type: String,
    unique: "An account with this email already exists",
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
  },

  password: {
    type: String,
    trim: true,
    required: "Please enter a password",
    validate: [
      ({ length }) => length >= 8,
      "Passwords must be at least 8 characters long.",
    ],
  },

  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
  ],

  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

userSchema.methods.comparePassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

const User = model("User", userSchema);

module.exports = User;
