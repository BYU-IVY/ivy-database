/*const express = require('express');
const router = express.Router();
const questions = require('../services/makeCsv');

//const followup = require('../services/getQuestions');

GET programming languages. 
router.get('/', async function(req, res, next) {
	  try {
		      res.json(await questions.getMultiple(req.query.page));
		    } catch (err) {
			        console.error(`Error while getting questions`, err.message);
			        next(err);
			      }
});

module.exports = router;*/

const express = require("express");
const router = express.Router();
const excelService = require("../services/makeCsv");

router.get("/", excelService.download);

module.exports = router;
