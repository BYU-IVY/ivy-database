#!/usr/bin/env node

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 4000;
const questionsRouter = require('./routes/getQuestions');
const followRouter = require('./routes/getFollowup');
const excelRouter = require('./routes/makeCsv');
var cookieParser = require('cookie-parser');

app.use(cookieParser());

app.use(bodyParser.json());
app.use(
	  bodyParser.urlencoded({
		      extended: true,
		    })
);

app.get('/', (req, res) => {
	  res.json({'message': 'ok'});
})

app.use('/questions', questionsRouter);
app.use('/follow', followRouter);
app.use('/excel', excelRouter);

/* Error handler middleware */
app.use((err, req, res, next) => {
	  const statusCode = err.statusCode || 500;
	  console.error(err.message, err.stack);
	  res.status(statusCode).json({'message': err.message});


	  return;
});

app.listen(port, () => {
	  console.log(`Example app listening at http://localhost:${port}`)
});
