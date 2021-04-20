import React, { Component } from 'react'
import { Button, Grid, Image } from 'semantic-ui-react'
import { Link } from "react-router-dom";

export default class Homepage extends Component {

    render() {
        return (
            <div>
                <div>
                    <Image src='logo_large.png' size='tiny' style={{position:'absolute', marginTop: '20px', marginLeft: '20px'}}/>
                    <b style={{color:'white', fontSize:'20px', position:'absolute', marginTop: '50px', marginLeft: '100px'}}>IT Security Matters</b>
                </div>
                <div style={{textAlign: 'center', padding: '20vh', backgroundImage: "url(/Images/HomePage/ComponentTMP_0-image5.jpg)", rel: "preload", backgroundPosition: "center", backgroundSize: "cover", marginTop:'-65px', height: '100vh'}}>
                    <h1 style={{color: 'white', fontSize: '50px', marginTop: '100px'}}> Cybersecurity Compliance <br/> Web Application</h1>
                    <h4 style={{color: 'white', fontSize: '20px'}}>
                    Our open-source web application identifies key areas your business needs to employ controls (defensive practices, policies, software, and hardware) 
                    based on specific and relevant security frameworks in our database. We've simplified the complex world of cybersecurity, so you don't have to.
                    </h4>
                
                    <Link to="/application">
                        <Button circular size='large' style={{marginTop: '20px', background: '#51B4FF', color: '#212121'}}>Get Started</Button>
                    </Link>
                        
                </div>
                <div style={{textAlign: 'center', padding: '80px', background: '#212121'}}>
                    <h2 style={{color: 'white', fontSize: '30px'}}>Current Frameworks</h2>
                    <Grid columns={3} style={{marginTop: '30px'}}>
                        <Grid.Row>
                        <Grid.Column>
                            <Image src='/Images/HomePage/CIS_Thumbnail.png' size='medium' centered />
                            <h4 style={{color: 'white'}}>CIS 20</h4>
                            <h5 style={{color: '#A7A7AD'}}>CIS 20 is a Cybersecurity Framework that deals with general business "best practices" which acts as a great foundation for any company.</h5>
                        </Grid.Column>
                        <Grid.Column>
                            <Image src='/Images/HomePage/HIPAA_Thumbnail.png' size='medium' centered />
                            <h4 style={{color: 'white'}}>HIPAA</h4>
                            <h5 style={{color: '#A7A7AD'}}>HIPAA is a Framework that deals with businesses who record and handle client health data and information.</h5>
                        </Grid.Column>
                        <Grid.Column>
                            <Image src='/Images/HomePage/PCI_Thumbnail.png' size='medium' centered />
                            <h4 style={{color: 'white'}}>PCI DSS</h4>
                            <h5 style={{color: '#A7A7AD'}}>PCI DSS is a Cybersecurity Framework that deals primarily with businesses who handle of credit card transactions and information.</h5>
                        </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <Link to="/frameworks#CIS20">
                                    <Button circular style={{marginTop: '20px', background: '#51B4FF'}}>Learn More</Button>
                                </Link>
                            </Grid.Column>
                            <Grid.Column>
                                <Link to="/frameworks#HIPAA">
                                    <Button circular style={{marginTop: '20px', background: '#51B4FF'}}>Learn More</Button>
                                </Link>                            
                            </Grid.Column>
                            <Grid.Column>
                                <Link to="/frameworks">
                                    <Button circular style={{marginTop: '20px', background: '#51B4FF'}}>Learn More</Button>
                                </Link>                            
                            </Grid.Column>
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
