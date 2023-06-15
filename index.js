const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;
const hostname = "127.0.0.1"
const db = mongoose.connection;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"))
mongoose.connect('mongodb://localhost:27017/wikiDB');
db.on('error', console.error.bind(console, "Failed to Connect to Database"));


const articleSchema = mongoose.Schema({
    title: String,
    content: String
})

const Article = mongoose.model("Article", articleSchema);













db.on('open', () => {
    console.log("Successfully connected to database!");
    app.listen(port, hostname, () => {
        console.log(`Server is running on http://${hostname}:${port}`)
    })
})
