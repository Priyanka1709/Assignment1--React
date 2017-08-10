import React from 'react';
import PropTypes from 'prop-types';

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

App.propTypes= {
    searchString: PropTypes.string,
    searchHandler: PropTypes.func.isRequired,
    clearHandler: PropTypes.func.isRequired,
    inputRef: PropTypes.func.isRequired
}

App.defaultProps= {
    searchString: ""
}

export default App;
