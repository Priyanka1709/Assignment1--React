import React from 'react';
import PropTypes from 'prop-types';
import { getAllCards } from '../../common/apiHelper';
import _ from 'lodash';

class CardsPane extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            cards: []
        }
    }
    componentDidMount(){
        getAllCards()
        .then((value) => this.setState({
            cards: value
        }));
    }
    render(){
        return (
            <div className="panel panel-default">
                <div className="panel-body">
                    {_.map(this.state.cards, (value, index)=> {
                        return <span>{value.name}</span>
                    })}
                </div>
            </div>
        );
    }
};

export default CardsPane;
