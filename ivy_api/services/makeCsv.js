const db = require('./db');
const helper = require('../helper');
const config = require('../config');

const excel = require("exceljs");
//const answersJSON = { answers:[{QID: 1,  Answer: "Yes"}, {QID: 2,  Answer: "Yes"}, {QID: 3,  Answer: "Yes"}, {QID: 4,  Answer: "Yes"}, {QID: 5,  Answer: "Yes"}, {QID: 6,  Answer: "Yes"}, {QID: 7,  Answer: "Yes"}, {QID: 8,  Answer: "Yes"}, {QID: 9,  Answer: "Yes"}, {QID: 10,  Answer: "Yes"}, {QID: 11,  Answer: "Yes"}, {QID: 12,  Answer: "Yes"}, {QID: 13,  Answer: "Yes"}, {QID: 14,  Answer: "Yes"}, {QID: 15,  Answer: "Yes"}, {QID: 16,  Answer: "Yes"}, {QID: 17,  Answer: "Yes"}, {QID: 18,  Answer: "Yes"}, {QID: 19,  Answer: "Yes"}, {QID: 20,  Answer: "Yes"}, {QID: 21,  Answer: "Yes"}, {QID: 22,  Answer: "Yes"}]}

async function download (req, res) {


	answerJSON = Array.from(req.query.answersToQuestions);
	 
	console.log(answerJSON)
	//const answers = answersJSON.answers;
	var qids = "";
	var totalCriticality = 1;
	var nonCompliantCriticality = 1;
	for(let i = 0; i < answerJSON.length; i++){
		obj = JSON.parse(answerJSON[i]);
		console.log(obj);
		totalCriticality += obj.Criticality;
		//console.log(answerJSON[i].Answer);
		//console.log(answerJSON[i].CompliantAnswer);
		if (obj.Answer != obj.CompliantAnswer) {
			if (obj.CompliantAnswer != "") {
				qids += obj.QID;
				qids += ",";
				nonCompliantCriticality += obj.Criticality;
			}
		}
	}
	qids = qids.slice(0,-1);

	console.log(qids);
	console.log(nonCompliantCriticality);
	console.log(totalCriticality);

	var score = (totalCriticality - nonCompliantCriticality) / totalCriticality;

	console.log(score);
	var grade = "";
	if(score >= .9)
		grade = "A"
	if(.9 > score && score >= .8)
		grade = "B"
	if(.8 > score && score >= .7)
		grade = "C"
	if(.7 > score && score >= .6)
		grade = "D"
	if(.6 > score && score >= .5)
		grade = "F"
	if(.5 > score)
		grade = "Critical"
	
	//const query = 'SELECT Name, QID, ControlID, FrameworkID, Description, QTEXT, MoreDetail FROM `Question_Control` JOIN Control ON Control.ConrolID = Question_Control.ControlID JOIN Question ON Question.QID = Question_Control.QuestionID IN (' + qids + ')'

	const query = 'SELECT Name, QID, ControlID, FrameworkID, QTEXT, Description, MoreDetail FROM `Question_Control` INNER JOIN Question ON Question_Control.QuestionID = Question.QID INNER JOIN Control ON Question_Control.ControlID = Control.ConrolID WHERE QID IN (' + qids +')'

	console.log(query)

	const controls = await db.query(query)
	let workbook = new excel.Workbook();
	let worksheet = workbook.addWorksheet("Controls");

	/*TITLE*/
	worksheet.mergeCells('A1', 'D6');
	worksheet.getCell('C2').value = 'ARMOR SECURITY COMPLIANCE REPORT';
	worksheet.getRow(1).alignment = {vertical: 'middle', wrapText: true};
	worksheet.getCell('C2').fill = { type: 'pattern', pattern: 'solid', fgColor:{argb:'44546a'}, bgColor:{argb:'44546a'} };
	worksheet.getCell('A1').font = {size: 36, name: 'calibri', color: {argb: 'fdfdfd'}, bold: true};
	worksheet.addRow({ }).commit();
	/*Column headers*/

	worksheet.mergeCells('A7', 'A11');
	worksheet.getCell('A8').value = 'Your Security Grade is: ';
	worksheet.getCell('A8').font = {size: 18, bold: true};
	worksheet.getCell('A8').fill = { type: 'pattern', pattern: 'solid', fgColor:{argb:'BFBFBF'}, bgColor:{argb:'BFBFBF'} };
	
	var gradeColor = "";

	if(grade == "A")
		gradeColor = '00FF00';
	if(grade == "B")
		gradeColor = 'C0FB05';
	if(grade == "C")
		gradeColor = 'EDFF01';
	if(grade == "D")
		gradeColor = 'FFA401';
	if(grade == "F")
		gradeColor = 'F95D07';
	if(grade == 'Critical')
		gradeColor = 'FF0000';

	console.log(gradeColor);

	worksheet.mergeCells('B7', 'D11');
	worksheet.getCell('B8').value = grade;
	worksheet.getCell('B8').font = {size: 36, color: {argb: gradeColor}, bold: true};
	worksheet.getCell('B8').fill = { type: 'pattern', pattern: 'solid', fgColor:{argb:'BFBFBF'}, bgColor:{argb:'BFBFBF'} };

	worksheet.getRow(11).values = ['Security Control Name', 'Question', 'Control Description', 'Action'];
	worksheet.getRow(11).height = 34;
	worksheet.getRow(11).font = {bold: true}

	worksheet.columns = [
		{ key: "Name", width: 25, height: 30 },
		{ key: "QTEXT", width: 90, height: 30 },
		{ key: "Description", width: 90, height: 30 },
		{ key: "MoreDetail", width: 90, height: 30 },
	];

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
