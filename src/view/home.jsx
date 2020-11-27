import React from 'react';
import NavBar from './nav';
import SignIn from './signin';
import SignUp from './signup';
import AllBlogs from './allBlogs';
import ViewBlog from './viewBlog';
import ShowBlog from './showBlog';
import { getMe } from '../dao/dao';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

export default function Home() {
    return (
        <Router>
            <NavBar />
            <button onClick={getMe}>Show Me</button>
            <Switch>
                <Route exact path = {'/signin'}>
                    <SignIn />
                </Route>
                <Route exact path = {'/signup'}>
                    <SignUp />
                </Route>
                <Route exact path = {'/allblogs'}>
                    <AllBlogs />
                </Route>
                <Route exact path = {'/viewblog'}>
                    <ViewBlog />
                </Route>
                <Route exact path = {'/showblog/:id'}>
                    <ShowBlog />
                </Route>
                <AllBlogs />
            </Switch>
        </Router>
    )
} 