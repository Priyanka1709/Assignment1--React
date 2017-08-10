import React from 'react';
import PropTypes from 'prop-types';

const HotelData = (props) => {
    return (
        <div>
            <img className="image" src= {props.getImage(props.image)}/>
            <div className="data">
                <h1>{props.name}</h1>
                <h6>Weekend breaks | Affordable prices</h6>
                <p>
                    <b>Location: </b>
                    {props.location}
                </p>
                <p>
                    <b>Average Price: </b>
                    {props.avgPrice}
                </p>
                <p className="offers">
                    {props.offer}
                </p>
                <button type="button" className="btn btn-primary" onClick={props.editHandler}>Edit</button>
                <button type="button" className="btn btn-default" onClick={props.backHandler}>Back to Home</button>
            </div>
        </div>
    );
}

HotelData.propTypes= {
    editHandler: PropTypes.func.isRequired,
    backHandler: PropTypes.func.isRequired,
    getImage: PropTypes.func.isRequired,
    image: PropTypes.string,
    name: PropTypes.string,
    location: PropTypes.string,
    avgPrice: PropTypes.string,
    offer: PropTypes.string,
}

HotelData.defaultProps= {
    image: "",
    name: "",
    location: "",
    avgPrice: "",
    offer: "",
}

export default HotelData;