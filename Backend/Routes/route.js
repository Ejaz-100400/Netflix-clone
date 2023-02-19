const express = require('express');
const trendingnowvideotilecontroller =require('../Controllers/Netflix')
const router = express.Router();

router.get('/shows',trendingnowvideotilecontroller.displaymovie);
router.get('/shows/:_id',trendingnowvideotilecontroller.playmovietile)
module.exports =router;