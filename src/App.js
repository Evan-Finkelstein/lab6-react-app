import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import List from './List.js'
import Create from './Create.js'
import './App.css';
export default class App extends Component {
    render() {
        return (
            <div>
                <Router>

                    <Switch>
                        <Route
                            path="/"
                            exact
                            render={(routerProps) => <List {...routerProps} />}
                        />
                        <Route
                            path="/create"
                            exact
                            render={(routerProps) => <Create {...routerProps} />}
                        />



                    </Switch>

                </Router>
            </div>
        )
    }
}