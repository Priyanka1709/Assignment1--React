import React from 'react';
import App from '../components/app';

class AppContainer extends React.Component{
    constructor(props){
        super(props);
        this.searchHandler= this.searchHandler.bind(this);
    }
    searchHandler(){
        window.location.href = `/search/${this.inputElement.value}`;
    }
    render(){
        return (
           <App searchString={this.props.searchString} searchHandler={this.searchHandler} inputRef={el => this.inputElement = el}/>
        )
    }
};

export default AppContainer;
