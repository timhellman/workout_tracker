var path = require("path");
const db = require("../models/workout");
const { debugPort } = require("process");

module.exports = function(app){
    app.get("/api/workouts", (req,res)=> {
        db.find().then(workouts => res.json(workouts))
    });


    app.post("/api/workouts", (req,res)=> {
        db.create(req.body).then(workouts => res.json(workouts))
    });

    app.put("/api/workouts/:id", (req,res)=> {
        db.findByIdAndUpdate(req.params.id, {
            $push:{exercises: req.body}
        }).then(workout=> res.json(workout))
    })
    app.get("/api/workouts/range", (req,res)=> {
        db.find().then(workouts => res.json(workouts))
    });
}