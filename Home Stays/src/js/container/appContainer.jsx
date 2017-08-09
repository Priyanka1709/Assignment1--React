import React from 'react';
import App from '../components/app';

class AppContainer extends React.Component{
    constructor(props){
        super(props);
        this.searchHandler= this.searchHandler.bind(this);
        this.clearHandler= this.clearHandler.bind(this);
    }
    searchHandler(){
        window.location.href = this.inputElement.value? `/search/${this.inputElement.value}`: `/`;
    }
    clearHandler(){
        this.inputElement.value= '';
    }
    render(){
        return (
           <App searchString={this.props.searchString} clearHandler={this.clearHandler} searchHandler={this.searchHandler} inputRef={el => this.inputElement = el}/>
        )
    }
};

export default AppContainer;
