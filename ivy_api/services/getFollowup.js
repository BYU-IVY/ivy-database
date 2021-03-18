const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function followup(page = 1, id){
	const offset = helper.getOffset(page, config.listPerPage);

	const followRows = await db.query(
		`SELECT QText, QID FROM Question WHERE QID=?`, 
		[id]
	);

	const data = helper.emptyOrRows(followRows)
	const meta = {page}

	return {
		data
	}
}

module.exports = {
	followup
}
