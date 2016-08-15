'use strict';

var express = require('express'),
	Blocks 	= require('../../mock/blockData.json'),
	Trucks	= require('../../mock/truckData.json');

var router = express.Router();

router.get('/blocks', function(req,res){
	res.json({blocks: Blocks});
});

router.get('/trucks', function(req,res){
	res.json({trucks: Trucks});
});

module.exports = router;