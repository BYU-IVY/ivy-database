const db = require('./db');
const helper = require('../helper');
const config = require('../config');

const excel = require("exceljs");
const answersJSON = { answers:[{QID: 1,  Answer: "Yes"}, {QID: 2,  Answer: "Yes"}, {QID: 3,  Answer: "Yes"}, {QID: 4,  Answer: "Yes"}, {QID: 5,  Answer: "Yes"}, {QID: 6,  Answer: "Yes"}, {QID: 7,  Answer: "Yes"}, {QID: 8,  Answer: "Yes"}, {QID: 9,  Answer: "Yes"}, {QID: 10,  Answer: "Yes"}, {QID: 11,  Answer: "Yes"}, {QID: 12,  Answer: "Yes"}, {QID: 13,  Answer: "Yes"}, {QID: 14,  Answer: "Yes"}, {QID: 15,  Answer: "Yes"}, {QID: 16,  Answer: "Yes"}, {QID: 17,  Answer: "Yes"}, {QID: 18,  Answer: "Yes"}, {QID: 19,  Answer: "Yes"}, {QID: 20,  Answer: "Yes"}, {QID: 21,  Answer: "Yes"}, {QID: 22,  Answer: "Yes"}]}

async function download (req, res) {
	//console.log(res)

	const answers = answersJSON.answers;
	var qids = "";
	for(let i = 0; i < answers.length; i++){
		if (answers[i].Answer == "Yes"){ 
			qids += answers[i].QID ;
			qids += ",";
		}
	}
	qids = qids.slice(0,-1);

	//const query = 'SELECT Name, QID, ControlID, FrameworkID, Description, QTEXT, MoreDetail FROM `Question_Control` JOIN Control ON Control.ConrolID = Question_Control.ControlID JOIN Question ON Question.QID = Question_Control.QuestionID IN (' + qids + ')'

	const query = 'SELECT Name, QID, ControlID, FrameworkID, QTEXT, Description, MoreDetail FROM `Question_Control` INNER JOIN Question ON Question_Control.QuestionID = Question.QID INNER JOIN Control ON Question_Control.ControlID = Control.ConrolID WHERE QID IN (' + qids +')'

	console.log(query)

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
		{ header: "Security Control Name", key: "Name", width: 25, height: 30 },
		{ header: "Question", key: "QTEXT", width: 100, height: 30 },
		{ header: "Control Description", key: "Description", width: 100, height: 30 },
		{ header: "Action", key: "MoreDetail", width: 100, height: 30 },
		
	];
	worksheet.getRow(1).font = {bold: true}
	worksheet.addRows(controls);

	let rowIndex = 1;
	for (rowIndex; rowIndex <= worksheet.rowCount; rowIndex++) {
		    worksheet.getRow(rowIndex).alignment = { vertical: 'middle', wrapText: true };
	}

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
