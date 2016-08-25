'use strict';

var express 	= require('express'),
		Blocks 		= require('../../mock/blockData.json'),
		Trucks		= require('../../mock/truckData.json'),
		Layout 		= require('../../mock/quoteLayout.json'),
		FeeTable	= require('../../mock/feeTableData.json');

var router = express.Router();

router.get('/blocks', function(req,res){
	res.json({blocks: Blocks});
});

router.get('/trucks', function(req,res){
	res.json({trucks: Trucks});
});

router.get('/quotelayout', function(req,res){
	res.json({quoteLayout: Layout});
});

router.get('/feetable', function(req,res){
	res.json({feeTable: FeeTable});
});

module.exports = router;