const express = require("express");
require('dotenv').config();
const app = express();
const port = 1717;
const articleRouter = require("./routes/router");
const mongoose = require('mongoose');
const { errorHandler } = require('./controllers/errorController');

mongoose.connect('mongodb+srv://restapi-test:AgoTnOHPgCiDfXV8@cluster0.q2epf.mongodb.net/articlesDB?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.set('useCreateIndex', true); //in order to avoid the deprecation warning


app.use(express.json());

app.use("/api/v1/articles", articleRouter);



app.use(errorHandler);

app.listen(port, () => {
    console.log("The server is hosted on port 1717!");
});