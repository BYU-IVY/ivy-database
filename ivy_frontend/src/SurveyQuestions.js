import axios from 'axios';
import React, { Component } from 'react'
import { Progress, Segment, Button, Grid, Label, Icon, Modal, Header, Menu, Image, Loader} from 'semantic-ui-react'
import Sidebar from "react-sidebar";




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
            questions: [],
            answersToExcel: [],
            sidebarOpen: false,
            questionsLoading: true,
            questionsWithSummary: [],
            currentPositionInProgressBar: 0
        }
        this.loadQuestions()
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }

    populateToExcel = (QID, answer, compliantAnswer, criticality) => {
        var questionAnswers = {"QID":QID,"Answer":answer, "CompliantAnswer":compliantAnswer, "Criticality":criticality}
        var answersToExcelCopy = this.state.answersToExcel
        if (answersToExcelCopy.length > 0) {
            for (var i=0;i<answersToExcelCopy.length;i++) {
                if (answersToExcelCopy[i].QID == questionAnswers.QID) {
                    answersToExcelCopy.splice(i, 1, questionAnswers)
                    return
                }
            }
            for (var i=0;i<answersToExcelCopy.length;i++) {
                if (answersToExcelCopy[i].QID > questionAnswers.QID) {
                    answersToExcelCopy.splice(i, 0, questionAnswers)
                    return
                }
            }
            answersToExcelCopy.push(questionAnswers)
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
        this.loadFollowup(this.state.currentQuestionID)
    }

    noAnswer = () => {
        this.populateToExcel(this.state.currentQuestionID, "No", this.state.currentCompliantAnswer,this.state.currentCriticality)
        this.deleteFollowUp(this.state.currentQuestionID)
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
            //console.log(this.state.questionInArray)
            return (
                <Button onClick={this.previousQuestion} circular positive size='massive' floated='left' icon style={{background: '#373737', width: '100px'}}>
                    <Icon name='arrow left' />
                </Button>
            )
        }
    }

    

    displayQuestion = (nextQuestionInArray) => {
        if (this.state.questions[nextQuestionInArray] && this.state.questions[nextQuestionInArray].QID != 10000) {
            var question = ""
            var QID = ""
            var compliantAnswer = ""
            var criticality = ""
            question = this.state.questions[nextQuestionInArray].QText
            QID = this.state.questions[nextQuestionInArray].QID
            compliantAnswer = this.state.questions[nextQuestionInArray].CompliantAnswer
            criticality = this.state.questions[nextQuestionInArray].Criticality
            console.log(question)
            this.updateCurrentPositionInProgressBar(QID)
            this.setState ({
                currentQuestionText: question,
                currentQuestionID: QID,
                currentCompliantAnswer:compliantAnswer,
                currentCriticality:criticality,
                questionInArray: nextQuestionInArray
            })
        } else {
            this.setState ({
                currentQuestionText: "",
                currentQuestionID: -1
            })
        }
        console.log(this.state.questionsWithSummary[this.state.currentPositionInProgressBar].QSummary)
        console.log(this.state.answersToExcel)
    }

    loadQuestions = () => {
        var question = ""
        var QID = ""
        this.setState ({
            currentQuestionText: "",
            questionsLoading: true
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
                var listOfQuestionsWithSummary = []
                for(var i=0; i<response.data.data.length;i++) {
                    if (response.data.data[i].QSummary) {
                        listOfQuestionsWithSummary.push(response.data.data[i])
                        
                    }
                }
                this.setState ({
                    currentQuestionText: question,
                    currentQuestionID: QID,
                    questionaireLenght: response.data.data.length,
                    questionsWithSummary: listOfQuestionsWithSummary
                })
            } else {
                this.setState ({
                    currentQuestionText: "",
                    currentQuestionID: -1
                })
            }



           this.setState({
               questionsLoading:false
           })
        }).catch(error => {
            console.log("no response from server")
            
        })
    }

    loadFollowup = (ParentQID) => {
        var allQuestions = this.state.questions
        console.log(allQuestions)
        var url = "/follow/" + ParentQID
        this.setState({
            questionsLoading:true
        })
        axios.get(url).then(response => {
            console.log(response.data.data)
            var followUpQuestions = response.data.data
            var ParentLocation = -1
            //check for followup questions

            for(var i=0;i<allQuestions.length;i++) {
                if (allQuestions[i].QID == ParentQID) {
                    ParentLocation = i
                    break
                    // if (allQuestions[i+1]) {
                    //     for (var j=0;j<followUpQuestions.length;j++) {
                    //         if (followUpQuestions[j].QID == allQuestions)
                    //         allQuestions.splice(i+1, 0, followUpQuestions[j])
                    //     }
                    // }
                }
            }

            for (var i=0;i<followUpQuestions.length;i++) {
                if (allQuestions[ParentLocation+1+i]) {
                    if (followUpQuestions[i] == allQuestions[ParentLocation+1+i]) {
                        break
                    } else {
                        allQuestions.splice(ParentLocation+1+i, 0, followUpQuestions[i])
                    }
                } else {
                    allQuestions.push(followUpQuestions[i])
                }
            }
            console.log(allQuestions)    
            this.setState({
                questionsLoading:false
            })
            var nextQuestionInArray = this.state.questionInArray + 1
            this.displayQuestion(nextQuestionInArray)
        }).catch(error => {
            console.log("no response from server")
            
        })
    }

    deleteFollowUp = (ParentQID) =>{
        var allQuestions = this.state.questions
        var excelAnswers = this.state.answersToExcel
        for(var i=allQuestions.length-1;i>=0;i--) {
            if (allQuestions[i].ParentQ && allQuestions[i].ParentQ == ParentQID) {
                for (var j=excelAnswers.length-1;j>=0;j--) {
                    if (excelAnswers[j].QID == allQuestions[i].QID) {
                        excelAnswers.splice(j, 1)
                    }
                }
                allQuestions.splice(i, 1)
                
            }
        }
        var nextQuestionInArray = this.state.questionInArray + 1
        this.displayQuestion(nextQuestionInArray)
    }

    displayMainQuestion = () => {
        if (this.state.questions.length > 0) {
            return (
            <Grid.Row style={{display: "flex", justifyContent: "center", alignItems: "center", height: '55vh'}}>
                <b style={{color: 'white', fontSize: '30px', lineHeight: '130%', padding: '10vh'}}>{this.state.currentQuestionText}</b>
            </Grid.Row>
            )
        } else {
            return (
                <Grid.Row style={{display: "flex", justifyContent: "center", alignItems: "center", height: '55vh'}}>
                    <Loader active inverted size='big'/>
                </Grid.Row>
            )
        }
    }

    DisplayMoreDetails = () => {
        if (this.state.questions.length > 0 && this.state.questions[this.state.questionInArray].MoreDetail) {
            return (
            <Modal style={{background: '#707070'}} size='large' closeIcon trigger={<Button circular positive style={{background: '#2F2F2F'}}>More Details</Button>}>
            <Header style={{background: '#373737', color: 'white', fontSize: '30px'}} content='Details' />
            <Modal.Content style={{background: '#373737'}}>
                
                <p style={{color: 'white', fontSize: '20px'}}>
                {this.state.questions[this.state.questionInArray].MoreDetail}
                </p>
            </Modal.Content>
            </Modal>
            )
        }
    }

    updateCurrentPositionInProgressBar = (QID) => {
        for (var i=0;i<this.state.questionsWithSummary.length;i++) {
            if (QID == this.state.questionsWithSummary[i].QID) {
                this.setState({
                    currentPositionInProgressBar:i
                })
            }
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
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'SecurityPosture.xlsx');
            document.body.appendChild(link);
            link.click();
          });
    }

    loadSideBarMenu = () => {
        if (this.state.questions.length > 0) {
            var listOfSummaries = []
            var listOfRelevantQuestions = []

            for(var i=0; i<this.state.questionsWithSummary.length;i++) {
                if (this.state.questionsWithSummary[i+1]) {
                    listOfSummaries.push(this.displaySidebarQuestion(this.state.questionsWithSummary[i],this.state.questionsWithSummary[i+1].QID))
                } else {
                    listOfSummaries.push(this.displaySidebarQuestion(this.state.questionsWithSummary[i],10000))
                }
            }
            return (
                listOfSummaries
            )
        } else {
            return (
                <p>No questions loaded</p>
            )
        }
    }

    navigateToQuestion = (QID) => {
        var QIDLocation = -1
        for (var i=0; i<this.state.questions.length; i++) {
            if (this.state.questions[i].QID == QID) {
                QIDLocation = i
            }
        }
        this.setState({
            questionInArray: QIDLocation
        })
        this.displayQuestion(QIDLocation)
    }

    displaySidebarQuestion = (question, nextQuestionWithSummaryQID) => {
        var summaryHTML = null

        if (question.QID <= this.state.questionsWithSummary[this.state.currentPositionInProgressBar].QID && nextQuestionWithSummaryQID > this.state.questionsWithSummary[this.state.currentPositionInProgressBar].QID) {
            summaryHTML = <p onClick={() => this.navigateToQuestion(question.QID)} style={{cursor: 'pointer', fontWeight: 'bold', fontSize:'125%'}}>{question.QSummary}</p>
        } else {
            summaryHTML = <p onClick={() => this.navigateToQuestion(question.QID)} style={{cursor: 'pointer', fontSize:'110%'}}>{question.QSummary}</p>
        }
        return (
            summaryHTML
        )
    }

  

    displaySidebar = () => {
        return (
            <div>
              <h2 onClick={this.changeQuestion} style={{cursor: 'pointer'}}>Skip to Section</h2>
              {this.loadSideBarMenu()}
            </div>
        )
    }

    onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
    }

    handleButtons = () => {
        if (this.state.questionsLoading == true) {
            return(
                <Grid>
                    <Grid.Column width={3}>
                        <Grid columns={1} style={{marginTop: '3vh'}}>
                            <Grid.Column>
                                <Button disabled circular positive size='massive' floated='left' icon style={{background: '#373737', width: '100px'}}>
                                    <Icon name='arrow left' />
                                </Button>
                            </Grid.Column>
                        </Grid>
                    </Grid.Column>
                        <Grid.Column width={10}>
                            <Grid columns={2} style={{marginTop: '3vh'}}>
                                <Grid.Column>
                                    <Button disabled circular positive size='massive' style={{background: '#373737', width: '200px'}}>No</Button>
                                </Grid.Column>
                                <Grid.Column>
                                    <Button disabled circular positive size='massive' style={{background: '#373737', width: '200px'}}>Yes</Button>
                                </Grid.Column>
                            </Grid>
                        </Grid.Column>  
                    <Grid.Column width={3}>
                    </Grid.Column>    
                </Grid>
            )
        } else {
            return (
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
            )
        }
    }


    render() {
        if (this.state.currentQuestionID >= 0) {
            
            return (
                <div>
                    
                    <Sidebar
                        sidebar={this.displaySidebar()}
                        open={this.state.sidebarOpen}
                        onSetOpen={this.onSetSidebarOpen}
                        styles={{ sidebar: { background: "#212121", color: "#F5F5F5", padding: '4vh', textAlign: 'left', width:'30vh' } }}
                    >
                    </Sidebar>

                    
                    <Grid>
                        <Grid.Row style={{marginBottom: '1vh', display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <Grid.Column width={1}>
                                <Button onClick={() => this.onSetSidebarOpen(true)} positive floated='left' size='big' icon style={{background: '#373737', marginTop: "-7vh", marginLeft: "-6vh"}}>
                                    Sections
                                </Button>
                            </Grid.Column>
                            <Grid.Column width={1}>
                                <Label circular size="massive" style={{background:'#51B4FF'}}>{this.state.questionInArray + 1}</Label>
                            </Grid.Column>
                            <Grid.Column width={12}>
                                <Progress value={this.state.currentPositionInProgressBar} total={this.state.questionsWithSummary.length} inverted size='tiny' style={{marginTop: '2vh'}}/>
                            </Grid.Column>
                            <Grid.Column width={2}/>
                        </Grid.Row>
                    </Grid>
                    <Segment style={{background: '#373737', height: '60vh', marginTop: "3vh"}}>
                        <Grid>
                            {this.displayMainQuestion()}
                            <Grid.Row style={{display: "flex", justifyContent: "flex-end", alignItems: "flex-end", marginRight: '5vh', marginTop: '-5vh'}}>
                            {this.DisplayMoreDetails()}
                            </Grid.Row>
                        </Grid>
                    </Segment>
                    {this.handleButtons()}
                    
                </div>
            )
        } else {
            return (
                <div style={{textAlign: 'center', padding: '4vh', marginTop: '20vh'}}>
                    <Grid>
                        <Grid.Column>
                            <Grid.Row>
                                <b style={{color: '#51B4FF', fontSize: '60px', lineHeight: '100%'}}><Icon name='check square' style={{color: '#51B4FF'}} />Results</b>
                            </Grid.Row>
                            <Grid.Row style={{marginTop: '5vh'}}>
                                <b style={{color: 'white', fontSize: '40px', lineHeight: '100%'}}>We've compiled a complete, detailed, and simplified document listing all security controls your company needs to implement.</b>
                            </Grid.Row>
                            <Grid.Row style={{marginTop: '5vh'}}>
                                <Button onClick={this.downloadCVE} circular positive size='huge' style={{marginTop: '20px', background: '#373737', width: '160px'}}>Download</Button>
                            </Grid.Row>
                        </Grid.Column>
                    </Grid>
                </div>

            )
        }
    }
}
