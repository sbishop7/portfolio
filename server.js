let express = require("express");
let path = require("path");
// let bodyParser = require("body-parser");
// let session = require("express-session");

let app = express();

let PORT = 8000;

// app.use(bodyParser.urlencoded({extended: true}));

// app.use(session({secret: "MySecretCode_Buwahahaha"}));

app.use(express.static(path.join(__dirname, "./client")));
app.use(express.static(path.join(__dirname, "./node_modules")));
app.use(express.static(path.join(__dirname, "./client/static")));

app.set("views", path.join(__dirname, "./client/views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index")
});


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})