const users = required ("../data/friends.js")
const path = required ("path");

module.exports = function(app){
    app.get("/app/data/friends", function(reg, res){
    res.json(users);    
    });
};