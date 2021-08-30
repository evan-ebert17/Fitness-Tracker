const router = require('express').Router();
const exerciseRoutes = require("./exercise");
const statsRoutes = require("./stats");
const mainRoute = require("./main");
const workoutRoute = require("./api/workouts");

router.use('/api/workouts', workoutRoute);
router.use('/', mainRoute);
router.use('/exercise', exerciseRoutes);
router.use('/stats', statsRoutes);




module.exports = router;