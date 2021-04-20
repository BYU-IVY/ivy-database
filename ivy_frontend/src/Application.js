import React, { Component} from 'react'
import { Button, Grid, Image, Icon, Modal, Header } from 'semantic-ui-react'
import SurveyQuestions from './SurveyQuestions'


export default class Application extends Component {
    constructor() {
        super();
        this.state = {
            surveyInProgress: false
        }
    }

    startApp = () => {
        this.setState({
            surveyInProgress: true
        })
    }

    stopApp = () => {
        this.setState({
            surveyInProgress: false
        })
    }
    

    render() {
        if(this.state.surveyInProgress) {
            return (
                <div>
                    <Button onClick={this.stopApp} size='big' floated='right' icon style={{background: '#373737', alignItems: 'right', marginTop: "4vh", marginRight: "4vh", position: 'relative', zIndex: '4'}}>
                        <Icon color='red' name='x' />
                    </Button>
                    <div style={{textAlign: 'center', padding: '8vh', background: '#121212', height: '100vh', marginTop:'-65px'}}>
                        <SurveyQuestions/>
                    </div>                
                </div>
            )
        } else {
            return (
                <div>
                    <div>
                        <Image src='logo_large.png' size='tiny' style={{position:'absolute', marginTop: '20px', marginLeft: '20px'}}/>
                        <b style={{color:'white', fontSize:'20px', position:'absolute', marginTop: '50px', marginLeft: '100px'}}>IT Security Matters</b>
                    </div>
                    <div style={{textAlign: 'center', padding: '20vh', backgroundImage: "url(/Images/AppPage/ComponentTMP_0-image2.jpg)", rel: "preload", backgroundPosition: "center", backgroundSize: "cover", marginTop:'-65px', height: '100vh'}}>
                        <h1 style={{color: 'white', fontSize: '50px'}}>Application</h1>
                        <h4 style={{color: 'white', fontSize: '20px', marginTop: '5vh'}}>
                        Below, the web application will ask you a series of questions to discern the specific needs of your business, then all of the relevant controls will be presented to you along with simplified definitions of the controls and the recommended "best practices" to implement them.
                        </h4>
                        <h4 style={{color: 'white', fontSize: '20px'}}>
                        If you're confused about how to use the web application, you can watch a video tutorial or download the PDF instructions below.
                        </h4>
                        
                        <Grid>
                            <Grid.Column width={3}/>
                                <Grid.Column width={10}>
                                    <Grid columns={2} style={{marginTop: '2vh'}}>
                                        <Grid.Column>
                                        <Modal style={{background: '#373737'}} size='large' closeIcon trigger={<Button circular positive size='large' style={{marginTop: '20px', background: '#373737', width: '160px'}}>Tutorial</Button>}>
                                            <div style={{padding: '8vh'}}>
                                            <Header style={{color: 'white', fontSize: '30px'}} content='Tutorial' />
                                            <Modal.Content>
                                                
                                                <p style={{color: 'white', fontSize: '20px'}}>
                                                • Click the “START APP” button below to boot the web application. <br/><br/>

                                                • Read each question and decide whether or not your business complies with the content being asked. <br/><br/>

                                                • If you do not understand the question, click the “MORE DETAILS” button to receive additional information about the content in the question. <br/><br/>

                                                • After an answer has been determined, click either “YES” or “NO” located at the bottom of the web application screen. <br/><br/>

                                                • Once the questionnaire is completed, the web application will offer a downloadable excel document. This document provides all recommended actions 
                                                your company needs to implement in order to be compliant with the cybersecurity frameworks determined by the web application. <br/><br/>

                                                • The excel document can be continuously updated until 100% compliance is achieved.
                                                </p>
                                            </Modal.Content>
                                            </div>
                                        </Modal>
                                        </Grid.Column>
                                        <Grid.Column>
                                            <Button circular size='large' style={{marginTop: '20px', background: '#51B4FF', width: '160px', color: '#212121'}}>Video Tutorial</Button>
                                        </Grid.Column>
                                    </Grid>
                                    <Button onClick={this.startApp} circular size='massive' style={{marginTop: '10vh', background: '#51B4FF', color: '#212121'}}>START APP</Button>
                                </Grid.Column>  
                            <Grid.Column width={3}/>    
                            
                        </Grid>
                    </div>

                    <div style={{textAlign: 'left', padding: '5vh', background: '#212121', backgroundPosition: "center", backgroundSize: "cover"}}>
                    <Grid columns={2} style={{marginTop: '30px'}}>
                        <Grid.Column>
                            <p style={{color: 'white', fontSize: '30px'}}> How it works </p>
                            <p style={{color: '#A7A7AD'}}>
                                This is the short video tutorial associated with the web application, helping those that don't quite understand how the program is meant to be interacted with.
                            </p>  
                        </Grid.Column>
                    
                        <Grid.Column>
                            <Image src='/Images/AppPage/Video_Thumbnail.png' size='large' centered /> 
                        </Grid.Column>
                    </Grid>
                    </div>
                </div>
            )
        }
    }
}
