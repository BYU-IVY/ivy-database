const express = require('express');
const router = express.Router();
const follow = require('../services/getFollowup');

/* GET programming languages. */
router.get('/:followID', async function(req, res, next) {
	try {
		followID = req.params.followID;
		res.json(await follow.followup(req.query.page, followID));
	} catch (err) {
		console.error(`Error while getting followup questions`, err.message);
		next(err);
	}
});

module.exports = router;
