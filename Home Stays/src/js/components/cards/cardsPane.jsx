import React from 'react';
import PropTypes from 'prop-types';
import { getAllCards } from '../../common/apiHelper';
import Card from './card';
import _ from 'lodash';

class CardsPane extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: null,
        };
    }
    componentDidMount() {
        getAllCards()
            .then((value) => this.setState({
                cards: value,
            }));
    }
    render() {
        return (
            <div className="cardsPane">
                {this.state.cards ? _.map(this.state.cards, (value, index) => {
                    if (this.props.searchString && value.name.toLowerCase().indexOf(this.props.searchString.toLowerCase()) > -1) {
                        return <Card key={index} item={value}/>;
                    } else if (!this.props.searchString) {
                        return <Card key={index} item={value}/>;
                    }
                }) : <h3>{'Loading...'}</h3>
                }
            </div>
        );
    }
}

CardsPane.propTypes = {
    searchString: PropTypes.string,
};

CardsPane.defaultProps = {
    searchString: '',
};

export default CardsPane;
