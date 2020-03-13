const port = 8080;
var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");




app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.get("*", function(req, res){
    res.render("error.ejs");
});

app.listen(process.env.PORT || port, function(){
    console.log("server is running...");
});