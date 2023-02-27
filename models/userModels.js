const mongoose = require('mongoose');

const userModelsSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique:true,
   },
    email: {
        type: String,
        required: true,
        unique:true,
   },
    password: {
        type: String,
        required: true,
        unique:true,
   },
    country: {
        type: String,
        required: true,
   },
    phone: {
        type: String,
        required: true,
   },
    desc: {
        type: String,
        required: true,
   },
    isSeller: {
        type: Boolean,
        default:false
   },
   
},{
    timestamps: true,
});

const UserModels = mongoose.model('userModels', userModelsSchema)

module.exports = UserModels