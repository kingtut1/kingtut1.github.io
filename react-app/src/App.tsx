import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import HomePage from "./HomePage";
import ErrorPage from "./ErrorPage";
import ProjectPage from "./ProjectPage"
import NavigationBar from "./NavigationBar";
import './App.css';

function App() {
  return (
      <React.Fragment>
        <NavigationBar />
        <Router>
          <Switch>
            <Route path = "/home" component = {HomePage}/>
            <Route path = "/projects" component = {ProjectPage}/>
            <Route component = {ErrorPage} />
          </Switch>
        </Router>
      </React.Fragment>
  );
}

export default App;
