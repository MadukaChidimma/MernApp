const express = require("express");
const router = express.Router();

//@Route    GET api/profile/test
// @desc    test profile route
// @access  Public  
router.get('/test', (req, res) => {
res.json({msg: 'Profile works'})
});

module.exports= router; 