import React from 'react';
import PropTypes from 'prop-types';
import { getCardDetails, getImage } from '../../common/apiHelper';
import Edit from './edit';

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
        this.setState({
            editMode: false
        })
    }

    editCancelHandler(){
        this.setState({
            editMode: false
        })
    }

    render(){
        return (
            <div className="details">
                {!this.state.details? <h3>{`Loading...`}</h3>:
                                <div>
                                    <img className="image" src= {getImage(this.state.details.image)}/>
                                    {this.state.editMode?
                                        <Edit name= {this.state.details.name} nameRef={el => this.nameInputElement = el} location={this.state.details.location} locationRef={el => this.locationInputElement = el} avgPrice={this.state.details.avgPrice} avgPriceRef={el => this.avgPriceInputElement = el} offer={this.state.details.offer} offerRef={el => this.offerInputElement = el} saveHandler={this.editSaveHandler} cancelHandler={this.editCancelHandler}/>
                                        :
                                        <div className="data">
                                            <h1>{this.state.details.name}</h1>
                                            <h6>Weekend breaks | Affordable prices</h6>
                                            <p>
                                                <b>Location: </b>
                                                {this.state.details.location}
                                            </p>
                                            <p>
                                                <b>Average Price: </b>
                                                {this.state.details.avgPrice}
                                            </p>
                                            <p className="offers">
                                                {this.state.details.offer}
                                            </p>
                                            <button type="button" className="btn btn-primary" onClick={this.editHandler}>Edit</button>
                                            <button type="button" className="btn btn-default" onClick={this.backHandler}>Back to Home</button>
                                        </div>
                                    }
                                    
                                </div>
                            
                }      
            </div>
        );
    }
}

export default Details;