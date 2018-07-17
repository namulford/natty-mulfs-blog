import React from 'react';
import { Router, Route } from 'react-router';
import Posts from './containers/Posts'
import App from './containers/App';
import AddPost from './containers/AddPost'
import Home from './containers/Home'

const Routes = (props) => (
    <Router {...props}>
        <Route path="/" component={ App }>
            <Route path="/home" component={ Home } />
            <Route path="/posts" component={ Posts }/>
            <Route path="/add-post" component={ AddPost }/>
        </Route>
    </Router>
);

export default Routes;