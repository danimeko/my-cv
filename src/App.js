import React, { Component } from 'react';
import About from './components/about'
import Contact from './components/contact'
import Home from './components/home'
import Projects from './components/projects'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
         
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route  path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact}  />
          
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
