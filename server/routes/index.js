import express from 'express'
var router = express.Router();

router.get('/', function(req, res) {
    res.redirect('/');
})

module.exports = router;