
const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors');
const bodyParser = require("body-parser");


mongoose.set('strictQuery',true)
try {
    mongoose.connect(
      "mongodb+srv://ar123:ar123@cluster0.ypex8cs.mongodb.net/?retryWrites=true&w=majority"
    )
    console.log('mongoose connect')
    
} catch (error) {
    handleError(error)
    
}




const app = express()



app.listen(5000, () => {
    console.log('server is running on port 5000')
})