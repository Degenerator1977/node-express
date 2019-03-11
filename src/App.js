import React, {Component} from 'react';
import {BrowserRouter, Redirect, Switch, Route} from 'react-router-dom';
import * as d3 from 'd3';
import Login from './Login';
import Home from './Home';
import Test from './Test';
import Testing from './Testing';

class App extends Component {

        render() {
            return (
                <BrowserRouter>
                  <Switch>
                    <Route exact path="/" component={Login}/>
                    <Route exact path="/home" component={Home}/>
                    <Route exact path="/test" component={Test}/>
                    <Route exact path="/testing" component={Testing}/>
                  </Switch>
                </BrowserRouter>
            );
          }
}
export default App;
