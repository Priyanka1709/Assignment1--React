import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './container/appContainer';
import Details from './components/details/details';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';

ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={AppContainer}/>
            <Route exact path="/search/:string" component={(props) => {
                return (
                    <AppContainer searchString={props.match.params.string}/>
                )
            }}/>
            <Route exact path="/details/:id" component={(props) => {
                return (
                    <Details id={props.match.params.id}/>               
                )
            }}/>
        </div>
    </Router>,
    document.getElementById('container')
);
