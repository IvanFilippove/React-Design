import React from 'react'
import { Container } from 'react-bootstrap'
import { Route, Redirect ,Switch, Router } from 'react-router-dom'

import { Home, About, Contact,
        BookView,
        BrowseBy,
        BrowseSearch,
        BrowseTopic,
        SearchedItem,
        ExploreSeries,
        SermonItem
        } from "../index";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuth: true,
            activePath: ''
        };
        // if (localStorage.getItem('dt:auth:access')) {
        //     this.state.isAuth = true
        // }
    }

    setActivePath = (activePath) => {
        this.setState({activePath})
    };

    render () {
        const {isAuth} = this.state;
        // if (isAuth) {
        //     return (
        //         <Switch>
        //             <Route path="/" component={Home}/>
        //         </Switch>
        //     )
        // } else {
            return (
                <Switch>
                    <Route  path="/home/about" component={About}>
                    </Route>
                    <Route  path="/home/contact" component={Contact}>
                    </Route>
                    <Route  path="/home/bookview" component={BookView}>
                    </Route>
                    <Route  path="/home/browseby" component={BrowseBy}>
                    </Route>
                    <Route  path="/home/browsesearch" component={BrowseSearch}>
                    </Route>
                    <Route  path="/home/exploreseries" component={ExploreSeries}>
                    </Route>
                    <Route  path="/home/browsetopic" component={BrowseTopic}>
                    </Route>
                    <Route  path="/home/searcheditem" component={SearchedItem}>
                    </Route>
                    <Route  path="/home/sermonitem" component={SermonItem}>
                    </Route>
                    <Route exact path="/home" component={Home}/>
                </Switch>
            )
        // }
    }

    
}