const router = require('express').Router();
const { Workout } = require("../../models");

router.get('/', async (req, res) => {
    try {
        const workouts = await Workout.find()

        res.status(200).json(workouts);
    }
    catch (err) {
        res.status(500).json(err);
    }
})

router.post('/', async (req, res) => {
    try {
        const workouts = await Workout.create({});
        
        res.status(200).json(workouts);
    }
    catch (err) {
        res.status(500).json(err);
    }
})

router.put('/:id', async (req, res) => {
    console.log(req.body);
    try {
        const workouts = await Workout.findByIdAndUpdate(req.params.id, {$push:{exercises: req.body}}, {new: true});
        
        res.status(200).json(workouts);
    }
    catch (err) {
        res.status(500).json(err);
    }
});

router.get('/range', async (req, res) => {
    try {
        const workouts = await Workout.find({});

        res.status(200).json(workouts);
    }
    catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;