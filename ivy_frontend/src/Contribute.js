import React, { Component } from 'react'
import { Button, Grid, Image } from 'semantic-ui-react'

export default class Contribute extends Component {
    render() {
        return (
            <div>
                <div>
                    <Image src='logo_large.png' size='tiny' style={{position:'absolute', marginTop: '20px', marginLeft: '20px'}}/>
                    <b style={{color:'white', fontSize:'20px', position:'absolute', marginTop: '50px', marginLeft: '100px'}}>IT Security Matters</b>
                </div>
                <div style={{textAlign: 'center', padding: '160px', backgroundImage: "url(/Images/ContributePage/ComponentTMP_0-image10.jpg)", rel: "preload", backgroundPosition: "center", backgroundSize: "cover", marginTop:'-65px', height: '100vh'}}>
                    <h1 style={{color: 'white', fontSize: '50px', marginTop: '100px'}}> Contribute</h1>
                    <h4 style={{color: 'white', fontSize: '20px'}}>
                    The Security Matters Assessment or "Project IVY" is a completely open-source web application. The entire repository for this project is available for cloning and tweaking on GitHub. We need your help to keep this web application running smooth and updated with the latest and most relevant Cybersecurity Frameworks possible.
                    </h4>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/BYU-IVY/ivy-database"><Button  circular size='large' style={{marginTop: '20px', background: '#51B4FF', color: '#212121'}}>GitHub</Button></a>
                    
                </div>
                <div style={{textAlign: 'left', padding: '80px', background: '#212121'}}>
                    <Grid columns={2} style={{marginTop: '30px'}}>
                        <Grid.Column>
                            <p style={{color: 'white', fontSize: '30px'}}> Our Mission </p>
                            <p style={{color: '#A7A7AD', fontSize: '15px'}}>
                                Provide a web application enabling small businesses to comply with security frameworks relevant to their industry. We also want to help educate those who have little to no experience with Cybersecurity, by providing simplified definitions to the frameworks used in our web application.
                            </p>  
                        </Grid.Column>
                    
                        <Grid.Column>
                            <Image src='/Images/ContributePage/OurMission.png' size='large' centered /> 
                        </Grid.Column>
                    </Grid>
                </div>

                <div style={{textAlign: 'center', padding: '80px', background: '#121212'}}>
                    <h1 style={{color: '#EEEEEE', fontSize: '50px'}}>Original Team</h1>
                    <p style={{color: '#EEEEEE'}}>
                        Project IVY was originally created by the following individuals.
                    </p>

                    <Grid>
                        <Grid.Row style={{marginTop: '30px'}}>
                            <Grid.Column width={4}>
                                <Image src='/Images/ContributePage/dean.png' size='small' centered circular/>
                                <h4 style={{color: 'white'}}>Dean Sapp</h4>
                                <p style={{color: '#A7A7AD'}}>Sponsor</p>
                            </Grid.Column>
                            <Grid.Column width={4}>
                                <Image src='/Images/ContributePage/tom.png' size='small' centered circular/>
                                <h4 style={{color: 'white'}}>Tom Creighton</h4>
                                <p style={{color: '#A7A7AD'}}> Coach</p>
                            </Grid.Column>
                            <Grid.Column width={4}>
                                <Image src='/Images/ContributePage/lauren.png' size='small' centered circular/>
                                <h4 style={{color: 'white'}}>Lauren Gines</h4>
                                <p style={{color: '#A7A7AD'}}>Project Manager, <br/> Database Engineer</p>
                            </Grid.Column>
                            <Grid.Column width={4}>
                                <Image src='/Images/ContributePage/paul.png' size='small' centered circular/>
                                <h4 style={{color: 'white'}}>Paul Kim</h4>
                                <p style={{color: '#A7A7AD'}}>Database Engineer, <br/> Sponsor Liaison</p>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row style={{marginTop: '30px'}}>
                            <Grid.Column width={2}/>
                            <Grid.Column width={4}>
                                <Image src='/Images/ContributePage/nick.png' size='small' centered circular/>
                                <h4 style={{color: 'white'}}>Nicklas Nielsen</h4>
                                <p style={{color: '#A7A7AD'}}>Front End Developer, <br/> API Developer</p>
                            </Grid.Column>
                            <Grid.Column width={4}>
                                <Image src='/Images/ContributePage/tyler.png' size='small' centered circular/>
                                <h4 style={{color: 'white'}}>Tyler Call</h4>
                                <p style={{color: '#A7A7AD'}}>Chief Architect, <br/> API Developer</p>
                            </Grid.Column>
                            <Grid.Column width={4}>
                                <Image src='/Images/ContributePage/eli.png' size='small' centered circular/>
                                <h4 style={{color: 'white'}}>Elias Sims</h4>
                                <p style={{color: '#A7A7AD'}}>Front End Developer, <br/> Database Engineer</p>
                            </Grid.Column>
                            <Grid.Column width={2}/>
                        </Grid.Row>
                    </Grid>
                    
                </div>

                <div style={{textAlign: 'center', padding: '20px', backgroundImage: "url(/Images/HomePage/ComponentTMP_0-image.jpg)", backgroundPosition: "center", backgroundSize: "cover"}}>
                <Grid columns={3} style={{marginTop: '30px'}}>
                    <Grid.Column/>
                   
                    <Grid.Column style={{marginTop: "100px", marginBottom: "100px"}}>
                    <h2 style={{color: 'white', fontSize: '30px'}}> Project Video Spotlight </h2>
                    <h4 style={{color: 'white'}}>
                    This video highlights the importance of this project, and how it solves the key issues involved with small businesses and their cybersecurity compliance.
                    </h4>  
                    <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=u9BwZTCP8rA"><Button circular icon='play circle outline' size='big' style={{marginTop: '20px', background: '#51B4FF'}}/></a>  
                    </Grid.Column>
                            
                    
                    <Grid.Column/>
                </Grid>
                </div>
            </div>
        )
    }
}
