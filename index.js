
const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors');
const bodyParser = require("body-parser");
const app = express();
const userRoute = require('./routes/userRoute');







// middleweare
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.json());



// routes middleweare


app.use('/api/user',userRoute)







// Routes
app.get('/', (req, res) => {
    res.send("hello world")
})













mongoose.set('strictQuery',true)
try {
    mongoose.connect(
      "mongodb+srv://ar123:ar123@cluster0.ypex8cs.mongodb.net/?retryWrites=true&w=majority"
    )
    console.log('mongoose connect')
    
} catch (error) {
    handleError(error)
    
}







app.listen(5000, () => {
    console.log('server is running on port 5000')
})