const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 5000;

const {MONGO_URI} = require('./keys');

mongoose.connect(MONGO_URI, {
    useNewUrlParser : true,
    useUnifiedTopology : true
});

mongoose.connection.on('connected', () => {
    console.log("Connected to mongo !!");
})

mongoose.connection.on('error', (err) => {
    console.log("Error Connected to mongo", err);
})

require('./models/user');
require('./models/post')

app.use(express.json());
app.use(require('./routes/auth'));
app.use(require('./routes/post'));

// const customMiddleware = (req, res, next) => {
//     console.log("middleware executed");
//     next();
// }

// //app.use(customMiddleware);

// app.get('/', (req, res) => {
//     res.send("hello world");
// })

// app.get('/home', (req, res) => {
//     console.log("home!!")
//     res.send("hello world");
// })

// app.get('/about', customMiddleware, (req, res) => {
//     console.log("about!!")
//     res.send("about page!!");
// })

app.listen(PORT, () => {
  console.log("server is running on : ", PORT);  
})