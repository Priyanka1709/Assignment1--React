import React from 'react';
import PropTypes from 'prop-types';

import Header from './header/header';
import SearchBar from './search/searchBar';
import CardsPane from './cards/cardsPane';

const App= (props) => {
    return (
        <div className='app container'>
            <Header/>
           <SearchBar />
           <br/><br/>
           <CardsPane />
        </div>
    );
};

export default App;
