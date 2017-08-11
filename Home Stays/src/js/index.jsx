import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import HomeContainer from './container/homeContainer';
import DetailsContainer from './container/detailsContainer';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';

ReactDOM.render(
    <div className={'app container'}>
        <Header/>
        <div className={'pageBody'}>
            <Router>
                <Switch>
                    <Route exact path="/" component={HomeContainer}/>
                    <Route exact path="/search/:string" component={HomeContainer}/>
                    <Route exact path="/details/:id" component={DetailsContainer}/>
                </Switch>
            </Router>
        </div>
        <Footer/>
    </div>,
    document.getElementById('container')
);

