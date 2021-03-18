import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const connection = mysql.createPool({
	host: "localhost",
	user: "questionUser",
	password: "cfQsHu12UD4B7MGn",
	database: "IVY"
})

function DBQuery() {
	const mysql = require('mysql')

	/*const connection = mysql.createPool({
		host: "localhost",
		user: "questionUser",
		password: "cfQsHu12UD4B7MGn",
		database: "IVY"
	})*/
	connection.connect()
	connection.query('SELECT * FROM Question', function (err, rows, fields) {
		if (err) throw err;
		console.log(rows);
	})
	connection.end()
}


function queryQuestion() {
	const app = express();
	app.get('/questions', function(request, result){
		connection.connect();
		connection.query("SELECT QText FROM 'Question';", function(err, results, fields){
			if(err) throw err;
			result.send(results);
		})
		connection.end();
	})
	app.listen(3000);
}

export default App;
//export queryQuestion
