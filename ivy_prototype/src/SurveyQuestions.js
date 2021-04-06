import axios from 'axios';
import React, { Component } from 'react'
import { Progress, Segment, Button, Grid, Label, Icon, Modal, Header, Sidebar, Menu, Image} from 'semantic-ui-react'



export default class SurveyQuestions extends Component {
    constructor() {
        super();
        this.state = {
            questionInArray: 0,
            currentQuestionText: null,
            currentQuestionID: null,
            currentCompliantAnswer:null,
            currentCriticality:null,
            questionaireLenght: 0,
            questions: null,
            answersToExcel: []
        }
        this.loadQuestions()
    }

    populateToExcel = (QID, answer, compliantAnswer, criticality) => {
        var questionAnswers = {"QID":QID,"Answer":answer, "CompliantAnswer":compliantAnswer, "Criticality":criticality}
        var answersToExcelCopy = this.state.answersToExcel
        if (answersToExcelCopy[this.state.questionInArray]) {
            answersToExcelCopy.splice(this.state.questionInArray, 1, questionAnswers)
        } else {
            answersToExcelCopy.push(questionAnswers)
        }
        this.setState ({
            answersToExcel: answersToExcelCopy
        })
        console.log(this.state.answersToExcel)
    }


    yesAnswer = () => {
        this.populateToExcel(this.state.currentQuestionID, "Yes", this.state.currentCompliantAnswer,this.state.currentCriticality)
        var nextQuestionInArray = this.state.questionInArray + 1
        this.loadFollowup(nextQuestionInArray)
        this.setState({
            questionInArray: nextQuestionInArray,
        })
        this.displayQuestion(nextQuestionInArray)
    }

    noAnswer = () => {
        this.populateToExcel(this.state.currentQuestionID, "No", this.state.currentCompliantAnswer,this.state.currentCriticality)
        var nextQuestionInArray = this.state.questionInArray + 1
        this.setState({
            questionInArray: nextQuestionInArray,
        })
        this.displayQuestion(nextQuestionInArray)
    }


    previousQuestion = () => {
        var previousQuestionInArray = this.state.questionInArray - 1
        this.setState({
            questionInArray: previousQuestionInArray
        })
        this.displayQuestion(previousQuestionInArray)
    }

    printBackButton = () => {
        if (this.state.questionInArray > 0) {
            return (
                <Button onClick={this.previousQuestion} circular positive size='massive' floated='left' icon style={{background: '#373737', width: '100px'}}>
                    <Icon name='arrow left' />
                </Button>
            )
        }
    }

    displayQuestion = (nextQuestionInArray) => {
        if (this.state.questions[nextQuestionInArray]) {
            var question = ""
            var QID = ""
            var compliantAnswer = ""
            var criticality = ""
            question = this.state.questions[nextQuestionInArray].QText
            QID = this.state.questions[nextQuestionInArray].QID
            compliantAnswer = this.state.questions[nextQuestionInArray].CompliantAnswer
            criticality = this.state.questions[nextQuestionInArray].Criticality
            console.log(question)
            this.setState ({
                currentQuestionText: question,
                currentQuestionID: QID,
                currentCompliantAnswer:compliantAnswer,
                currentCriticality:criticality
            })
        } else {
            this.setState ({
                currentQuestionText: "",
                currentQuestionID: -1
            })
        }
    }

    loadQuestions = () => {
        var question = ""
        var QID = ""
        this.setState ({
            currentQuestionText: ""
        })
        axios.get("/questions").then(response => {
            console.log(response)
            this.setState ({
                questions: response.data.data
            })
            if (response.data.data[this.state.questionInArray]) {
                question = response.data.data[this.state.questionInArray].QText
                QID = response.data.data[this.state.questionInArray].QID
                console.log(question)
                this.setState ({
                    currentQuestionText: question,
                    currentQuestionID: QID,
                    questionaireLenght: response.data.data.length
                })
            } else {
                this.setState ({
                    currentQuestionText: "",
                    currentQuestionID: -1
                })
            }
            
        }).catch(error => {
            console.log("no response from server")
            
        })
    }

    loadFollowup = (ParentQID) => {
        var allQuestions = this.state.questions
        console.log(allQuestions)
        var url = "/follow/" + ParentQID
        axios.get(url).then(response => {
            console.log(response.data.data)
            var followUpQuestions = response.data.data
            for (var followUp = 0; followUp < followUpQuestions.length; followUp++) {
                for (var questionNumber = 0; questionNumber < allQuestions.length; questionNumber++) {
                    console.log(allQuestions[questionNumber.QID])
                    if(allQuestions[questionNumber + 1]) {
                        if (allQuestions[questionNumber].QID < followUpQuestions[followUp].QID && allQuestions[questionNumber + 1].QID > followUpQuestions[followUp].QID) {
                            console.log('insert')
                            allQuestions.splice(questionNumber + 1, 0, followUpQuestions[followUp])
                            console.log(allQuestions)
                            break
                        }
                    } else {
                        allQuestions.push(followUpQuestions[followUp])
                        console.log(allQuestions)
                        break
                    }
                }
            }        
        }).catch(error => {
            console.log("no response from server")
            
        })
    }

    DisplayMoreDetails = () => {
        if (this.state.questions && this.state.questions[this.state.questionInArray].MoreDetail) {
            return (
            <Modal style={{background: '#707070'}} trigger={<Button circular positive style={{background: '#2F2F2F'}}>More Details</Button>}>
            <Header content='Details' />
            <Modal.Content>
                
                <p>
                {this.state.questions[this.state.questionInArray].MoreDetail}
                </p>
            </Modal.Content>
            </Modal>
            )
        }
    }

    downloadCVE = () => {
        axios({
            url: '/excel',
            method: 'GET',
            responseType: 'blob', // important
            params: {
                answersToQuestions: this.state.answersToExcel
            }
          }).then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
	    console.log(response.data);
	    console.log(this.state.answersToExcel);
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'SecurityPosture.xlsx');
            document.body.appendChild(link);
            link.click();
          });
    }

    loadSideBarMenu = () => {
        for (var i = 0; i < this.state.questions.length; i++) {
            if (this.state.questions[i].QSummary) {
                return (
                    <Menu.Item as='a'>
                    {this.state.questions[i].QSummary}
                    </Menu.Item>
                )
            }
        }
    }

    displaySidebar = () => {
        return (
            <div>
                <Sidebar
                    as={Menu}
                    animation='overlay'
                    icon='labeled'
                    inverted
                    vertical
                    visible={true}
                    width='thin'
                >
                    <Menu.Item as='a'>
                    Home
                    </Menu.Item>
                    <Menu.Item as='a'>
                    Games
                    </Menu.Item>
                    <Menu.Item as='a'>
                    Channels
                    </Menu.Item>
                </Sidebar>
            </div>
        )
    }



    render() {
        if (this.state.currentQuestionID >= 0) {
            return (
                <div>
                    {this.displaySidebar()}

                    <Sidebar.Pusher>
                    <Grid>
                        <Grid.Row style={{marginBottom: '1vh', display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <Grid.Column width={2}>
                                <Label circular size="massive" style={{background:'#34FFC8'}}>{this.state.questionInArray + 1}</Label>
                            </Grid.Column>
                            <Grid.Column width={12}>
                                <Progress value={this.state.currentQuestionID} total={111} inverted size='tiny' style={{marginTop: '2vh'}}/>
                            </Grid.Column>
                            <Grid.Column width={2}/>
                        </Grid.Row>
                    </Grid>
                    <Segment style={{background: '#373737', height: '50vh', marginTop: "3vh"}}>
                        <Grid>
                            <Grid.Row style={{display: "flex", justifyContent: "center", alignItems: "center", height: '40vh'}}>
                                <b style={{color: 'white', fontSize: '30px', lineHeight: '130%', padding: '10vh'}}>{this.state.currentQuestionText}</b>
                            </Grid.Row>
                            <Grid.Row style={{display: "flex", justifyContent: "flex-end", alignItems: "flex-end", marginRight: '5vh'}}>
                            {this.DisplayMoreDetails()}
                            </Grid.Row>
                        </Grid>
                    </Segment>
                    <Grid>
                        <Grid.Column width={3}>
                            <Grid columns={1} style={{marginTop: '3vh'}}>
                                <Grid.Column>
                                    {this.printBackButton()}
                                </Grid.Column>
                            </Grid>
                        </Grid.Column>
                            <Grid.Column width={10}>
                                <Grid columns={2} style={{marginTop: '3vh'}}>
                                    <Grid.Column>
                                        <Button onClick={this.noAnswer} circular positive size='massive' style={{background: '#373737', width: '200px'}}>No</Button>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Button onClick={this.yesAnswer} circular positive size='massive' style={{background: '#373737', width: '200px'}}>Yes</Button>
                                    </Grid.Column>
                                </Grid>
                            </Grid.Column>  
                        <Grid.Column width={3}>
                        </Grid.Column>    
                        
                    </Grid>
                    </Sidebar.Pusher>
                </div>
            )
        } else {
            return (
                <div style={{textAlign: 'center', padding: '4vh'}}>
                    <Grid>
                        <Grid.Column>
                        <Grid.Row>
                            <b style={{color: '#34FFC8', fontSize: '60px', lineHeight: '100%'}}>Results</b>
                        </Grid.Row>
                        <Grid.Row style={{marginTop: '5vh'}}>
                            <b style={{color: 'white', fontSize: '40px', lineHeight: '100%'}}>Filevine IVY has detected that the following frameworks are necessary for your business's cybersecurity compliance:</b>
                        </Grid.Row>
                        
                        </Grid.Column>
                    </Grid>
                    <Grid columns={2} style={{padding: '50px'}}>
                        <Grid.Column style={{textAlign: 'left'}}>
                            <Grid.Row>
                                <b style={{color: 'white', fontSize: '30px'}}> <Icon name='check square' style={{color: '#34FFC8'}} />CIS 20</b>
                            </Grid.Row>
                            <Grid.Row style={{marginTop: '20px'}}>
                                <b style={{color: 'white', fontSize: '30px'}}> <Icon name='check square' style={{color: '#34FFC8'}} />PCI DSS</b>
                            </Grid.Row>
                            <Grid.Row style={{marginTop: '20px'}}>
                                <b style={{color: 'white', fontSize: '30px'}}> <Icon name='check square' style={{color: '#34FFC8'}} />HIPAA</b>
                            </Grid.Row>
                        </Grid.Column>
                    
                        <Grid.Column>
                            <p style={{color: 'white'}}>
                                We've compiled a complete, detailed, and simplified document listing all security controls your company needs to implement.
                            </p>  
                            <Button onClick={this.downloadCVE} circular positive size='huge' style={{marginTop: '20px', background: '#373737', width: '160px'}}>Download</Button>
                        </Grid.Column>
                    </Grid>
                </div>

            )
        }
    }
}
