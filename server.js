// npm i mongoose express body-parser //
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require("./routes");

const app = express();

// connecting to MongoDB

mongoose.connect("mongodb://localhost:27017/social-media-api", {
    useNewUrlParser: true, // useNewUrlParser is a new url string parser
    useUnifiedTopology: true, // useUnifiedTopology is a new server discovery and monitoring engine
    useCreateIndex: true, // useCreateIndex is a new index build
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
    console.log("Connected to MongoDB!");
});

app.use(bodyParser.json ());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes);

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
        message: error.message
        }
    });
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

