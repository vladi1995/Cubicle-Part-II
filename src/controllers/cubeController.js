const express = require('express');
const cubeService = require('../services/cubeService');
const router = express.Router();

router.get('/create', (req, res) => {
    res.render('create');
});

router.post('/create', (req, res) => {
    const cube = req.body;
    cubeService.create(cube)
    .then(() => {
        res.redirect('/');
    }).catch(err => {
        console.log(err);
    })
});

module.exports = router;