const mongoose = require('mongoose');
const profileSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    firstname:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: false
    },
    gender: {
        type: String
    },
    phone: {
        type: String,
        required: true
    },
    city: {
        type: String
    },
    age: {
        type: Number
    },
    bioSummary: {
        type: String
    },
    skills: {
        type: Array
    },
    projects: {
        type: Array
    },
    jobs: {
        type: Array
    },
    followers: {
        type: Array
    },
    following: {
        type: Array
    },
    datecreated: {
        type: Date,
        default: new Date()
    }
}, {
    collection: 'profiles'
}); 


const Profile = mongoose.model('Profile', profileSchema);
module.exports = Profile