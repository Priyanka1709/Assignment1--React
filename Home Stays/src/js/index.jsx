import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './container/appContainer';
import DetailsContainer from './container/detailsContainer';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';

ReactDOM.render(
    <Router>
        <div className={'app container'}>
            <Route exact path="/" component={AppContainer}/>
            <Route exact path="/search/:string" component={AppContainer}/>
            <Route exact path="/details/:id" component={DetailsContainer}/>
        </div>
    </Router>,
    document.getElementById('container')
);

