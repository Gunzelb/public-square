const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    firstName: {
        type: String,
        trim: true,
        required: "First Name is Required"
    },

    lastName: {
        type: String,
        trim: true,
        required: "Last Name is Required"
    },
    
    username: {
        type: String,
        required: true,
        unique: "An account with this username already exists"
    },
    
    email: {
        type: String,
        unique: "An account with this email already exists",
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },
    
    password: {
        type: String,
        trim: true,
        required: "Please enter a password",
        validate: [({ length }) => length >= 8, "Passwords must be at least 8 characters long."]
    },
    
    userCreated: {
        type: Date,
        default: Date.now
    }
})



const User = model('User', userSchema);

module.exports = User;