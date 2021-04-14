# ivy-database

This web app is designed to help small businesses become more secure by helping them understand some of the various industry security frameworks. The business owner fills out a questionnaire to help the server know what frameworks are necesssary, and what requirements the business is already fulfilling. 

The web app is designed with a react front-end, an node.js express back end, and an SQL Database. The back-end server has 3 API endpoints. One pulls the initial list of questions(Ones that we will ask all customers regardless of other answers). The second takes in a Question ID, and returns all questions that have the question ID as their parent question in the database (More on that later). And the final endpoint takes a JSON object of question ID's, answers, compliant answers, and criticality. It returns a custom excel sheet with all the controls listed that the company should become compliant with, as well as the actual action to take. 

The Backend begins with index.js, which maps all the routes. Each of those routes is stored in routes/, which simply creates an express route and calls the service. Each of the API endpoints maps to a specific service. 

The Database has a questions table, where all questions are stored. The attributes are QID(Question ID), ParentQ, QText, MoreDetail, QSummary, Criticality, and CompliantAnswer. There is the Control Table, which has attributes of ConrolID, FrameworkID, Name, and Description. And because this is a many to many relationship, we have a junction table called Question_Control, which has a QCID, QuestionID, and ControlID. This is to map the questions to the controls. Finally, there is a Framework Table, which has the FID, Name, and Source. This is just a reference for the developers to understand which frameworks are in use in the web app.

To download the webapp, download from the git repository. You will need to run the following commands to install everything:

sudo apt-get install npm

sudo apt-get install mysql

sudo apt-get install phpmyadmin

npm install express

npm install mysql2

npm install exceljs

npm install body-parser

You will need to import the Database from the project into your MySQL instance. This can be done through phpmyadmin by going to the import tab.

There are two different web apps running on the server. The first runs the front end, the second runs the backend. You can run both by running npm start in the ivy_prototype/ or ivy_api/ directories. The ivy API runs on port 4000 and has thendpoints of /questions, /followup/, and /excel. You can go to the endpoints by going to IP_ADDRESS:4000/endpoint. 

Further developments for this project might involve creating dynamic excel sheet, allowing questions to have more than one parent ID to better map the relationship between questions and controls, expanding the number of frameworks, allowing users to upload an excel sheet, and anything else that helps the user better understand business security. 


Best of luck!! 
