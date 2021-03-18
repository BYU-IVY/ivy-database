import React, { Component} from 'react'
import { Button, Grid, Image, Icon } from 'semantic-ui-react'
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
                    <Button onClick={this.stopApp} floated='right' size='big' icon style={{background: '#373737', marginTop: "4vh", marginRight: "4vh"}}>
                        <Icon color='red' name='x' />
                    </Button>
                    <div style={{textAlign: 'center', padding: '80px', background: '#121212', height: '100vh', marginTop:'-65px'}}>
                        <SurveyQuestions/>
                    </div>                
                </div>
            )
        } else {
            return (
                <div>
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
                                            <Button circular positive size='large' style={{marginTop: '20px', background: '#373737', width: '160px'}}>Tutorial</Button>
                                        </Grid.Column>
                                        <Grid.Column>
                                            <Button circular size='large' style={{marginTop: '20px', background: '#34ffc8', width: '160px'}}>Video Tutorial</Button>
                                        </Grid.Column>
                                    </Grid>
                                    <Button onClick={this.startApp} circular size='massive' style={{marginTop: '10vh', background: '#34ffc8'}}>START APP</Button>
                                </Grid.Column>  
                            <Grid.Column width={3}/>    
                            
                        </Grid>
                    </div>

                    <div style={{textAlign: 'left', padding: '5vh', background: '#212121', backgroundPosition: "center", backgroundSize: "cover"}}>
                    <Grid columns={2} style={{marginTop: '30px'}}>
                        <Grid.Column>
                            <p style={{color: 'white', fontSize: '30px'}}> How it works </p>
                            <p style={{color: '#A7A7AD'}}>
                                This will be a short text description of how to use the web application, along with other necessary details.
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
