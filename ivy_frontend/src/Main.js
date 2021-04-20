import React, { Component } from 'react'
import { Menu, Segment, Grid} from 'semantic-ui-react'
import Homepage from './Homepage'
import Application from './Application'
import Frameworks from './Frameworks'
import Contribute from './Contribute'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default class Main extends Component {

    state = { activeItem: 'Home' }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    
    setActiveItem = (name) => {
        var activeItem = this.state.activeItem
        if (activeItem != name) {
            this.setState ({
                activeItem: name
            })
        }
    }

    render() {
        const { activeItem } = this.state
       
        return (
            <div style={{backgroundColor: 'black'}}>
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <div style={{display: "flex",
                            justifyContent: "center", padding: '10px'}}>
                                <Menu inverted pointing secondary style={{position: 'relative', zIndex: '4'}}>
                                    <Link to="/"><Menu.Item
                                        name='Home'
                                        active={true}
                                        onClick={this.handleItemClick}
                                    /></Link>
                                    <Link to="/application"><Menu.Item
                                        name='Application'
                                        active={false}
                                        onClick={this.handleItemClick}
                                    /></Link>
                                    <Link to="/frameworks"><Menu.Item
                                        name='Frameworks'
                                        active={false}
                                        onClick={this.handleItemClick}
                                    /></Link>
                                    <Link to="/contribute"><Menu.Menu>
                                        <Menu.Item
                                        name='Contribute'
                                        active={false}
                                        onClick={this.handleItemClick}
                                        />
                                    </Menu.Menu></Link>
                                </Menu>
                            </div>
                            <Homepage />
                        </Route>
                        <Route path="/application">
                        <div style={{display: "flex",
                        justifyContent: "center", padding: '10px'}}>
                            <Menu inverted pointing secondary style={{position: 'relative', zIndex: '4'}}>
                                <Link to="/"><Menu.Item
                                    name='Home'
                                    active={false}
                                    onClick={this.handleItemClick}
                                /></Link>
                                <Link to="/application"><Menu.Item
                                    name='Application'
                                    active={true}
                                    onClick={this.handleItemClick}
                                /></Link>
                                <Link to="/frameworks"><Menu.Item
                                    name='Frameworks'
                                    active={false}
                                    onClick={this.handleItemClick}
                                /></Link>
                                <Link to="/contribute"><Menu.Menu>
                                    <Menu.Item
                                    name='Contribute'
                                    active={false}
                                    onClick={this.handleItemClick}
                                    />
                                </Menu.Menu></Link>
                            </Menu>
                        </div>
                        <Application/>
                            
                        </Route>
                        <Route path="/frameworks">
                            <div style={{display: "flex",
                            justifyContent: "center", padding: '10px'}}>
                                <Menu inverted pointing secondary style={{position: 'relative', zIndex: '4'}}>
                                    <Link to="/"><Menu.Item
                                        name='Home'
                                        active={false}
                                        onClick={this.handleItemClick}
                                    /></Link>
                                    <Link to="/application"><Menu.Item
                                        name='Application'
                                        active={false}
                                        onClick={this.handleItemClick}
                                    /></Link>
                                    <Link to="/frameworks"><Menu.Item
                                        name='Frameworks'
                                        active={true}
                                        onClick={this.handleItemClick}
                                    /></Link>
                                    <Link to="/contribute"><Menu.Menu>
                                        <Menu.Item
                                        name='Contribute'
                                        active={false}
                                        onClick={this.handleItemClick}
                                        />
                                    </Menu.Menu></Link>
                                </Menu>
                            </div>
                            <Frameworks/>
                        </Route>
                        <Route path="/contribute">
                            <div style={{display: "flex",
                            justifyContent: "center", padding: '10px'}}>
                                <Menu inverted pointing secondary style={{position: 'relative', zIndex: '4'}}>
                                    <Link to="/"><Menu.Item
                                        name='Home'
                                        active={false}
                                        onClick={this.handleItemClick}
                                    /></Link>
                                    <Link to="/application"><Menu.Item
                                        name='Application'
                                        active={false}
                                        onClick={this.handleItemClick}
                                    /></Link>
                                    <Link to="/frameworks"><Menu.Item
                                        name='Frameworks'
                                        active={false}
                                        onClick={this.handleItemClick}
                                    /></Link>
                                    <Link to="/contribute"><Menu.Menu>
                                        <Menu.Item
                                        name='Contribute'
                                        active={true}
                                        onClick={this.handleItemClick}
                                        />
                                    </Menu.Menu></Link>
                                </Menu>
                            </div>
                            <Contribute/>
                        </Route>
                    </Switch>
                </Router>
                <div style={{textAlign: 'center', padding: '20px', background: '#121212'}}>
                    <Grid columns={3}>
                        <Grid.Column>
                            <h5 style={{color: '#A7A7AD'}}>© 2021 IT Security Matters.  All Rights Reserved.</h5>
                        </Grid.Column>
                        <Grid.Column>
                            <h5 style={{color: '#A7A7AD'}}>Privacy Policy</h5>
                        </Grid.Column>
                        <Grid.Column>
                            <h5 style={{color: '#A7A7AD'}}>Terms of Service</h5>
                        </Grid.Column>
                    </Grid>
                </div>
            </div>
        )
    }
}
