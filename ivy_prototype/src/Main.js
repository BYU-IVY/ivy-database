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

    state = { activeItem: 'home' }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state
        return (
            <div>
                <Router>
                    <div style={{display: "flex",
                    justifyContent: "center", padding: '10px'}}>
                        <Menu inverted pointing secondary>
                            <Link to="/home"><Menu.Item
                                name='Home'
                                active={activeItem === 'Home'}
                                onClick={this.handleItemClick}
                            /></Link>
                            <Link to="/application"><Menu.Item
                                name='Application'
                                active={activeItem === 'Application'}
                                onClick={this.handleItemClick}
                            /></Link>
                            <Link to="/frameworks"><Menu.Item
                                name='Frameworks'
                                active={activeItem === 'Frameworks'}
                                onClick={this.handleItemClick}
                            /></Link>
                             <Link to="/contribute"><Menu.Menu>
                                <Menu.Item
                                name='Contribute'
                                active={activeItem === 'Contribute'}
                                onClick={this.handleItemClick}
                                />
                            </Menu.Menu></Link>
                        </Menu>
                    </div>
                    <Switch>
                        <Route path="/home">
                            <Homepage />
                        </Route>
                        <Route path="/application">
                            <Application/>
                        </Route>
                        <Route path="/frameworks">
                            <Frameworks/>
                        </Route>
                        <Route path="/contribute">
                            <Contribute/>
                        </Route>
                    </Switch>
                </Router>
                <div style={{textAlign: 'center', padding: '20px', background: '#121212'}}>
                    <Grid columns={3}>
                        <Grid.Column>
                            <h5 style={{color: '#A7A7AD'}}>© 2020 Filevine.  All Rights Reserved.</h5>
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
