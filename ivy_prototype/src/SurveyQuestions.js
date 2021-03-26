import axios from 'axios';
import React, { Component } from 'react'
import { Progress, Segment, Button, Grid, Label, Icon} from 'semantic-ui-react'


export default class SurveyQuestions extends Component {
    constructor() {
        super();
        this.state = {
            questionInArray: 0,
            currentQuestionText: null,
            currentQuestionID: null,
            questionaireLenght: 0,
            answerToPreviousQuestion: null
        }
        this.loadQuestions()
    }


    yesAnswer = () => {
        var questionanswer = {"QID":this.state.currentQuestionID,"response":"yes"}
        console.log(questionanswer)
        var nextQuestionInArray = this.state.questionInArray + 1
        this.setState({
            questionInArray: nextQuestionInArray,
            answerToPreviousQuestion: questionanswer
        })
        this.loadQuestions()
    }

    noAnswer = () => {
        var questionanswer = {"QID":this.state.currentQuestionID,"response":"no"}
        var nextQuestionInArray = this.state.questionInArray + 1
        this.setState({
            questionInArray: nextQuestionInArray,
            answerToPreviousQuestion: questionanswer
        })
        this.loadQuestions()
    }

    previousQuestion = () => {
        var previousQuestionInArray = this.state.questionInArray - 1
        this.setState({
            questionInArray: previousQuestionInArray
        })
        this.loadQuestions()
    }

    printBackButton = () => {
        if (this.state.questionInArray > 0) {
            return (
                <Button onClick={this.previousQuestion} circular positive size='massive' floated='left' icon style={{background: '#373737', width: '100px'}}>
                    <Icon color='white' name='arrow left' />
                </Button>
            )
        }
    }

    loadQuestions = () => {
        var question = ""
        var QID = ""
        this.setState ({
            currentQuestionText: ""
        })
        axios.get("/questions", {
            params: {
                previousQuestionAnswer: this.state.answerToPreviousQuestion
            }
        }).then(response => {
            console.log(response)
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

    downloadCVE = () => {
        axios({
            url: '/excel',
            method: 'GET',
            responseType: 'blob', // important
          }).then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'SecurityPosture.xlsx');
            document.body.appendChild(link);
            link.click();
          });
    }


    render() {
        if (this.state.currentQuestionID >= 0) {
            return (
                <div>
                    <Grid>
                        <Grid.Row style={{marginBottom: '1vh', display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <Grid.Column width={2}>
                                <Label circular size="massive" style={{background:'#34FFC8'}}>{this.state.currentQuestionID}</Label>
                            </Grid.Column>
                            <Grid.Column width={12}>
                                <Progress value={this.state.questionInArray} total={this.state.questionaireLenght} inverted size='tiny' style={{marginTop: '2vh'}}/>
                            </Grid.Column>
                            <Grid.Column width={2}/>
                        </Grid.Row>
                    </Grid>
                    <Segment style={{background: '#373737', height: '50vh', display: "flex", justifyContent: "center", alignItems: "center", marginTop: "3vh"}}>
                        <b style={{color: 'white', fontSize: '30px', lineHeight: '130%', padding: '10vh'}}>{this.state.currentQuestionText}</b>
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
