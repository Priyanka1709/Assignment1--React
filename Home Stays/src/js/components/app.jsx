import React from 'react';
import PropTypes from 'prop-types';

import Header from './header/header';
import SearchBar from './search/searchBar';
import CardsPane from './cards/cardsPane';

const App = (props) => (
    <div>
        <Header/>
        <SearchBar searchString={props.searchString} onSearch={props.onSearch} onClear={props.onClear} inputRef={props.inputRef}/>
        <br/><br/>
        <CardsPane searchString={props.searchString}/>
    </div>
);

App.propTypes = {
    searchString: PropTypes.string,
    onSearch: PropTypes.func.isRequired,
    onClear: PropTypes.func.isRequired,
    inputRef: PropTypes.func.isRequired,
};

App.defaultProps = {
    searchString: '',
};

export default App;
