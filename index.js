const express = require('express');
const {default: mongoose} = require('mongoose');
const bodyParser = require('body-parser');
const ShoesRoute = require('./routes/ShoesRoute');
const MaleShoesRoute = require('./routes/MaleShoesRoute');

// defining server
const server = express();

// middleware
server.use(bodyParser.json());
const PORT = 6002;

// importing routes
server.use(ShoesRoute);
server.use(MaleShoesRoute);
// connecting server to mongoose
mongoose.connect(
    "mongodb+srv://adjoaakoranteng:MI0q7K2c6txag4X1@cluster0.vkp9e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    ).then((result) =>{
    server.listen(PORT, () => console.log(`Server is running on ${PORT}`))
})



