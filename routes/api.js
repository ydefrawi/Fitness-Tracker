const express = require('express')
const router = express.Router();
const db = require("../models")

router.get('/workouts', (req,res) => {
    db.Workout.find({})
    .then(workout => {
      res.json(workout);
    })
    .catch(err => {
      res.json(err);
    });
});


router.put("/workouts/:id", (req, res) => {
    db.Workout.findByIdAndUpdate(
     {
        _id: req.params.id
    },
    {
        $push: {"exercises": req.body}
    },
      (error, edited) => {
        if (error) {
          console.log(error);
          res.send(error);
        } else {
          console.log(edited);
          res.send(edited);
        }
      }
    )
});


router.post('/workouts', ({body},res) => {
    db.Workout.create({body})
    .then(workout => {
      res.json(workout);
    })
    .catch(err => {
      res.json(err);
    });
});



module.exports = router;