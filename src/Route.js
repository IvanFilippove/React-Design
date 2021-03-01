import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import {
    SignIn,
    SignUp,
    Landing,
    BrowseBy
} from './components'
import App from './components/AppWrapper/App'

export default class Routes extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isAuth: false
        };
        // if (localStorage.getItem('dt:auth:access')) {
        //     this.state.isAuth = true
        // }
        
    }

    render () {
        if (this.state.isAuth) {
            return (
                <Switch>
                    <Route path="/" component={Landing}/>
                </Switch>
            )
        } else {
            return (
                <Switch>
                    <Route path="/sign-in" component={SignIn}>
                    </Route>
                    <Route path="/sign-up" component={SignUp}>
                    </Route>
                    <Route path="/home" component={App}>
                    </Route>
                    <Route exact path="/" component={Landing}/>
                </Switch>
            )
        }
    }
}
