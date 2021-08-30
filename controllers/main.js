const router = require('express').Router();
const path = require("path");

router.get('/', async (req, res) => {
    try {
        res.sendFile(path.join(__dirname, "../public/html/index.html"));
    }

    catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
})

module.exports = router;