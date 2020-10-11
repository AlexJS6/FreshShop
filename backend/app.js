//mongoDb pwd: will1
//MongoDb url: mongodb+srv://<username>:<password>@cluster0.f9xlu.mongodb.net/<dbname>?retryWrites=true&w=majority

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const stuffRoutes = require('./routes/stuff');
const sessionRoutes = require('./routes/user');
const pageRoutes = require('./routes/pages');

const app = express();

app.set('view engine', 'ejs');
//app.set('views', __dirname, ' /views');
app.use(express.static('./public'));

mongoose.connect('mongodb+srv://will1:will1@cluster0.f9xlu.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
    .then(() => {
        console.log('Successfully connected to mongoDB Atlas!');
    })
    .catch((error) => {
        console.log('Unable to connect to MongoDB Atlas!');
        console.log(error);
    })


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Accept, Content-Type, Authorization');
    res.setHeader('Access-Controll-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
})

app.use(bodyParser.json());

app.use('/api/stuff', stuffRoutes);
app.use('/session', sessionRoutes);
app.use('/', pageRoutes);



module.exports = app;