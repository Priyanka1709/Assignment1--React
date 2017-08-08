import React from 'react';
import PropTypes from 'prop-types';

const searchBar= (props) => {
    return (
        <div>
            <input type='text' className='searchBar form-control'/>
            <button className='btn btn-info'>
                <span>Search</span> 
            </button>
            <button className='btn'>
                <span>Clear</span>
            </button>
        </div>
    );
}

export default searchBar;