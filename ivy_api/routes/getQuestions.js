const express = require('express');
const router = express.Router();
const questions = require('../services/getQuestions');
//const followup = require('../services/getQuestions');

/* GET programming languages. */
router.get('/', async function(req, res, next) {
	  try {
		      res.json(await questions.getMultiple(req.query.page));
		    } catch (err) {
			        console.error(`Error while getting questions`, err.message);
			        next(err);
			      }
});

/*router.get('/', async function(req, res, next) {
	try {
		res.json(await followup.getFollow(req.query.page));
	} catch (err) {
		console.error(`Error while getting followup questions`, err.message);
		next(err);
	}
});*/


module.exports = router;
