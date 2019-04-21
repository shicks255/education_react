import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/Header';
// import './App.css';
import 'bulma/css/bulma.css';
import Courses from "./components/Courses";

class App extends Component {
    render() {
        return (
            <div className="App container">
                <header className="App-header">
                    <Header></Header>
                </header>
                <Courses></Courses>
            </div>
        );
    }
}

export default App;
