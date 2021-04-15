const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true, "Please enter your name"],
        trim: true
    },
    email : {
        type: String,
        required: [true, "Please enter your email"],
        trim: true,
        unique: true
    },
    password : {
        type: String,
        required: [true, "Please enter your name"],
    },
    role : {
        type: Number,
        default: 0 //0 = user, 1 = admin
    },
    avatar : {
        type:String,
        default: "https://res.cloudinary.com/dnba3zc9i/image/upload/v1617730318/samples/people/boy-snow-hoodie.jpg"
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("User", userSchema)