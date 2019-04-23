import React, { Component } from 'react';
import logo from './logo.svg';
import Courses from "./components/Courses";
import Header from './components/Header';
import 'bulma/css/bulma.css';
import Course from './models/Course';
import Stats from "./components/Stats";

class App extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            courseUrl: 'http://localhost:8080/course',
            loaded: false,
        };
    }


    componentWillMount()
    {
        // console.log(this.state.courseUrl);
        fetch(this.state.courseUrl)
            .then(res => res.json())
            .then(res => {
                const courses = res.map(x =>{
                    return new Course(x);
                });
                this.setState({courses: courses, loaded: true});
            });
    }

    render() {
        let courses = this.state.loaded ? <Courses courses={this.state.courses}/> : '';
        let stats = this.state.loaded ? <Stats courses={this.state.courses}/> : '';

        return (
            <div className="App container">
                <header className="App-header">
                    <Header></Header>
                </header>
                {courses}
                <br/>
                {stats}
            </div>
        );
    }
}

export default App;
