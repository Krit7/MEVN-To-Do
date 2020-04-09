const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');


const app = express();

const todoRouter=require('./routes/todoRoutes');

//Dependencies Setup
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())


//MONGOOSE STUP
mongoose.connect("mongodb://localhost/todos", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Database Connected')
}).catch(err => { // we will not be here...
    console.error('Database starting error:', err.stack);
});


app.use(todoRouter);







app.listen(8081, (req, res) => {
    console.log("Server Has Started..!!!")
});
