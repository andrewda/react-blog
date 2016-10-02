import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                {this.props.children}
            </MuiThemeProvider>
        );
    }
}
