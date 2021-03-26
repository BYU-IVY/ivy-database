const db = require('./db');
const helper = require('../helper');
const config = require('../config');

const excel = require("exceljs");
const answersJSON = { answers:[{QID: 1,  Answer: "Yes"}, {QID: 2,  Answer: "Yes"}, {QID: 3,  Answer: "Yes"}]}

async function download (req, res) {
	console.log(res)

	const answers = answersJSON.answers;
	var qids = "";
	for(let i = 0; i < answers.length; i++){
		if (answers[i].Answer == "Yes") 
			qids += answers[i].QID ;
		//if (i < answers.length - 1)
			qids += ",";
	}
	qids = qids.slice(0,-1);

	const query = 'SELECT Name, QID, ControlID, FrameworkID, Description, QTEXT FROM `Question_Control` JOIN Control ON Control.ConrolID = Question_Control.ControlID JOIN Question ON Question.QID = Question_Control.QuestionID IN (' + qids + ')'

	//console.log(query)

	const controls = await db.query(query)
	let workbook = new excel.Workbook();
	let worksheet = workbook.addWorksheet("Controls");


	/*Tutorial.findAll().then((objs) => {
		let tutorials = [];

		objs.forEach((obj) => {
			tutorials.push({
				id: obj.id,
				title: obj.title,
				description: obj.description,
				published: obj.published,
			});
		});

		let workbook = new excel.Workbook();
		let worksheet = workbook.addWorksheet("Tutorials");

		worksheet.columns = [
			{ header: "Id", key: "id", width: 5 },
			{ header: "Title", key: "title", width: 25 },
			{ header: "Description", key: "description", width: 25 },
			{ header: "Published", key: "published", width: 10 },
		];

		// Add Array Rows
		worksheet.addRows(controls);

	});*/

	worksheet.columns = [
		{ header: "Security Control Name", key: "Name", width: 25 },
		{ header: "Description", key: "Description", width: 100 },
		{ header: "Question", key: "QText", width: 100 },
	];

	worksheet.addRows(controls);

	res.setHeader(
		"Content-Type",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
	);
	res.setHeader(
		"Content-Disposition",
		"attachment; filename=" + "Security-Compliance.xlsx"
	);
	return workbook.xlsx.write(res).then(function () {
		res.status(200).end();
	});
};

module.exports = {
	download,
};
