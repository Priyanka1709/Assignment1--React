import React from 'react';
import PropTypes from 'prop-types';
import { getCardDetails, getImage } from '../../common/apiHelper';
import Edit from './editData';
import HotelData from './hotelData';
import { postCardDetails } from '../../common/apiHelper';

class Details extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            details: null,
            editMode: false
        }
        this.editHandler= this.editHandler.bind(this);
        this.backHandler= this.backHandler.bind(this);
        this.editCancelHandler= this.editCancelHandler.bind(this);
        this.editSaveHandler= this.editSaveHandler.bind(this);
        this.editClearHandler= this.editClearHandler.bind(this);
    }
    componentDidMount(){
        getCardDetails(this.props.id)
        .then((value) => this.setState({
            details: value
        }));
    }

    editHandler(){
        this.setState({
            editMode: true
        })
    }

    backHandler(){
          window.location.href = `/`;
    }

    editSaveHandler(){
        let name= this.nameInputElement.value;
        let location= this.locationInputElement.value;
        let avgPrice= this.avgPriceInputElement.value;
        let offer= this.offerInputElement.value;

        postCardDetails(this.props.id, {name, location, avgPrice, offer})
        .then(result => {
            this.setState({
                editMode: false
            })
            return getCardDetails(this.props.id)
        })
        .then((value) => this.setState({
            details: value
        }));
        
    }

    editClearHandler(){
        this.nameInputElement.value= '';
        this.locationInputElement.value= '';
        this.avgPriceInputElement.value= '';
        this.offerInputElement.value= '';
    }

    editCancelHandler(){
        this.setState({
            editMode: false
        })
    }

    render(){
        return (
            <div className="details">
                {!this.state.details? 
                    <h3>{`Loading...`}</h3>
                    :
                     this.state.editMode?
                        <Edit name= {this.state.details.name} nameRef={el => this.nameInputElement = el} location={this.state.details.location} locationRef={el => this.locationInputElement = el} avgPrice={this.state.details.avgPrice} avgPriceRef={el => this.avgPriceInputElement = el} offer={this.state.details.offer} offerRef={el => this.offerInputElement = el} saveHandler={this.editSaveHandler} clearHandler={this.editClearHandler} cancelHandler={this.editCancelHandler} />
                        :
                        <HotelData getImage={getImage} image={this.state.details.image} name={this.state.details.name} location={this.state.details.location} avgPrice={this.state.details.avgPrice} offer={this.state.details.offer} editHandler={this.editHandler} backHandler={this.backHandler} />
                     
                }      
            </div>
        );
    }
}

Details.propTypes= {
    id: PropTypes.string.isRequired,
}

export default Details;