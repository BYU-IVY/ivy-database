import React, { Component } from 'react'
import { Button, Grid, Image } from 'semantic-ui-react'
import { Link } from "react-router-dom";

export default class Frameworks extends Component {
    render() {
        return (
            <div>
                <div>
                    <Image src='logo_large.png' size='tiny' style={{position:'absolute', marginTop: '20px', marginLeft: '20px'}}/>
                    <b style={{color:'white', fontSize:'20px', position:'absolute', marginTop: '50px', marginLeft: '100px'}}>IT Security Matters</b>
                </div>
                <div style={{textAlign: 'center', padding: '160px', backgroundImage: "url(/Images/AppPage/ComponentTMP_0-image2.jpg)", rel: "preload", backgroundPosition: "center", backgroundSize: "cover", marginTop:'-65px', height: '100vh'}}>
                    <h1 style={{color: 'white', fontSize: '50px', marginTop: '100px'}}>Frameworks</h1>
                    <h4 style={{color: 'white', fontSize: '20px'}}>
                    For your convenience, we have provided a simplified overview for each of the cybersecurity frameworks our web application utilizes. A cybersecurity framework is a series of documents defining the best practices an organization follows to manage its cybersecurity risk.  When applied properly, cybersecurity frameworks enable IT security leaders to manage their companies’ cyber risks more intelligently. 
                    </h4>
                   
                    
                    <Grid columns={3} style={{padding: '30px'}}>
                        <Grid.Column>
                        <a href='#CIS20'>
                            <Button circular positive size='huge' style={{marginTop: '20px', background: '#373737', width: '160px'}}>CIS 20</Button>
                        </a>
                        </Grid.Column>
                        <Grid.Column>
                        <a href='#HIPAA'>
                            <Button circular positive size='huge' style={{marginTop: '20px', background: '#373737', width: '160px'}}>HIPAA</Button>
                        </a>
                        </Grid.Column>
                        <Grid.Column>
                        <a href='#PCI'>
                            <Button circular positive size='huge' style={{marginTop: '20px', background: '#373737', width: '160px'}}>PCI DSS</Button>
                        </a>  
                        </Grid.Column>
                    </Grid>
                </div>
                <a name="A"></a>
                <div id='CIS20' style={{textAlign: 'center', padding: '160px', background: '#121212'}}>
                    <h1 style={{color: '#EEEEEE', fontSize: '50px', marginTop: '-70px'}}>CIS 20</h1>
                    <p style={{color: '#EEEEEE', fontSize: '20px'}}>
                    Center for Internet Security 20 (CIS 20)  is a prioritized set of best practices created to stop the most pervasive and dangerous threats of today. The frameworks set forth by CIS affect everybody from people to organizations and governments, and is done in an effort to create safe, reliable standards of protection for IT systems and data from cyber threats. The CIS Controls make a strong foundation for a newly maturing cybersecurity program. 
                    </p>
                    <Image src='/Images/Frameworks/cis_controls_frameworks.png' size='huge' centered style={{marginTop: '50px'}}/> 
                </div>

                <div id='HIPAA' style={{textAlign: 'center', padding: '160px', background: '#212121'}}>
                    <h1 style={{color: '#EEEEEE', fontSize: '50px', marginTop: '-70px'}}>HIPAA</h1>
                    <p style={{color: '#EEEEEE', fontSize: '20px'}}>
                    The Health Insurance Portability and Accountability Act (HIPAA) sets the standard for sensitive patient data protection. Companies that deal with protected health information (PHI) must have a physical, network, and process security measures in place and follow them to ensure HIPAA Compliance.
                    </p>
                    <p style={{color: '#EEEEEE', fontSize: '20px'}}>
                    Covered entities (anyone providing treatment, payment, and operations in healthcare) and business associates (anyone who has access to patient information and provides support in treatment, payment, or operations) must meet HIPAA Compliance.
                    </p>
                    <Image src='/Images/Frameworks/hipaa_controls_frameworks.png' size='huge' centered style={{marginTop: '50px'}}/> 
                    <div style={{textAlign: 'left', marginTop: '30px'}}>
                        <h4 style={{color: '#EEEEEE', fontSize: '20px'}}>
                            General rules
                        </h4>
                        <p style={{color: '#EEEEEE', fontSize: '20px'}}>
                            The Security Rule requires covered entities to maintain reasonable and appropriate administrative, technical, and physical safeguards for protecting e-PHI.
                        </p>
                        <p style={{color: '#EEEEEE', fontSize: '20px'}}>
                            Specifically, covered entities must: <br/>
                                • Ensure the confidentiality, integrity, and availability of all e-PHI they create, receive, maintain or transmit; <br/>
                                • Identify and protect against reasonably anticipated threats to the security or integrity of the information; <br/>
                                • Protect against reasonably anticipated, impermissible uses or disclosures; and <br/>
                                • Ensure compliance with their workforce.
                        </p>
                    </div>
                </div>

                <div id='PCI' style={{textAlign: 'center', padding: '160px', background: '#121212'}}>
                    <h1 style={{color: '#EEEEEE', fontSize: '50px', marginTop: '-70px'}}>PCI DSS</h1>
                    <p style={{color: '#EEEEEE', fontSize: '20px'}}>
                        The PCI DSS is an information security standard created to enhance cardholder data security for organizations that store and process credit card data.
                    </p>
                    <Image src='/Images/Frameworks/pci_controls_frameworks.png' size='huge' centered style={{marginTop: '50px'}}/> 
                    <div style={{textAlign: 'left', marginTop: '30px'}}>
                        <p style={{color: '#EEEEEE', fontSize: '20px'}}>
                        Merchant-based vulnerabilities may appear almost anywhere in the card-processing ecosystem including: <br/>
                            • point-of-sale devices; <br/>
                            • mobile devices, personal computers  or servers; <br/>
                            • wireless hotspots; <br/>
                            • web shopping applications; <br/>
                            • paper-based storage systems; <br/>
                            • the transmission of cardholder data to service providers; <br/>
                            • in remote access connections.
                        </p>
                        <p style={{color: '#EEEEEE', fontSize: '20px'}}>
                            Assess — identifying all locations of cardholder data, taking an inventory of your IT assets and business processes for payment card processing, and analyzing them for vulnerabilities that could expose cardholder data. 
                        </p>
                        <p style={{color: '#EEEEEE', fontSize: '20px'}}>
                            Repair — fixing identified vulnerabilities, securely removing any unnecessary cardholder data storage, and implementing secure business processes. 
                        </p>
                        <p style={{color: '#EEEEEE', fontSize: '20px'}}>
                            Report — documenting assessment and remediation details, and submitting compliance reports to the acquiring bank and card brands you do business with (or other requesting entity if you’re a service provider)
                        </p>
                    </div>
                </div>

                <div style={{textAlign: 'center', padding: '20px', backgroundImage: "url(/Images/Frameworks/ComponentTMP_0-image5.jpg)", backgroundPosition: "center", backgroundSize: "cover"}}>
                <Grid columns={3} style={{marginTop: '30px'}}>
                    <Grid.Column/>
                   
                    <Grid.Column style={{marginTop: "100px", marginBottom: "100px"}}>
                    <h2 style={{color: 'white', fontSize: '30px'}}> Project Video Spotlight </h2>
                    <h4 style={{color: 'white', fontSize: '20px'}}>
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
