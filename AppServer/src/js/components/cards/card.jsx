import React from 'react';
import PropTypes from 'prop-types';

const Card= (props) => {
    return (
        <span className="" index={props.index}>
            {props.name}
        </span>
    );
}

export default CardsPane;