const express = require('express');
const mongoose = require('mongoose');

const app = express();

const db = require('./config/keys').mongoURI;

mongoose
.connect(db)
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err));

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Server started at port:${port}`);
});