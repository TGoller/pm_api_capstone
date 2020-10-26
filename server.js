const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// parse http request with content type = application json
app.use(bodyParser.json());

//parse http request with content type = application /x www form unencoded
app.use(bodyParser.urlencoded({extended:true}));

// top level route
app.get("/", (req,res) => {
    res.json({ message:"Welcome to the Policy Manamagnet CRUD app"});
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});