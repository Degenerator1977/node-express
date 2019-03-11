import React, {Component} from 'react';

class Navigation extends Component{

    render(){
        return(
          <div className="row">
            <div className="container-fluid">
              <h3>Menu</h3>
              <nav className="nav flex-column">
                <a className="nav-link" href="/home">Main</a>
                <a className="nav-link" href="/test">Test</a>
                <a className="nav-link" href="/testing">Testing</a>
              </nav>
            </div>
            </div>
        );
    }
}

export default Navigation;
