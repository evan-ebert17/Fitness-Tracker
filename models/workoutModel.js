const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date(),
    },
    exercises: [{
        type: {
            type: String,
        },
        name: {
            type: String,
        },
        duration: {
            type: Number,
        },
        weight: {
            type: Number,
        },
        reps: {
            type: Number,
        },
        sets: {
            type: Number,
        }, 
        distance: {
            type: Number,
        },

    }],
});

// exercises: [
//     {
//       type: 'resistance',
//       name: 'Bicep Curl',
//       duration: 20,
//       weight: 100,
//       reps: 10,
//       sets: 4,
//     },

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;