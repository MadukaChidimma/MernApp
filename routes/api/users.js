const express = require("express");
const router = express.Router();

//@Route    GET api/users/test
// @desc    test users route
// @access  Public  
router.get('/test', (req, res) => {
res.json({msg: 'Users works'})
});

module.exports = router;  