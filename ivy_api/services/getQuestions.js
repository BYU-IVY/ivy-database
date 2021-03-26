const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1){
	const offset = helper.getOffset(page, config.listPerPage);
	const rows = await db.query(
		`SELECT QID, QText, ParentQ FROM Question WHERE ParentQ=21`, 
		[offset, config.listPerPage]
	);
	const data = helper.emptyOrRows(rows);
	const meta = {page};

	return {
		data,
		meta
	}
}

/*async function getFollow(page = 1){
	const followOffset = helper.getOffset(page, config.listPerPage);
	const followRows = await db.query(
		`SELECT QID FROM Question`, 
		[offset, config.listPerPage]
	);
	const followData = helper.emptyOrRows(rows);
	const followMeta = {page};

	return {
		followData,
		followMeta
	}
}*/

module.exports = {
	getMultiple
}
