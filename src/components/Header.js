import React, {Component} from 'react';
import Terramar from '../images/Terramar.jpg';

class Header extends Component{

    render() {
      return(
        <div className = "row">

          <div className="col-md-4">
            <nav className="navbar nav-bar-default">
                <div className="navbar-header">
                  <a className="navbar-brand float-right" href="http://dashboard.terramarnetworks.com/home"><img src={Terramar} /></a>
                </div>
            </nav>
          </div>
          <div className="col-md-6">
              <nav className="navbar nav-bar-default">
                  <div className="display-1">Dashboard</div>
              </nav>
          </div>

          <div className="col-md-2">
              <button type="submit" className="btn btn-outline-secondary mt-3 float-bottom" onClick={this.logout} >Logout</button>
          </div>

        </div>
      );
    }

    logout() {
      localStorage.removeItem('token');
      window.location = "http://dashboard.terramarnetworks.com/";
    }
}

export default Header;
