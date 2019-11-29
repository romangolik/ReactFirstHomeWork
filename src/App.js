import './style.scss';
import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./components/Home";
import Stuff from "./components/Stuff";
import Contact from "./components/Contact";
import specialComponent from "./components/specialComponent";

class App extends Component {
  render() {
      return (
          <div className="App">
              <HashRouter>
                  <div>
                      <h1>Simple SPA</h1>
                      <ul className="header">
                          <li><NavLink exact="active" to="/">Home</NavLink></li>
                          <li><NavLink to="/stuff">Stuff</NavLink></li>
                          <li><NavLink to="/contact">Contact</NavLink></li>
                          <li><NavLink to="/special">Special</NavLink></li>
                      </ul>
                      <div className="content">
                          <Route exact path="/" component={() => <Home myProps={"Added some text"}/>}/>
                          <Route path="/stuff" component={() => <Stuff myProps={"the last item in the list"}/>}/>
                          <Route path="/contact" component={() => <Contact myProps={"+380962003430"}/>}/>
                          <Route path="/special" component={specialComponent}></Route>
                      </div>
                  </div>
              </HashRouter>
          </div>
      );
  }
}

export default App;
