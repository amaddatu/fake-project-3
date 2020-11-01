const router = require("express").Router();

router.get("/test", (req, res) => {
    res.json(true);
});

module.exports = router;