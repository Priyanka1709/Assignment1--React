import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = (props) => (
    <div>
        <input ref={props.inputRef} type={'text'} className={'searchBar form-control'} defaultValue={props.searchString}/>
        <button className={'btn btn-info'} onClick={props.onSearch}>
            <span>Search</span>
        </button>
        <button className={'btn'} onClick={props.onClear}>
            <span>Clear</span>
        </button>
    </div>
);

SearchBar.propTypes = {
    searchString: PropTypes.string,
    onSearch: PropTypes.func.isRequired,
    onClear: PropTypes.func.isRequired,
    inputRef: PropTypes.func.isRequired,
};

SearchBar.defaultProps = {
    searchString: '',
};

export default SearchBar;
