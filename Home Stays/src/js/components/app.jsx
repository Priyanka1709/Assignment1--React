import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import Header from './header/header';
import SearchBar from './search/searchBar';
import CardsPane from './cards/cardsPane';
import Details from './details/details';

const App= (props) => {
    return (
        <div>
            <Header/>
            <SearchBar searchString={props.searchString} searchHandler={props.searchHandler} clearHandler={props.clearHandler} inputRef={props.inputRef}/>
            <br/><br/>
            <CardsPane searchString={props.searchString}/>
        </div>
    );
};

export default App;
