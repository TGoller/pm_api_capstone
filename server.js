const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const policyRouter = require('./routes/policyRouter');
const mongoose = require("mongoose");

const app = express();
var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse http request with content type = application json
app.use(bodyParser.json());

//parse http request with content type = application /x www form unencoded
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/policymgrdb',{
    useNewUrlParser: true
});

const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connected successfully");
})


// top level route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to the Policy Management CRUD app" });
});


app.use('/api/policies', policyRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}.`);
});