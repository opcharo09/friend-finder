const users = required ("../data/friends.js")
const path = required ("path");

module.exports = function(app){
    app.get("/api/friends", function(reg, res){
    res.json(users);    
    });
};
app.get("/", function(req, res) {
    res.json(path.join(__dirname, "public/survey.html"));
  });