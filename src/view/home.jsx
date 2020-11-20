import React from 'react';
import NavBar from './nav';
import SignIn from './signin';
import SignUp from './signup';
import Blogs from './blogs';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

export default function Home() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route exact path = {'/signin'}>
                    <SignIn />
                </Route>
                <Route exact path = {'/signup'}>
                    <SignUp />
                </Route>
                <Route exact path = {'/allblogs'}>
                    <Blogs />
                </Route>
                <Blogs />
            </Switch>
        </Router>
    )
} 