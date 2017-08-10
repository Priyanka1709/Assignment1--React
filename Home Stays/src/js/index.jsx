import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './container/appContainer';
import Details from './components/details/details';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';

ReactDOM.render(
    <Router>
        <div className='app container'>
            <Route exact path="/" component={AppContainer}/>
            <Route exact path="/search/:string" component={(props) => <AppContainer searchString={props.match.params.string}/>}/>
            <Route exact path="/details/:id" component={(props) => <Details id={props.match.params.id}/>}/>
        </div>
    </Router>,
    document.getElementById('container')
);
