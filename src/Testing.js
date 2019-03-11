import React, {Component} from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import BarChart from './components/BarChart';

class Testing extends Component{

  getToken(token) {
    return localStorage.getItem('token')
  }

  token = this.getToken();

    render(){

        // Check if JWT exists
        if(this.token) {
          return(
              <div className="container-fluid">
                <div><Header /></div>
                  <div className="row">
                    <div className="col-md-1"><Navigation /></div>
                    <div className="col-md-11">
                      <div className = "row">
                        <div className="col-md-12"><BarChart /></div>
                      </div>
                    </div>
                  </div>
               </div>
          );
          window.addEventListener("message", this.receiveMessage, false);
        } else {
          window.alert("Not Authorised");
          window.location = "/";
        }
      }
}

export default Testing;
