import React from 'react';
import PropTypes from 'prop-types';
import { getImage } from '../../common/apiHelper';

const Card= (props) => {
    return (
        <div className='cardBlock' id={props.item.id}>
            <a href={`/details/${props.item.id}`}>
                <img src={getImage(props.item.image)} className='cardImg'/>
                <div className='cardName'>
                    {props.item.name}
                </div>
            </a>
        </div>
    );
}

export default Card;
