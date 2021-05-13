const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: () => new Date()
        },
        exercises: [

            {
                type: {
                    type: String,
                    required: "Something"
                },
                name: {
                    type: String
                },
                duration: {
                    type: Number
                },

                distance: Number,
                weight: Number,
                reps: Number,
                sets: Number,
            },

        ]
    }
);

const Workout = mongoose.model("Workout", WorkoutSchema);
  
module.exports = Workout;
