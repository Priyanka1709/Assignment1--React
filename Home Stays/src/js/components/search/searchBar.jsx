import React from 'react';
import PropTypes from 'prop-types';

const SearchBar= (props) => {
    return (
        <div>
            <input ref={props.inputRef} type='text' className='searchBar form-control' value={props.searchString}/>
            <button className='btn btn-info' onClick={props.searchHandler}>
                <span>Search</span> 
            </button>
            <button className='btn' onClick={props.clearHandler}>
                <span>Clear</span>
            </button>
        </div>
    );
}

export default SearchBar;