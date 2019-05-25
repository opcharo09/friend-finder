const express = require("express");
const path = require("path");


const app = express();


const PORT = process.env.PORT || 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/home.html", function(req, res) {
  res.json(path.join(__dirname, "/app/public/home.html"));
});


app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});