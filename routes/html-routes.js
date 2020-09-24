var path = require("path");

module.exports = function(app){
    //adding the routes to the main express app passed into this function
    app.get("/", (req,res)=> {
        res.sendFile(path.join(__dirname, "../public/index.html"))
    });
    //other get routes
    app.get("/exercise", (req,res)=> {
        res.sendFile(path.join(__dirname, "../public/exercise.html"))
    });
    app.get("/stats", (req,res)=> {
        res.sendFile(path.join(__dirname, "../public/stats.html"))
    })
}