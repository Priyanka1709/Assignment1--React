import React from 'react';
import PropTypes from 'prop-types';

const SearchBar= (props) => {
    return (
        <div>
            <input ref={props.inputRef} type='text' className='searchBar form-control' defaultValue={props.searchString}/>
            <button className='btn btn-info' onClick={props.searchHandler}>
                <span>Search</span> 
            </button>
            <button className='btn'>
                <span>Clear</span>
            </button>
        </div>
    );
}

export default SearchBar;