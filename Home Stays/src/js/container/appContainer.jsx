import React from 'react';
import PropTypes from 'prop-types';
import { bindHandlers } from 'react-bind-handlers';
import App from '../components/app';

class AppContainer extends React.Component {
    handleSearch() {
        window.location.href = this.inputElement.value ? '/search/' + this.inputElement.value : '/';
    }
    handleClear() {
        this.inputElement.value = '';
    }
    render() {
        return (
            <App
                searchString={this.props.match.params.string}
                onClear={this.handleClear}
                onSearch={this.handleSearch}
                inputRef={(el) => {
                    this.inputElement = el;
                }}
            />
        );
    }
}

AppContainer.propTypes = {
    match: PropTypes.object.isRequired,
};

export default bindHandlers(AppContainer);
