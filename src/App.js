import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, Board } from './pages';

class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home}/>
                <Route exact path="/board" component={Board}/>
            </div>
        );
    }
}

export default App;